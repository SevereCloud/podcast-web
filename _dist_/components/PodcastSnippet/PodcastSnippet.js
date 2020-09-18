function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../web_modules/react.js';
import { Button, classNames, getClassName, IOS, Progress, withPlatform } from '../../../web_modules/@vkontakte/vkui.js';
import { Icon16Play, Icon24FavoriteOutline } from '../../../web_modules/@vkontakte/icons.js';
import { timeFormat } from '../../lib.js';
import { Icon24PlayCircle } from '../icons/index.js';
export class PodcastSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      podcast,
      platform,
      className,
      ...restProps
    } = this.props;
    return /*#__PURE__*/React.createElement("div", _extends({
      className: classNames(getClassName('PodcastSnippet', platform), className)
    }, restProps), /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet__cover",
      style: {
        backgroundImage: `url(${podcast.image})`
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet__info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet__favorite"
    }, /*#__PURE__*/React.createElement(Icon24FavoriteOutline, null)), /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet__name"
    }, podcast.name), /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet__sub"
    }, podcast.author, " \xB7 ", timeFormat(podcast.originalDuration)), platform === IOS ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon24PlayCircle, {
      fill: "#fff"
    }), /*#__PURE__*/React.createElement(Progress, {
      value: 0
    }), /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet__duration"
    }, "-00:00")) : /*#__PURE__*/React.createElement(Button, {
      before: /*#__PURE__*/React.createElement(Icon16Play, null),
      size: "m",
      mode: "overlay_primary"
    }, "\u0421\u041B\u0423\u0428\u0410\u0422\u042C")));
  }

}
export default withPlatform(PodcastSnippet);
//# sourceMappingURL=PodcastSnippet.js.map
