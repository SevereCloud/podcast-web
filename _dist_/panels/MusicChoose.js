import React from '../../web_modules/react.js';
import { Avatar, Cell, List, PanelHeader, PanelHeaderBack, Search } from '../../web_modules/@vkontakte/vkui.js';
import { audios } from '../types.js';
export class MusicChoose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  get audios() {
    const search = this.state.search.toLowerCase();
    return audios.filter(({
      title,
      artist
    }) => title.toLowerCase().indexOf(search) > -1 || artist.toLowerCase().indexOf(search) > -1);
  }

  render() {
    const {
      goBack,
      choseAudio
    } = this.props; // const {  } = this.state;

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0443\u0437\u044B\u043A\u0443"), /*#__PURE__*/React.createElement(Search, {
      value: this.state.search,
      onChange: e => this.setState({
        search: e.target.value
      }),
      after: null
    }), this.audios.length > 0 && /*#__PURE__*/React.createElement(List, null, this.audios.map(audio => /*#__PURE__*/React.createElement(Cell, {
      key: audio.id,
      before: /*#__PURE__*/React.createElement(Avatar, {
        mode: "image",
        src: audio.photoURL
      }),
      description: audio.artist,
      onClick: () => choseAudio(audio)
    }, audio.title))));
  }

}
//# sourceMappingURL=MusicChoose.js.map
