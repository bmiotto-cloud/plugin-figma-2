// Main plugin code for Instaffo Copywriter
// Handles communication between Figma and the plugin UI

figma.showUI(__html__, { 
  width: 400, 
  height: 600,
  themeColors: true 
});

// Store selected text elements
let selectedTextNodes: TextNode[] = [];

// Message types
interface BaseMessage {
  type: string;
}

interface GetSelectionMessage extends BaseMessage {
  type: 'get-selection';
}

interface ApplyTextMessage extends BaseMessage {
  type: 'apply-text';
  nodeId: string;
  text: string;
}

interface GetAllTextMessage extends BaseMessage {
  type: 'get-all-text';
}

type PluginMessage = GetSelectionMessage | ApplyTextMessage | GetAllTextMessage;

// Handle messages from UI
figma.ui.onmessage = (msg: PluginMessage) => {
  switch (msg.type) {
    case 'get-selection':
      handleGetSelection();
      break;
      
    case 'apply-text':
      handleApplyText(msg.nodeId, msg.text);
      break;
      
    case 'get-all-text':
      handleGetAllText();
      break;
      
    default:
      console.log('Unknown message type:', msg);
  }
};

// Get currently selected text elements
function handleGetSelection() {
  const selection = figma.currentPage.selection;
  selectedTextNodes = [];
  
  const textElements: Array<{id: string, text: string, fontFamily: string, fontSize: number}> = [];
  
  selection.forEach(node => {
    if (node.type === 'TEXT') {
      const textNode = node as TextNode;
      selectedTextNodes.push(textNode);
      
      // Get text content safely
      let textContent = '';
      try {
        textContent = textNode.characters;
      } catch (e) {
        textContent = '[Mixed content]';
      }
      
      // Get font info safely
      let fontFamily = 'Unknown';
      let fontSize = 12;
      try {
        const fontName = textNode.fontName;
        if (typeof fontName === 'object' && fontName.family) {
          fontFamily = fontName.family;
        }
        const size = textNode.fontSize;
        if (typeof size === 'number') {
          fontSize = size;
        }
      } catch (e) {
        // Use defaults
      }
      
      textElements.push({
        id: textNode.id,
        text: textContent,
        fontFamily,
        fontSize
      });
    }
  });
  
  figma.ui.postMessage({
    type: 'selection-data',
    elements: textElements,
    count: textElements.length
  });
}

// Apply generated text to a specific node
async function handleApplyText(nodeId: string, newText: string) {
  try {
    const node = figma.getNodeById(nodeId);
    
    if (node && node.type === 'TEXT') {
      const textNode = node as TextNode;
      
      // Load font before changing text
      await figma.loadFontAsync(textNode.fontName as FontName);
      
      // Apply the new text
      textNode.characters = newText;
      
      figma.ui.postMessage({
        type: 'text-applied',
        success: true,
        nodeId: nodeId
      });
      
      // Notify user
      figma.notify('✅ Text updated successfully!');
    } else {
      throw new Error('Text node not found');
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    figma.ui.postMessage({
      type: 'text-applied',
      success: false,
      error: errorMessage,
      nodeId: nodeId
    });
    
    figma.notify('❌ Failed to update text: ' + errorMessage);
  }
}

// Get all text elements on current page
function handleGetAllText() {
  const allTextNodes: Array<{id: string, text: string, name: string}> = [];
  
  function findTextNodes(node: SceneNode) {
    if (node.type === 'TEXT') {
      const textNode = node as TextNode;
      let textContent = '';
      try {
        textContent = textNode.characters;
      } catch (e) {
        textContent = '[Mixed content]';
      }
      
      allTextNodes.push({
        id: textNode.id,
        text: textContent,
        name: textNode.name
      });
    }
    
    if ('children' in node) {
      node.children.forEach(findTextNodes);
    }
  }
  
  figma.currentPage.children.forEach(findTextNodes);
  
  figma.ui.postMessage({
    type: 'all-text-data',
    elements: allTextNodes
  });
}

// Initialize plugin
figma.on('selectionchange', () => {
  // Auto-refresh selection when user changes selection
  handleGetSelection();
});

// Initial selection check
handleGetSelection();