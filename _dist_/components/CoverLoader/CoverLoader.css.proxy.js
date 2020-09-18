
const code = ".CoverLoader {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  border: 1px solid var(--field_border);\n  background-color: var(--field_background);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  outline: none;\n  text-decoration: none;\n  margin: 0 auto;\n  padding: 0;\n  cursor: default;\n  color: var(--accent);\n  overflow: hidden;\n}\n\n.CoverLoader__background {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n}\n\n.CoverLoader.Tappable--active {\n  opacity: 0.4;\n}\n\n.CoverLoader--android {\n  border-radius: 8px;\n}\n\n.CoverLoader--ios {\n  border-radius: 10px;\n}\n\n.CoverLoader--load {\n  border: none;\n}\n\n.CoverLoader__input {\n  display: none;\n}\n\n.CoverLoader__in {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.CoverLoader--load .CoverLoader__in {\n  display: none;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);