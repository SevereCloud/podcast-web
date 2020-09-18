import React from '../../../web_modules/react.js'; // @ts-ignore

import BrowserSymbol from '../../../web_modules/svg-baker-runtime/browser-symbol.js'; // @ts-ignore

import { addSpriteSymbol, useIsomorphicLayoutEffect } from '../../../web_modules/@vkontakte/icons/dist/sprite.js';
import { SvgIcon } from '../../../web_modules/@vkontakte/icons/dist/SvgIcon.js';
const viewBox = '0 0 24 24';
const id = 'play_circle_24';
const content = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="play_circle_24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.6798 11.465L9.3589 6.83254C9.26177 6.77847 9.15161 6.75 9.03949 6.75C8.68631 6.75 8.4 7.02646 8.4 7.36749V16.6324C8.4 16.7407 8.42948 16.847 8.48549 16.9408C8.66189 17.2363 9.05294 17.3377 9.3589 17.1674L17.6798 12.5349C17.7773 12.4806 17.8582 12.4025 17.9144 12.3084C18.0908 12.0129 17.9858 11.6353 17.6798 11.465Z" fill="currentColor"/></svg>';
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

const Icon24PlayCircle = props => {
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

Icon24PlayCircle.mountIcon = mountIcon;
export default Icon24PlayCircle;
//# sourceMappingURL=Icon24PlayCircle.js.map
