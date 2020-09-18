import React from '../../../web_modules/react.js'; // @ts-ignore

import BrowserSymbol from '../../../web_modules/svg-baker-runtime/browser-symbol.js'; // @ts-ignore

import { addSpriteSymbol, useIsomorphicLayoutEffect } from '../../../web_modules/@vkontakte/icons/dist/sprite.js';
import { SvgIcon } from '../../../web_modules/@vkontakte/icons/dist/SvgIcon.js';
const viewBox = '0 0 24 24';
const id = 'add_circle_24';
const content = '<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="add_circle_24"><path d="m12 1c6.0751 0 11 4.9249 11 11 0 6.0751-4.9249 11-11 11-6.0751 0-11-4.9249-11-11 0-6.0751 4.9249-11 11-11zm0 5c-0.5523 0-1 0.44772-1 1v4h-4c-0.51284 0-0.93551 0.386-0.99327 0.8834l-0.00673 0.1166c0 0.5523 0.44772 1 1 1h4v4c0 0.5128 0.386 0.9355 0.8834 0.9933l0.1166 0.0067c0.5523 0 1-0.4477 1-1v-4h4c0.5128 0 0.9355-0.386 0.9933-0.8834l0.0067-0.1166c0-0.5523-0.4477-1-1-1h-4v-4c0-0.51284-0.386-0.93551-0.8834-0.99327l-0.1166-0.00673z" fill="currentColor"/></svg>';
let isMounted = false;

function mountIcon() {
  if (!isMounted) {
    addSpriteSymbol(new BrowserSymbol({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

const Icon24AddCircle = props => {
  useIsomorphicLayoutEffect(() => {
    mountIcon();
  }, []);
  return /*#__PURE__*/React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: viewBox,
    id: id,
    width: props.width && !isNaN(props.width) ? +props.width : 24,
    height: props.height && !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24AddCircle.mountIcon = mountIcon;
export default Icon24AddCircle;
//# sourceMappingURL=Icon24AddCircle.js.map
