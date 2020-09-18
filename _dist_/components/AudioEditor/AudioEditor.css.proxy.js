
const code = ".timeline-border {\n    -webkit-border-top-left-radius: 10px;\n    -webkit-border-top-right-radius: 10px;\n    -moz-border-radius-topleft: 10px;\n    -moz-border-radius-topright: 10px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.wavesurfer-region {\n    border-top: 1px solid var(--accent)!important;\n    border-bottom: 1px solid var(--accent)!important;\n    height: calc(100% - 2px)!important;\n    background-color: transparent!important;\n}\n\n.wavesurfer-handle {\n    border-top: 30px solid var(--accent)!important;\n    border-bottom: 30px solid var(--accent)!important;\n    height: calc(100% - 60px)!important;\n    border-left: 4px solid var(--accent)!important;\n    border-right: 4px solid var(--accent)!important;\n    width: 3px!important;\n    min-width: 2px!important;\n    max-width: 2px!important;\n    background-color: white!important;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);