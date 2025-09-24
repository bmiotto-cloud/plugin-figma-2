import { useState, useEffect } from "react";
import { CopywriterPlugin } from "./CopywriterPlugin";
import { PluginAuth } from "./PluginAuth";

// Modern Figma plugin message types
interface FigmaMessage {
  type: 'selected-text-response' | 'selection-changed' | 'plugin-initialized' | 'text-applied' | 'user-info-response' | 'document-changed' | 'error';
  text?: string;
  nodeId?: string;
  nodeName?: string;
  success?: boolean;
  user?: {
    id?: string;
    name?: string;
    photoUrl?: string;
  };
  viewport?: {
    center: { x: number; y: number };
    zoom: number;
  };
  selection?: {
    text: string;
    nodeId?: string;
    nodeName?: string;
  };
  message?: string;
  error?: string;
}

export function FigmaPluginApp() {
  const [selectedText, setSelectedText] = useState("");
  const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>();
  const [selectedNodeName, setSelectedNodeName] = useState<string | undefined>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ id?: string; name?: string; photoUrl?: string } | null>(null);
  const [isPluginReady, setIsPluginReady] = useState(false);

  // Modern message handling with comprehensive state management
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const msg: FigmaMessage = event.data.pluginMessage;
      
      if (msg) {
        switch (msg.type) {
          case 'plugin-initialized':
            setIsPluginReady(true);
            if (msg.selection) {
              setSelectedText(msg.selection.text || "");
              setSelectedNodeId(msg.selection.nodeId);
              setSelectedNodeName(msg.selection.nodeName);
            }
            if (msg.user) {
              setUser(msg.user);
            }
            break;
            
          case 'selected-text-response':
          case 'selection-changed':
            setSelectedText(msg.text || "");
            setSelectedNodeId(msg.nodeId);
            setSelectedNodeName(msg.nodeName);
            break;
            
          case 'text-applied':
            if (msg.success) {
              // Text was successfully applied, could show success state
              console.log('Text applied successfully');
            }
            break;
            
          case 'user-info-response':
            if (msg.user) {
              setUser(msg.user);
            }
            break;
            
          case 'document-changed':
            // Handle document changes if needed
            console.log('Document changed');
            break;
            
          case 'error':
            console.error('Plugin error:', msg.message);
            break;
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Plugin will send initial state automatically now
    // No need to explicitly request it

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Helper function to send messages to Figma
  const sendToFigma = (message: any) => {
    parent.postMessage({ pluginMessage: message }, '*');
  };

  const handleClose = () => {
    sendToFigma({ type: 'close-plugin' });
  };

  const handleApplyText = (text: string) => {
    sendToFigma({ 
      type: 'apply-text', 
      text: text,
      nodeId: selectedNodeId // Pass the specific node ID for precise targeting
    });
    
    // Track usage for analytics
    sendToFigma({
      type: 'track-usage',
      action: 'apply-copy',
      data: {
        originalLength: selectedText.length,
        newLength: text.length,
        hasPlaceholders: text.includes('{{'),
        nodeId: selectedNodeId
      }
    });
  };

  const handleNotify = (message: string, isError?: boolean) => {
    sendToFigma({
      type: 'notify',
      message: message,
      error: isError || false
    });
  };

  // Show authentication screen if not authenticated
  if (!isAuthenticated) {
    return (
      <PluginAuth 
        onAuthenticated={() => setIsAuthenticated(true)}
        onNotify={handleNotify}
      />
    );
  }

  return (
    <div className="size-full bg-white">
      <CopywriterPlugin 
        initialText={selectedText}
        onClose={handleClose}
        onApplyText={handleApplyText}
        onNotify={handleNotify}
        nodeInfo={selectedNodeId ? {
          id: selectedNodeId,
          name: selectedNodeName || 'Text Layer'
        } : undefined}
        user={user}
      />
    </div>
  );
}