import React from '../../../web_modules/react.js'; // @ts-ignore

import BrowserSymbol from '../../../web_modules/svg-baker-runtime/browser-symbol.js'; // @ts-ignore

import { addSpriteSymbol, useIsomorphicLayoutEffect } from '../../../web_modules/@vkontakte/icons/dist/sprite.js';
import { SvgIcon } from '../../../web_modules/@vkontakte/icons/dist/SvgIcon.js';
const viewBox = '0 0 24 24';
const id = 'cut_24';
const content = '<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="cut_24"><path d="m6 9c1.6568 0 3-1.3432 3-3s-1.3432-3-3-3-3 1.3432-3 3 1.3432 3 3 3z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m6 21c1.6568 0 3-1.3431 3-3s-1.3432-3-3-3-3 1.3431-3 3 1.3432 3 3 3z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M20 4L8.12 15.88" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M14.47 14.48L20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M8.12 8.12L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>';
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

const Icon24Cut = props => {
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

Icon24Cut.mountIcon = mountIcon;
export default Icon24Cut;
//# sourceMappingURL=Icon24Cut.js.map
