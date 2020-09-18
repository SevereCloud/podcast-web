import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from '../web_modules/react.js';
import ReactDOM from '../web_modules/react-dom.js';
import { App } from './App.js';
import { VKMiniAppAPI } from '../web_modules/@vkontakte/vk-mini-apps-api.js';
import bridge from '../web_modules/@vkontakte/vk-bridge.js';
import '../web_modules/@vkontakte/vkui/dist/vkui.css.proxy.js';
import './components/PodcastSnippet/PodcastSnippet.css.proxy.js';
import './components/CoverLoader/CoverLoader.css.proxy.js';
import './components/AudioEditor/AudioEditor.css.proxy.js';
import './components/TimeCodeEditor/TimeCodeEditor.css.proxy.js';
import './panels/Preview.css.proxy.js';
import './panels/Creating.css.proxy.js';
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, {
  vkAPI: new VKMiniAppAPI(bridge)
})), document.getElementById('root')); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement

if (import.meta.hot) {
  import.meta.hot.accept();
}
//# sourceMappingURL=index.js.map
