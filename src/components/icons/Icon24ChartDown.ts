import React, { FC, HTMLAttributes, RefCallback, RefObject } from 'react';
// @ts-ignore
import BrowserSymbol from 'svg-baker-runtime/browser-symbol';
// @ts-ignore
import {
  addSpriteSymbol,
  useIsomorphicLayoutEffect,
} from '@vkontakte/icons/dist/sprite';
import { SvgIcon } from '@vkontakte/icons/dist/SvgIcon.js';

const viewBox = '0 0 24 24';
const id = 'chart_down_24';
const content =
  '<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="chart_down_24"><path d="M12 20V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M6 20V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m18 20v-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>';
let isMounted = false;
function mountIcon() {
  if (!isMounted) {
    addSpriteSymbol(
      new BrowserSymbol({
        id: id,
        viewBox: viewBox,
        content: content,
      }),
    );
    isMounted = true;
  }
}
export interface Icon24ChartDownProps extends HTMLAttributes<HTMLDivElement> {
  fill?: string;
  width?: number;
  height?: number;
  getRootRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement>;
}
const Icon24ChartDown: FC<Icon24ChartDownProps> = (props) => {
  useIsomorphicLayoutEffect(() => {
    mountIcon();
  }, []);
  return React.createElement(
    SvgIcon,
    Object.assign({}, props, {
      viewBox: viewBox,
      id: id,
      width: props.width && !isNaN(props.width) ? +props.width : 24,
      height: props.height && !isNaN(props.height) ? +props.height : 24,
    }),
  );
};
(Icon24ChartDown as any).mountIcon = mountIcon;
export default Icon24ChartDown;
