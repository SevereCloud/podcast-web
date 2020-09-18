import React from '../../web_modules/react.js';
import { Button, Placeholder } from '../../web_modules/@vkontakte/vkui.js';
import { Icon56CheckCircleOutline, Icon56AddCircleOutline } from '../../web_modules/@vkontakte/icons.js';
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      setPanel,
      podcastDone
    } = this.props; // const {  } = this.state;

    return /*#__PURE__*/React.createElement(Placeholder, {
      style: {
        background: 'transparent'
      },
      icon: podcastDone ? /*#__PURE__*/React.createElement(Icon56CheckCircleOutline, {
        fill: "var(--accent)"
      }) : /*#__PURE__*/React.createElement(Icon56AddCircleOutline, null),
      header: podcastDone ? 'Подкаст добавлен' : 'Добавьте первый подкаст',
      action: /*#__PURE__*/React.createElement(Button, {
        size: "m",
        onClick: () => setPanel('creating')
      }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u043A\u0430\u0441\u0442"),
      stretched: true
    }, podcastDone ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u0420\u0430\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0430\u043C", /*#__PURE__*/React.createElement("br", null), "\u043E\xA0\u043D\u043E\u0432\u043E\u043C\xA0\u043F\u043E\u0434\u043A\u0430\u0441\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/React.createElement("br", null), "\u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u0435\u0439.") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435, \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0438 \u0434\u0435\u043B\u0438\u0442\u0435\u0441\u044C", /*#__PURE__*/React.createElement("br", null), "\u043F\u043E\u0434\u043A\u0430\u0441\u0442\u0430\u043C\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430."));
  }

}
//# sourceMappingURL=Main.js.map
