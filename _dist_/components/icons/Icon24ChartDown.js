import React from '../../../web_modules/react.js'; // @ts-ignore

import BrowserSymbol from '../../../web_modules/svg-baker-runtime/browser-symbol.js'; // @ts-ignore

import { addSpriteSymbol, useIsomorphicLayoutEffect } from '../../../web_modules/@vkontakte/icons/dist/sprite.js';
import { SvgIcon } from '../../../web_modules/@vkontakte/icons/dist/SvgIcon.js';
const viewBox = '0 0 24 24';
const id = 'chart_down_24';
const content = '<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="chart_down_24"><path d="M12 20V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M6 20V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m18 20v-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>';
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

const Icon24ChartDown = props => {
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

Icon24ChartDown.mountIcon = mountIcon;
export default Icon24ChartDown;
//# sourceMappingURL=Icon24ChartDown.js.map
