
const code = ".TimeCodeEditorInput {\n  display: flex;\n}\n\n.TimeCodeEditorInput > .Input:first-child {\n  flex-grow: 1;\n}\n\n.TimeCodeEditorInput > .Input:last-child {\n  margin-left: 16px;\n  margin-right: 6px;\n  width: 76px;\n}\n\n.Cell__remove-marker {\n  min-width: 21px;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);