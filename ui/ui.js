// ui.js
// UI state and interactions

const vscode = null; // placeholder for Figma environment
const selectedCopyInput = document.getElementById('selectedCopyInput');
const autofillIndicator = document.getElementById('autofillIndicator');
const suggestCopyBtn = document.getElementById('suggestCopyBtn');
const germanToggle = document.getElementById('germanToggle');
const advancedToggle = document.getElementById('advancedToggle');
const advancedBox = document.getElementById('advancedBox');
const advArrow = document.getElementById('advArrow');
const toneChips = document.getElementById('toneChips');
const lengthChips = document.getElementById('lengthChips');
const custChips = document.getElementById('custChips');
const placeholdersCompactList = document.getElementById('placeholdersCompactList');
const placeholderList = document.getElementById('placeholderList');
const addAllBtn = document.getElementById('addAllBtn');
const includePlaceholderBtn = document.getElementById('includePlaceholderBtn');
const cancelPlaceholderBtn = document.getElementById('cancelPlaceholderBtn');
const tabNew = document.getElementById('tab-new');
const tabPlaceholders = document.getElementById('tab-placeholders');
const newCopyContainer = document.getElementById('newCopyContainer');
const placeholdersContainer = document.getElementById('placeholdersContainer');
const placeholdersCompact = document.getElementById('placeholdersCompact');
const suggestedPage = document.getElementById('suggestedPage');
const suggestedCopyText = document.getElementById('suggestedCopyText');
const makeChangesBtn = document.getElementById('makeChangesBtn');
const startOverBtn = document.getElementById('startOverBtn');
const applyBtn = document.getElementById('applyBtn');
const statusLine = document.getElementById('statusLine');
const closeBtn = document.getElementById('closeBtn');

const CLOSE = () => parent.postMessage({ pluginMessage: { type: 'close' } }, '*');

// placeholder library
const PLACEHOLDERS = [
  "{{name}}","{{company}}","{{jobTitle}}","{{firstName}}","{{lastName}}",
  "{{email}}","{{phone}}","{{city}}","{{country}}","{{cta}}","{{product}}","{{price}}","{{date}}","{{discount}}"
];

let autoFilled = false;
let selectedPlaceholder = null; // single selection

// UI init
function createPlaceholderElement(p) {
  const el = document.createElement('div');
  el.className = 'placeholder';
  el.textContent = p;
  el.dataset.placeholder = p;
  el.addEventListener('click', () => {
    // single selection logic
    const currently = placeholderList.querySelector('.placeholder.checked');
    if (currently) currently.classList.remove('checked');
    el.classList.add('checked');
    selectedPlaceholder = p;
  });
  return el;
}
PLACEHOLDERS.forEach(ph => {
  // compact view item
  const c = createPlaceholderElement(ph);
  c.addEventListener('click', () => {
    // include/remove from text quickly: toggle add/remove but single-selection enforced
    const already = c.classList.contains('checked');
    placeholderList.querySelectorAll('.placeholder').forEach(p => p.classList.remove('checked'));
    if (!already) {
      c.classList.add('checked');
      selectedPlaceholder = ph;
      // auto-insert into text where caret is (simple append)
      selectedCopyInput.value = selectedCopyInput.value + (selectedCopyInput.value ? " " : "") + ph;
    } else {
      c.classList.remove('checked');
      selectedPlaceholder = null;
    }
  });
  placeholdersCompactList.appendChild(c);

  // full list copy for placeholders tab
  const full = createPlaceholderElement(ph);
  placeholderList.appendChild(full);
});

// Tab switching
tabNew.addEventListener('click', () => {
  tabNew.classList.add('active'); tabPlaceholders.classList.remove('active');
  newCopyContainer.classList.remove('hidden'); placeholdersContainer.classList.add('hidden');
});
tabPlaceholders.addEventListener('click', () => {
  tabPlaceholders.classList.add('active'); tabNew.classList.remove('active');
  placeholdersContainer.classList.remove('hidden'); newCopyContainer.classList.add('hidden');
});

// Advanced toggle
let advOpen = false;
advancedToggle.addEventListener('click', () => {
  advOpen = !advOpen;
  advancedBox.classList.toggle('hidden', !advOpen);
  advArrow.textContent = advOpen ? '▾' : '▸';
});

// Chip selection helpers
function setupChips(container, single=true, defaultSelector=null) {
  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (single) {
        container.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
      } else {
        chip.classList.toggle('selected');
      }
    });
    if (defaultSelector && chip.dataset[defaultSelector.key] === defaultSelector.val) {
      chip.classList.add('selected');
    }
  });
}
setupChips(toneChips, true, { key: 'tone', val: 'regular' });
setupChips(lengthChips, true, { key: 'length', val: 'same' });
setupChips(custChips, false);

// Placeholder tab buttons
includePlaceholderBtn.addEventListener('click', () => {
  const sel = placeholderList.querySelector('.placeholder.checked');
  if (sel) {
    const ph = sel.dataset.placeholder;
    selectedCopyInput.value = selectedCopyInput.value + (selectedCopyInput.value ? " " : "") + ph;
    // go back to New copy tab
    tabNew.click();
  }
});
cancelPlaceholderBtn.addEventListener('click', () => {
  tabNew.click();
});
addAllBtn.addEventListener('click', () => {
  // Quickly append all placeholders (Add all)
  const all = PLACEHOLDERS.join(' ');
  selectedCopyInput.value = (selectedCopyInput.value ? selectedCopyInput.value + ' ' : '') + all;
});

// Auto-request selection text from plugin controller
parent.postMessage({ pluginMessage: { type: 'request-selection' } }, '*');
window.onmessage = (event) => {
  const msg = event.data.pluginMessage;
  if (!msg) return;
  if (msg.type === 'selection') {
    if (msg.text) {
      selectedCopyInput.value = msg.text;
      autoFilled = true;
      autofillIndicator.style.display = 'inline-block';
    } else {
      autoFilled = false;
      autofillIndicator.style.display = 'none';
    }
  }
  if (msg.type === 'applied') {
    if (msg.success) {
      statusLine.textContent = "Applied successfully.";
      // close plugin maybe
      // CLOSE();
    } else {
      statusLine.textContent = "Unable to apply to selection.";
    }
  }
};

// Collect advanced settings
function collectSettings() {
  const tone = toneChips.querySelector('.chip.selected')?.dataset.tone || 'regular';
  const length = lengthChips.querySelector('.chip.selected')?.dataset.length || 'same';
  const cust = custChips.querySelector('.chip.selected')?.dataset.cust || null;
  const german = germanToggle.checked;
  return { tone, length, cust, german };
}

// Suggest copy flow
let suggestionInChangeMode = false;
let lastSuggestion = '';
suggestCopyBtn.addEventListener('click', async () => {
  const inputText = selectedCopyInput.value.trim();
  if (!inputText) { statusLine.textContent = "Type or select some copy to start."; return; }
  const settings = collectSettings();
  statusLine.textContent = "Generating...";
  suggestCopyBtn.disabled = true;

  // Call your backend (server must be running)
  try {
    const res = await fetch(window.location.origin + '/generate', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        input: inputText,
        settings,
        placeholder: selectedPlaceholder,
        changeRequest: suggestionInChangeMode ? selectedCopyInput.value : null
      })
    });
    if (!res.ok) throw new Error("Server error");
    const data = await res.json();
    lastSuggestion = data.suggestion;
    // Show suggested page
    suggestedCopyText.textContent = data.suggestion;
    suggestedPage.classList.remove('hidden');
    // hide input view
    newCopyContainer.classList.add('hidden');
    tabNew.classList.remove('active');
    statusLine.textContent = "";
  } catch (err) {
    statusLine.textContent = "Error generating — falling back to basic suggestion.";
    suggestedCopyText.textContent = "[Fallback] " + fallbackSuggestion(selectedCopyInput.value);
    suggestedPage.classList.remove('hidden');
    newCopyContainer.classList.add('hidden');
  } finally {
    suggestCopyBtn.disabled = false;
  }
});

function fallbackSuggestion(src) {
  // Simple fallback: summarize or rephrase
  if (!src) return "No input provided.";
  return src + " — Rewritten (basic fallback).";
}

// Suggested page actions
makeChangesBtn.addEventListener('click', () => {
  // return to New Copy with change request mode
  suggestedPage.classList.add('hidden');
  newCopyContainer.classList.remove('hidden');
  tabNew.classList.add('active');
  suggestionInChangeMode = true;
  // prefill input so user edits
  selectedCopyInput.value = lastSuggestion;
});

startOverBtn.addEventListener('click', () => {
  // Clear everything
  selectedCopyInput.value = '';
  PLACEHOLDERS.forEach(p => {
    const el = placeholdersCompactList.querySelector(`[data-placeholder="${p}"]`);
    if (el) el.classList.remove('checked');
  });
  selectedPlaceholder = null;
  suggestionInChangeMode = false;
  lastSuggestion = '';
  suggestedPage.classList.add('hidden');
  newCopyContainer.classList.remove('hidden');
  tabNew.classList.add('active');
});

applyBtn.addEventListener('click', () => {
  // Send apply-copy message to plugin main controller
  parent.postMessage({ pluginMessage: { type: 'apply-copy', copy: suggestedCopyText.textContent } }, '*');
});

closeBtn.addEventListener('click', () => {
  parent.postMessage({ pluginMessage: { type: 'close' } }, '*');
});
