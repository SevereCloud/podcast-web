
const code = ".PodcastInfo {\n  display: flex;\n  align-items: center;\n}\n\n.PodcastInfo .Cover {\n  width: 72px;\n  height: 72px;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  outline: none;\n  text-decoration: none;\n}\n\n.PodcastInfo .Cover .Button {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.35);\n  color: #fff;\n}\n\n.PodcastInfo__text {\n  margin-left: 14px;\n  display: flex;\n  flex-direction: column;\n}\n\n.PodcastInfo__text > * {\n  margin-top: 6px;\n}\n\n.PodcastInfo__text > *:first-child {\n  margin-top: 0;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);