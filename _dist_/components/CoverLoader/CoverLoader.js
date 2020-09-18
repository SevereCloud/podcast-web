function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from '../../../web_modules/react.js';
import { getClassName, classNames, Tappable, withPlatform } from '../../../web_modules/@vkontakte/vkui.js';

class CoverLoader extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "change", input => {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader();

        reader.onload = e => {
          if (e.target && typeof e.target.result === 'string') {
            this.setState({
              value: e.target.result
            });

            if (this.props.onLoadImage) {
              this.props.onLoadImage(e.target.result);
            }
          }
        };

        reader.readAsDataURL(input.target.files[0]);
      }

      if (this.props.onChange) {
        this.props.onChange(input);
      }
    });

    _defineProperty(this, "dismiss", e => {
      this.setState({
        value: undefined
      });

      if (this.props.onDismiss) {
        this.props.onDismiss(e);
      }
    });

    this.state = {
      value: this.props.image
    };
  }

  render() {
    const {
      className,
      before,
      getRef,
      getRootRef,
      style,
      platform,
      onChange,
      onDismiss,
      onLoadImage,
      width,
      image,
      ...restProps
    } = this.props;
    const {
      value
    } = this.state;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tappable, {
      className: classNames(className, getClassName('CoverLoader', platform)),
      style: { ...style
      },
      getRootRef: getRootRef,
      Component: "label"
    }, /*#__PURE__*/React.createElement("div", {
      className: "CoverLoader__background",
      style: {
        backgroundImage: `url(${value})`
      }
    }), /*#__PURE__*/React.createElement("input", _extends({}, restProps, {
      className: "CoverLoader__input",
      type: "file",
      accept: "image/*",
      ref: getRef,
      onChange: this.change
    })), /*#__PURE__*/React.createElement("div", {
      className: "CoverLoader__in"
    }, before && /*#__PURE__*/React.createElement("div", {
      className: "CoverLoader__before"
    }, before))));
  }

}

export default withPlatform(CoverLoader);
//# sourceMappingURL=CoverLoader.js.map
