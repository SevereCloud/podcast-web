function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../web_modules/react.js';
import { PanelHeader, PanelHeaderBack } from '../../web_modules/@vkontakte/vkui.js';
import AudioEditor from '../components/AudioEditor/index.js';
import TimeCodeEditor from '../components/TimeCodeEditor/TimeCodeEditor.js';
export class Edit extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setPodcast", podcast => {
      const newPodcast = Object.assign({}, this.state.podcast, podcast);
      this.setState({
        podcast: newPodcast
      });
    });

    this.state = {
      highlightErrors: false,
      podcast: props.podcast
    };
    this.setPodcast = this.setPodcast.bind(this);
  }

  render() {
    const {
      goBack,
      podcast,
      updatePodcast
    } = this.props; // const {  } = this.state;

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement(AudioEditor, {
      podcast: podcast
    }), /*#__PURE__*/React.createElement(TimeCodeEditor, {
      podcast: podcast,
      updatePodcast: updatePodcast
    }));
  }

}
//# sourceMappingURL=Edit.js.map
