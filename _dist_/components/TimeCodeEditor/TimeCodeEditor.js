function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../web_modules/react.js';
import { Group, Header, CellButton, Caption, Div, List, Cell, Input, platform, IOS } from '../../../web_modules/@vkontakte/vkui.js';
import { Icon24Add } from '../../../web_modules/@vkontakte/icons.js';
import { timeFormat } from '../../lib.js';
import { IMaskMixin } from '../../../web_modules/react-imask.js';
import IMask from '../../../web_modules/imask.js';
import { Icon24AddCircle } from '../icons/index.js';

const sortingTimeCode = (a, b) => {
  return a.time - b.time;
};

const MaskedInput = IMaskMixin(({
  inputRef,
  ...props
}) => /*#__PURE__*/React.createElement(Input, _extends({}, props, {
  getRef: inputRef
})));
export class TimeCodeEditor extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setPodcast", podcast => {
      const newPodcast = Object.assign({}, this.props.podcast, podcast);
      this.props.updatePodcast(newPodcast);
    });

    _defineProperty(this, "setPodcastTimeCodeName", (index, name) => {
      const newTimeCodes = [...this.props.podcast.timeCodes];
      newTimeCodes[index].name = name;
      this.setPodcast({
        timeCodes: newTimeCodes
      });
    });

    _defineProperty(this, "setPodcastTimeCodeTime", (index, time) => {
      let timestamp = 0;
      const find = time.match(/([\d]{2}):([\d]{2})/);

      if (find) {
        timestamp = parseInt(find[2]) + parseInt(find[1]) * 60;
        const newTimeCodes = [...this.props.podcast.timeCodes];
        newTimeCodes[index].time = timestamp;
        this.setPodcast({
          timeCodes: newTimeCodes
        });
      }
    });

    _defineProperty(this, "addPodcastTimeCode", () => {
      const newTimeCodes = [...this.props.podcast.timeCodes];
      newTimeCodes.unshift({
        name: 'Название',
        time: 0
      });
      this.setPodcast({
        timeCodes: newTimeCodes
      });
    });

    _defineProperty(this, "sortPodcast", () => {
      this.setPodcast({
        timeCodes: [...this.props.podcast.timeCodes].sort(sortingTimeCode)
      });
    });

    _defineProperty(this, "removePodcastTimeCodeTime", index => {
      const newTimeCodes = [...this.props.podcast.timeCodes];
      newTimeCodes.splice(index, 1);
      this.setPodcast({
        timeCodes: newTimeCodes
      });
    });

    this.state = {
      podcast: props.podcast
    };
    this.setPodcast = this.setPodcast.bind(this);
  }

  render() {
    const {
      podcast
    } = this.props; // const {  } = this.state;

    return /*#__PURE__*/React.createElement(Group, {
      header: /*#__PURE__*/React.createElement(Header, {
        mode: "secondary"
      }, "\u0422\u0430\u0439\u043C\u043A\u043E\u0434\u044B"),
      className: "TimeCodeEditor"
    }, /*#__PURE__*/React.createElement(List, null, podcast.timeCodes.map((timeCode, index) => /*#__PURE__*/React.createElement(Cell, {
      removable: true,
      key: index,
      onRemove: () => this.removePodcastTimeCodeTime(index)
    }, /*#__PURE__*/React.createElement("div", {
      className: "TimeCodeEditorInput"
    }, /*#__PURE__*/React.createElement(Input, {
      value: timeCode.name,
      onChange: e => this.setPodcastTimeCodeName(index, e.target.value)
    }), /*#__PURE__*/React.createElement(MaskedInput, {
      mask: "MM:SS",
      blocks: {
        MM: {
          mask: IMask.MaskedRange,
          from: 0,
          to: 99
        },
        SS: {
          mask: IMask.MaskedRange,
          from: 0,
          to: 59
        }
      },
      value: timeFormat(timeCode.time),
      onAccept: value => {
        this.setPodcastTimeCodeTime(index, value);
      },
      onBlur: () => {
        this.sortPodcast();
      }
    }))))), /*#__PURE__*/React.createElement(CellButton, {
      before: platform() === IOS ? /*#__PURE__*/React.createElement(Icon24AddCircle, null) : /*#__PURE__*/React.createElement(Icon24Add, null),
      onClick: this.addPodcastTimeCode
    }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0430\u0439\u043C\u043A\u043E\u0434"), /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Caption, {
      weight: "regular",
      level: "1",
      style: {
        color: 'var(--text_secondary)'
      }
    }, "\u041E\u0442\u043C\u0435\u0442\u043A\u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0441 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u0442\u0435\u043C\u044B. \u041F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u044F\u043C \u043B\u0435\u0433\u0447\u0435 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u0443.")));
  }

}
export default TimeCodeEditor;
//# sourceMappingURL=TimeCodeEditor.js.map
