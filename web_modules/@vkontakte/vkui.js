import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../common/_commonjsHelpers-6f5dde0d.js';
import { r as react } from '../common/index-df564204.js';
import { b as browserSymbol } from '../common/browser-symbol-14f6d1b6.js';
import { e as es6ObjectAssign } from '../common/index-b70fe2fa.js';
import '../common/browser-sprite-1d803565.js';
import { S as SvgIcon_1 } from '../common/SvgIcon-3febc6b1.js';
import { s as sprite } from '../common/sprite-16ff1c17.js';
import { b as bridge } from '../common/index.es-112d111e.js';
import { p as propTypes } from '../common/index-250039db.js';

var canUseDOM = !!(typeof window !== 'undefined' && window.document &&
/* eslint-disable */
window.document.createElement
/* eslint-enable */
);

/* eslint-disable */

if (canUseDOM) {
  var ElementProto = Element.prototype; // Element.prototype.matches

  if (!ElementProto.matches) {
    ElementProto.matches = ElementProto.matchesSelector || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.msMatchesSelector;
  } // Element.prototype.closest


  if (!ElementProto.closest) {
    ElementProto.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) {
          return node;
        } else {
          node = node.parentElement;
        }
      }

      return null;
    };
  }
} // Array.prototype.includes


if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);
      var len = o.length >>> 0;

      if (len === 0) {
        return false;
      }

      var n = fromIndex | 0;
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      }

      while (k < len) {
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }

        k++;
      }

      return false;
    }
  });
} // Array.prototype.find


if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(callback) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      } else if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
      }

      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];

      for (var i = 0; i < length; i++) {
        var element = list[i];

        if (callback.call(thisArg, element, i, list)) {
          return element;
        }
      }
    }
  });
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function classNames() {
  var result = [];

  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  classnames.forEach(function (item) {
    if (!item) {
      return;
    }

    switch (_typeof_1(item)) {
      case 'string':
        result.push(item);
        break;

      case 'object':
        Object.keys(item).forEach(function (key) {
          if (item[key]) {
            result.push(key);
          }
        });
        break;

      default:
        result.push("".concat(item));
    }
  });
  return result.join(' ');
}

var OS;

(function (OS) {
  OS["ANDROID"] = "android";
  OS["IOS"] = "ios";
  OS["VKCOM"] = "vkcom";
})(OS || (OS = {}));

var ANDROID = OS.ANDROID;
var IOS = OS.IOS;
var VKCOM = OS.VKCOM;
function platform(useragent) {
  var ua = useragent || canUseDOM && navigator.userAgent || '';
  return /iphone|ipad|ipod/i.test(ua) ? IOS : ANDROID;
}
var osname = platform();
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */

var IS_PLATFORM_IOS = osname === IOS;

function getClassname(base) {
  var osname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : platform();
  return "".concat(base, " ").concat(base, "--").concat(osname);
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

var SSRContext = /*#__PURE__*/react.createContext({
  platform: null,
  userAgent: ''
});

var Appearance;

(function (Appearance) {
  Appearance["DARK"] = "dark";
  Appearance["LIGHT"] = "light";
})(Appearance || (Appearance = {}));

var Scheme;

(function (Scheme) {
  Scheme["DEPRECATED_CLIENT_LIGHT"] = "client_light";
  Scheme["DEPRECATED_CLIENT_DARK"] = "client_dark";
  Scheme["BRIGHT_LIGHT"] = "bright_light";
  Scheme["SPACE_GRAY"] = "space_gray";
})(Scheme || (Scheme = {}));

var WebviewType;

(function (WebviewType) {
  WebviewType["VKAPPS"] = "vkapps";
  WebviewType["INTERNAL"] = "internal";
})(WebviewType || (WebviewType = {}));

var defaultConfigProviderProps = {
  webviewType: WebviewType.VKAPPS,
  isWebView: bridge.isWebView(),
  scheme: Scheme.BRIGHT_LIGHT,
  appearance: Appearance.LIGHT,
  transitionMotionEnabled: true,
  platform: platform()
};
var ConfigProviderContext = /*#__PURE__*/react.createContext(defaultConfigProviderProps);

function withPlatform(Component) {
  function WithPlatform(props) {
    var ssrContext = react.useContext(SSRContext);

    var _React$useContext = react.useContext(ConfigProviderContext),
        platform = _React$useContext.platform; // @ts-ignore


    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, {
      platform: ssrContext.platform || platform
    }));
  }

  return WithPlatform;
}

var SizeType;

(function (SizeType) {
  SizeType["COMPACT"] = "compact";
  SizeType["REGULAR"] = "regular";
})(SizeType || (SizeType = {}));

var ViewWidth;

(function (ViewWidth) {
  ViewWidth[ViewWidth["SMALL_MOBILE"] = 1] = "SMALL_MOBILE";
  ViewWidth[ViewWidth["MOBILE"] = 2] = "MOBILE";
  ViewWidth[ViewWidth["SMALL_TABLET"] = 3] = "SMALL_TABLET";
  ViewWidth[ViewWidth["TABLET"] = 4] = "TABLET";
  ViewWidth[ViewWidth["DESKTOP"] = 5] = "DESKTOP";
})(ViewWidth || (ViewWidth = {}));

var AdaptivityContext = /*#__PURE__*/react.createContext({
  sizeX: SizeType.COMPACT,
  sizeY: SizeType.REGULAR
});

function withAdaptivity(TargetComponent, config) {
  function AdaptivityConsumer(props) {
    var context = react.useContext(AdaptivityContext);
    var update = false;

    if (props.sizeX || props.sizeY) {
      update = true;
    }

    var sizeX = props.sizeX || context.sizeX;
    var sizeY = props.sizeY || context.sizeY;
    var viewWidth = context.viewWidth;
    var adaptivityProps = {};
    config.sizeX ? adaptivityProps.sizeX = sizeX : undefined;
    config.sizeY ? adaptivityProps.sizeY = sizeY : undefined;
    config.viewWidth ? adaptivityProps.viewWidth = viewWidth : undefined; // @ts-ignore

    var target = /*#__PURE__*/react.createElement(TargetComponent, _extends_1({}, props, adaptivityProps));

    if (update) {
      return /*#__PURE__*/react.createElement(AdaptivityContext.Provider, {
        value: {
          sizeX: sizeX,
          sizeY: sizeY,
          viewWidth: viewWidth
        }
      }, target);
    }

    return target;
  }

  return AdaptivityConsumer;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var SplitContext = /*#__PURE__*/react.createContext({
  colRef: null,
  animate: true
});
var SplitCol = /*#__PURE__*/function (_Component2) {
  inherits(SplitCol, _Component2);

  var _super2 = _createSuper(SplitCol);

  function SplitCol() {
    var _this;

    classCallCheck(this, SplitCol);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "baseRef", /*#__PURE__*/react.createRef());

    return _this;
  }

  createClass(SplitCol, [{
    key: "getContext",
    value: function getContext() {
      return {
        colRef: this.baseRef,
        animate: this.props.animate
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          width = _this$props2.width,
          maxWidth = _this$props2.maxWidth,
          minWidth = _this$props2.minWidth,
          spaced = _this$props2.spaced;
      return /*#__PURE__*/react.createElement("div", {
        style: {
          width: width,
          maxWidth: maxWidth,
          minWidth: minWidth,
          margin: spaced ? '0 16px' : null
        },
        ref: this.baseRef,
        className: "SplitLayout__col"
      }, /*#__PURE__*/react.createElement(SplitContext.Provider, {
        value: this.getContext()
      }, children));
    }
  }]);

  return SplitCol;
}(react.Component);

defineProperty(SplitCol, "defaultProps", {
  animate: false
});

function withContext(Component, Ctx, prop) {
  function WithContext(props) {
    var context = react.useContext(Ctx); // @ts-ignore

    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, defineProperty({}, prop, context)));
  }

  return WithContext;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Root = /*#__PURE__*/function (_Component) {
  inherits(Root, _Component);

  var _super = _createSuper$1(Root);

  function Root(props) {
    var _this;

    classCallCheck(this, Root);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "animationFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onAnimationEnd", function (e) {
      if (!e || ['root-android-animation-hide-back', 'root-android-animation-show-forward', 'root-ios-animation-hide-back', 'root-ios-animation-show-forward'].includes(e.animationName)) {
        var isBack = _this.state.isBack;
        var prevView = _this.state.prevView;
        var nextView = _this.state.nextView;

        _this.setState({
          activeView: nextView,
          prevView: null,
          nextView: null,
          visibleViews: [nextView],
          transition: false,
          isBack: undefined
        }, function () {
          _this.window.scrollTo(0, isBack ? _this.state.scrolls[_this.state.activeView] : 0);

          _this.props.onTransition && _this.props.onTransition({
            isBack: isBack,
            from: prevView,
            to: nextView
          });
        });
      }
    });

    _this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null,
      visibleViews: [props.activeView],
      isBack: undefined,
      scrolls: {},
      transition: false
    };
    return _this;
  }

  createClass(Root, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.props.popout && !prevProps.popout) {
        this.blurActiveElement();
      } // Нужен переход


      if (this.props.activeView !== prevProps.activeView) {
        var pageYOffset = this.window.pageYOffset;
        var firstLayerId = [].concat(prevProps.children).find(function (view) {
          return view.props.id === prevProps.activeView || view.props.id === _this2.props.activeView;
        }).props.id;
        var isBack = firstLayerId === this.props.activeView;
        this.blurActiveElement();
        var nextView = this.props.activeView;
        var prevView = prevProps.activeView;
        this.setState({
          scrolls: _objectSpread(_objectSpread({}, this.state.scrolls), {}, defineProperty({}, prevProps.activeView, pageYOffset)),
          transition: true,
          activeView: null,
          nextView: nextView,
          prevView: prevView,
          visibleViews: [nextView, prevView],
          isBack: isBack
        });
      } // Начался переход


      if (!prevState.transition && this.state.transition) {
        var prevViewElement = this.document.getElementById("view-".concat(this.state.prevView));
        var nextViewElement = this.document.getElementById("view-".concat(this.state.nextView));
        prevViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.prevView];

        if (this.state.isBack) {
          nextViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.nextView];
        }

        this.waitAnimationFinish(this.state.isBack ? prevViewElement : nextViewElement, this.onAnimationEnd);
      }
    }
  }, {
    key: "shouldDisableTransitionMotion",
    value: function shouldDisableTransitionMotion() {
      return this.props.configProvider.transitionMotionEnabled === false || !this.props.splitCol.animate;
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(elem, eventHandler) {
      if (this.shouldDisableTransitionMotion()) {
        eventHandler();
        return;
      }

      {
        clearTimeout(this.animationFinishTimeout);
        this.animationFinishTimeout = setTimeout(eventHandler.bind(this), this.props.platform === ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "blurActiveElement",
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          popout = _this$props.popout,
          modal = _this$props.modal,
          platform = _this$props.platform;
      var _this$state = this.state,
          transition = _this$state.transition,
          isBack = _this$state.isBack,
          prevView = _this$state.prevView,
          activeView = _this$state.activeView,
          nextView = _this$state.nextView;
      var Views = this.arrayChildren.filter(function (view) {
        return _this3.state.visibleViews.includes(view.props.id);
      });
      var baseClassName = getClassname('Root', platform);
      return /*#__PURE__*/react.createElement("div", {
        className: classNames(baseClassName, this.props.className, {
          'Root--transition': transition,
          'Root--no-motion': this.shouldDisableTransitionMotion()
        })
      }, Views.map(function (view) {
        return /*#__PURE__*/react.createElement("div", {
          key: view.props.id,
          id: "view-".concat(view.props.id),
          className: classNames('Root__view', {
            'Root__view--hide-back': view.props.id === prevView && isBack,
            'Root__view--hide-forward': view.props.id === prevView && !isBack,
            'Root__view--show-back': view.props.id === nextView && isBack,
            'Root__view--show-forward': view.props.id === nextView && !isBack,
            'Root__view--active': view.props.id === activeView
          })
        }, view);
      }), !!popout && /*#__PURE__*/react.createElement("div", {
        className: "Root__popout"
      }, popout), !!modal && /*#__PURE__*/react.createElement("div", {
        className: "Root__modal"
      }, modal));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "arrayChildren",
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return Root;
}(react.Component);

defineProperty(Root, "defaultProps", {
  popout: null
});

defineProperty(Root, "contextTypes", {
  window: propTypes.any,
  document: propTypes.any
});

var Root$1 = withContext(withContext(withPlatform(Root), SplitContext, 'splitCol'), ConfigProviderContext, 'configProvider');

/**
 * Функция для js анимации
 * @param {number} duration
 * @param {function} timing тайминг функция анимации
 * @param {function} draw коллбэк, в который прокидывается прогресс [0, 1]
 * @returns {void}
 */
function animate(_ref) {
  var duration = _ref.duration,
      timing = _ref.timing,
      draw = _ref.draw;

  if (typeof window === 'undefined') {
    return;
  }

  var start = window.performance.now();
  window.requestAnimationFrame(function animate(time) {
    var timeFraction = (time - start) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    var progress = timing(timeFraction);
    draw(progress);

    if (timeFraction < 1) {
      window.requestAnimationFrame(animate);
    }
  });
}

/*
 * Получает кординату по оси абсцисс из touch- или mouse-события
 */
var coordX = function coordX(e) {
  return e.clientX || e.changedTouches && e.changedTouches[0].clientX;
};
/*
 * Получает кординату по оси ординат из touch- или mouse-события
 */


var coordY = function coordY(e) {
  return e.clientY || e.changedTouches && e.changedTouches[0].clientY;
};

var isClient = typeof window !== 'undefined';
var touchEnabled = isClient && 'ontouchstart' in window;
/*
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */

function getSupportedEvents() {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}

// Является ли переданное значение числовым
function hasReactNode(value) {
  return value !== undefined && value !== false && value !== null;
}
function setRef(element, ref) {
  if (ref) {
    if (typeof ref === 'function') {
      ref(element);
    } else {
      ref.current = element;
    }
  }
} // eslint-disable-next-line
function createCustomEvent(window, type, eventInitDict) {
  if (typeof window.CustomEvent !== 'function') {
    var options = eventInitDict || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(type, options.bubbles, options.cancelable, options.detail);
    return evt;
  }

  return new window.CustomEvent(type, eventInitDict);
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var events = getSupportedEvents();

var Touch = /*#__PURE__*/function (_Component) {
  inherits(Touch, _Component);

  var _super = _createSuper$2(Touch);

  function Touch(props) {
    var _this;

    classCallCheck(this, Touch);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "cancelClick", void 0);

    defineProperty(assertThisInitialized(_this), "gesture", {});

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "onEnter", function (e) {
      if (_this.props.onEnter) {
        _this.props.onEnter(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "onLeave", function (e) {
      if (_this.props.onLeave) {
        _this.props.onLeave(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "onStart", function (e) {
      _this.gesture = {
        startX: coordX(e),
        startY: coordY(e),
        startT: new Date(),
        isPressed: true
      }; // Вызываем нужные колбеки из props

      var outputEvent = _objectSpread$1(_objectSpread$1({}, _this.gesture), {}, {
        originalEvent: e
      });

      if (_this.props.onStart) {
        _this.props.onStart(outputEvent);
      }

      if (_this.props.onStartX) {
        _this.props.onStartX(outputEvent);
      }

      if (_this.props.onStartY) {
        _this.props.onStartY(outputEvent);
      }

      !touchEnabled && _this.subscribe(_this.document);
    });

    defineProperty(assertThisInitialized(_this), "onMove", function (e) {
      var _this$gesture = _this.gesture,
          isPressed = _this$gesture.isPressed,
          isX = _this$gesture.isX,
          isY = _this$gesture.isY,
          startX = _this$gesture.startX,
          startY = _this$gesture.startY;

      if (isPressed) {
        // смещения
        var shiftX = coordX(e) - startX;
        var shiftY = coordY(e) - startY; // абсолютные значения смещений

        var shiftXAbs = Math.abs(shiftX);
        var shiftYAbs = Math.abs(shiftY); // Если определяем мультитач, то прерываем жест

        if (!!e.touches && e.touches.length > 1) {
          return _this.onEnd(e);
        } // если мы ещё не определились


        if (!isX && !isY) {
          var willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
          var willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
          var willBeSlidedX = willBeX && !!_this.props.onMoveX || !!_this.props.onMove;
          var willBeSlidedY = willBeY && !!_this.props.onMoveY || !!_this.props.onMove;
          _this.gesture.isY = willBeY;
          _this.gesture.isX = willBeX;
          _this.gesture.isSlideX = willBeSlidedX;
          _this.gesture.isSlideY = willBeSlidedY;
          _this.gesture.isSlide = willBeSlidedX || willBeSlidedY;
        }

        if (_this.gesture.isSlide) {
          _this.gesture.shiftX = shiftX;
          _this.gesture.shiftY = shiftY;
          _this.gesture.shiftXAbs = shiftXAbs;
          _this.gesture.shiftYAbs = shiftYAbs; // Вызываем нужные колбеки из props

          var _outputEvent = _objectSpread$1(_objectSpread$1({}, _this.gesture), {}, {
            originalEvent: e
          });

          if (_this.props.onMove) {
            _this.props.onMove(_outputEvent);
          }

          if (_this.gesture.isSlideX && _this.props.onMoveX) {
            _this.props.onMoveX(_outputEvent);
          }

          if (_this.gesture.isSlideY && _this.props.onMoveY) {
            _this.props.onMoveY(_outputEvent);
          }
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnd", function (e) {
      var _this$gesture2 = _this.gesture,
          isPressed = _this$gesture2.isPressed,
          isSlide = _this$gesture2.isSlide,
          isSlideX = _this$gesture2.isSlideX,
          isSlideY = _this$gesture2.isSlideY;

      if (isPressed) {
        // Вызываем нужные колбеки из props
        var _outputEvent2 = _objectSpread$1(_objectSpread$1({}, _this.gesture), {}, {
          originalEvent: e
        });

        if (_this.props.onEnd) {
          _this.props.onEnd(_outputEvent2);
        }

        if (isSlideY && _this.props.onEndY) {
          _this.props.onEndY(_outputEvent2);
        }

        if (isSlideX && _this.props.onEndX) {
          _this.props.onEndX(_outputEvent2);
        }
      }

      var target = e.target; // Если закончили жест на ссылке, выставляем флаг для отмены перехода

      _this.cancelClick = target.tagName === 'A' && isSlide;
      _this.gesture = {}; // Если это был тач-евент, симулируем отмену hover

      if (e.type === 'touchend' || e.type === 'touchcancel') {
        _this.onLeave(e);
      }

      !touchEnabled && _this.unsubscribe(_this.document);
    });

    defineProperty(assertThisInitialized(_this), "onDragStart", function (e) {
      var target = e.target;

      if (target.tagName === 'A' || target.tagName === 'IMG') {
        e.preventDefault();
      }
    });

    defineProperty(assertThisInitialized(_this), "onClick", function (e) {
      if (_this.cancelClick) {
        _this.cancelClick = false;
        e.preventDefault();
      }

      _this.props.onClick && _this.props.onClick(e);
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      setRef(container, _this.props.getRootRef);
    });

    _this.cancelClick = false;
    return _this;
  }

  createClass(Touch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (canUseDOM) {
        this.container.addEventListener(events[0], this.onStart, {
          capture: this.props.useCapture,
          passive: false
        });
        touchEnabled && this.subscribe(this.container);
        this.container.addEventListener('mouseenter', this.onEnter, {
          capture: this.props.useCapture,
          passive: true
        });
        this.container.addEventListener('mouseleave', this.onLeave, {
          capture: this.props.useCapture,
          passive: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.container.removeEventListener(events[0], this.onStart);
      touchEnabled && this.unsubscribe(this.container);
      this.container.removeEventListener('mouseenter', this.onEnter);
      this.container.removeEventListener('mouseleave', this.onLeave);
    }
    /**
     * Обработчик событий mouseenter
     *
     * @param {Object} e Браузерное событие
     * @return {void}
     */

  }, {
    key: "subscribe",
    value: function subscribe(element) {
      var listenerParams = {
        capture: this.props.useCapture,
        passive: false
      };
      element.addEventListener(events[1], this.onMove, listenerParams);
      element.addEventListener(events[2], this.onEnd, listenerParams);
      element.addEventListener(events[3], this.onEnd, listenerParams);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(element) {
      // Здесь нужен последний аргумент с такими же параметрами, потому что
      // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
      // https://github.com/VKCOM/VKUI/issues/444
      var listenerParams = {
        capture: this.props.useCapture,
        passive: false
      };
      element.removeEventListener(events[1], this.onMove, listenerParams);
      element.removeEventListener(events[2], this.onEnd, listenerParams);
      element.removeEventListener(events[3], this.onEnd, listenerParams);
    }
    /**
     * Обработчик событий dragstart
     * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
     *
     * @param {Object} e Браузерное событие
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onStart = _this$props.onStart,
          onStartX = _this$props.onStartX,
          onStartY = _this$props.onStartY,
          onMove = _this$props.onMove,
          onMoveX = _this$props.onMoveX,
          onMoveY = _this$props.onMoveY,
          onLeave = _this$props.onLeave,
          onEnter = _this$props.onEnter,
          onEnd = _this$props.onEnd,
          onEndX = _this$props.onEndX,
          onEndY = _this$props.onEndY,
          useCapture = _this$props.useCapture,
          Component = _this$props.Component,
          getRootRef = _this$props.getRootRef,
          restProps = objectWithoutProperties(_this$props, ["onStart", "onStartX", "onStartY", "onMove", "onMoveX", "onMoveY", "onLeave", "onEnter", "onEnd", "onEndX", "onEndY", "useCapture", "Component", "getRootRef"]);

      return /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
        onDragStart: this.onDragStart,
        onClick: this.onClick,
        ref: this.getRef
      }), this.props.children);
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return Touch;
}(react.Component);

defineProperty(Touch, "defaultProps", {
  Component: 'div',
  children: '',
  useCapture: false
});

defineProperty(Touch, "contextTypes", {
  document: propTypes.object
});

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function removeObjectKeys(obj) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var newObj = _objectSpread$2({}, obj);

  keys.forEach(function (key) {
    return delete newObj[key];
  });
  return newObj;
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var transitionStartEventName = 'VKUI:View:transition-start';
var transitionEndEventName = 'VKUI:View:transition-end';
var SwipeBackResults;

(function (SwipeBackResults) {
  SwipeBackResults[SwipeBackResults["fail"] = 1] = "fail";
  SwipeBackResults[SwipeBackResults["success"] = 2] = "success";
})(SwipeBackResults || (SwipeBackResults = {}));

var scrollsCache = {};
var swipeBackExcludedTags = ['input', 'textarea'];

var View = /*#__PURE__*/function (_Component) {
  inherits(View, _Component);

  var _super = _createSuper$3(View);

  function View(props) {
    var _this;

    classCallCheck(this, View);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "transitionFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "animationFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "transitionEndHandler", function (e) {
      if (!e || ['animation-ios-next-forward', 'animation-ios-prev-back', 'animation-android-next-forward', 'animation-android-prev-back'].includes(e.animationName)) {
        var activePanel = _this.props.activePanel;
        var isBack = _this.state.isBack;
        var prevPanel = _this.state.prevPanel;

        _this.document.dispatchEvent(createCustomEvent(_this.window, transitionEndEventName));

        _this.setState({
          prevPanel: null,
          nextPanel: null,
          visiblePanels: [activePanel],
          activePanel: activePanel,
          animated: false,
          isBack: undefined,
          scrolls: isBack ? removeObjectKeys(_this.state.scrolls, [prevPanel]) : _this.state.scrolls
        }, function () {
          isBack && _this.window.scrollTo(0, _this.state.scrolls[activePanel]);
          _this.props.onTransition && _this.props.onTransition({
            isBack: isBack,
            from: prevPanel,
            to: activePanel
          });
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "swipingBackTransitionEndHandler", function (e) {
      // indexOf because of vendor prefixes in old browsers
      var target = e.target;

      if (e.propertyName.includes('transform') && target.classList.contains('View__panel--swipe-back-next')) {
        switch (_this.state.swipeBackResult) {
          case SwipeBackResults.fail:
            _this.onSwipeBackCancel();

            break;

          case SwipeBackResults.success:
            _this.onSwipeBackSuccess();

        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onScrollTop", function () {
      var activePanel = _this.state.activePanel;

      if (activePanel) {
        var scrollTop = _this.document.body.scrollTop || _this.document.documentElement.scrollTop;

        if (scrollTop) {
          animate({
            duration: 200,
            timing: function timing(n) {
              return Math.sqrt(n);
            },
            draw: function draw(val) {
              _this.window.scrollTo(0, scrollTop - val * scrollTop);
            }
          });
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onMoveX", function (e) {
      var target = e.originalEvent.target;

      if (target && typeof target.tagName === 'string' && swipeBackExcludedTags.includes(target.tagName.toLowerCase())) {
        return;
      }

      var _this$props = _this.props,
          platform = _this$props.platform,
          configProvider = _this$props.configProvider;

      if (platform === IOS && !configProvider.isWebView && (e.startX <= 70 || e.startX >= _this.window.innerWidth - 70) && !_this.state.browserSwipe) {
        _this.setState({
          browserSwipe: true
        });
      }

      if (platform === IOS && configProvider.isWebView && _this.props.onSwipeBack) {
        if (_this.state.animated && e.startX <= 70) {
          return;
        }

        if (e.startX <= 70 && !_this.state.swipingBack && _this.props.history.length > 1) {
          _this.setState({
            swipingBack: true,
            swipebackStartX: e.startX,
            startT: e.startT,
            swipeBackPrevPanel: _this.state.activePanel,
            swipeBackNextPanel: _this.props.history.slice(-2)[0],
            scrolls: _objectSpread$3(_objectSpread$3({}, _this.state.scrolls), {}, defineProperty({}, _this.state.activePanel, _this.window.pageYOffset))
          });
        }

        if (_this.state.swipingBack) {
          var swipeBackShift;

          if (e.shiftX < 0) {
            swipeBackShift = 0;
          } else if (e.shiftX > _this.window.innerWidth - _this.state.swipebackStartX) {
            swipeBackShift = _this.window.innerWidth;
          } else {
            swipeBackShift = e.shiftX;
          }

          _this.setState({
            swipeBackShift: swipeBackShift
          });
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnd", function () {
      if (_this.state.swipingBack) {
        var speed = _this.state.swipeBackShift / (Date.now() - _this.state.startT.getTime()) * 1000;

        if (_this.state.swipeBackShift === 0) {
          _this.onSwipeBackCancel();
        } else if (_this.state.swipeBackShift >= _this.window.innerWidth) {
          _this.onSwipeBackSuccess();
        } else if (speed > 250 || _this.state.swipebackStartX + _this.state.swipeBackShift > _this.window.innerWidth / 2) {
          _this.setState({
            swipeBackResult: SwipeBackResults.success
          });
        } else {
          _this.setState({
            swipeBackResult: SwipeBackResults.fail
          });
        }
      }
    });

    _this.state = {
      scrolls: scrollsCache[props.id] || {},
      animated: false,
      visiblePanels: [props.activePanel],
      activePanel: props.activePanel,
      isBack: undefined,
      prevPanel: null,
      nextPanel: null,
      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipeBackResult: null,
      browserSwipe: false
    };
    return _this;
  }

  createClass(View, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.id) {
        scrollsCache[this.props.id] = this.state.scrolls;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      this.props.popout && !prevProps.popout && this.blurActiveElement();
      this.props.modal && !prevProps.modal && this.blurActiveElement(); // Нужен переход

      if (prevProps.activePanel !== this.props.activePanel && !prevState.swipingBack && !prevState.browserSwipe) {
        var firstLayer = this.panels.find(function (panel) {
          return panel.props.id === prevProps.activePanel || panel.props.id === _this2.props.activePanel;
        });
        var isBack = firstLayer && firstLayer.props.id === this.props.activePanel;
        this.blurActiveElement();
        this.setState({
          visiblePanels: [prevProps.activePanel, this.props.activePanel],
          prevPanel: prevProps.activePanel,
          nextPanel: this.props.activePanel,
          activePanel: null,
          animated: true,
          scrolls: _objectSpread$3(_objectSpread$3({}, prevState.scrolls), {}, defineProperty({}, prevProps.activePanel, this.window.pageYOffset)),
          isBack: isBack
        });
      } // Закончилась анимация свайпа назад


      if (prevProps.activePanel !== this.props.activePanel && prevState.swipingBack) {
        var nextPanel = this.props.activePanel;
        var prevPanel = prevProps.activePanel;
        this.setState({
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipeBackResult: null,
          swipebackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextPanel,
          visiblePanels: [nextPanel],
          scrolls: removeObjectKeys(prevState.scrolls, [prevState.swipeBackPrevPanel])
        }, function () {
          _this2.document.dispatchEvent(createCustomEvent(_this2.window, transitionEndEventName));

          window.scrollTo(0, prevState.scrolls[_this2.state.activePanel]);
          prevProps.onTransition && prevProps.onTransition({
            isBack: true,
            from: prevPanel,
            to: nextPanel
          });
        });
      }

      var scrolls = this.state.scrolls; // Начался переход

      if (!prevState.animated && this.state.animated) {
        this.document.dispatchEvent(createCustomEvent(this.window, transitionStartEventName, {
          detail: {
            scrolls: scrolls
          }
        }));
        var nextPanelElement = this.pickPanel(this.state.nextPanel);
        var prevPanelElement = this.pickPanel(this.state.prevPanel);
        prevPanelElement.scrollTop = scrolls[this.state.prevPanel];

        if (this.state.isBack) {
          nextPanelElement.scrollTop = scrolls[this.state.nextPanel];
        }

        this.waitAnimationFinish(this.pickPanel(this.state.isBack ? this.state.prevPanel : this.state.nextPanel), this.transitionEndHandler);
      } // Начался свайп назад


      if (!prevState.swipingBack && this.state.swipingBack) {
        this.document.dispatchEvent(createCustomEvent(this.window, transitionStartEventName, {
          detail: {
            scrolls: scrolls
          }
        }));
        this.props.onSwipeBackStart && this.props.onSwipeBackStart();

        var _nextPanelElement = this.pickPanel(this.state.swipeBackNextPanel);

        var _prevPanelElement = this.pickPanel(this.state.swipeBackPrevPanel);

        _nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
        _prevPanelElement.scrollTop = scrolls[this.state.swipeBackPrevPanel];
      } // Началась анимация завершения свайпа назад.


      if (!prevState.swipeBackResult && this.state.swipeBackResult) {
        this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
      } // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)


      if (prevState.swipeBackResult === SwipeBackResults.fail && !this.state.swipeBackResult) {
        this.window.scrollTo(0, scrolls[this.state.activePanel]);
      } // Закончился Safari свайп


      if (prevProps.activePanel !== this.props.activePanel && this.state.browserSwipe) {
        this.setState({
          browserSwipe: false,
          nextPanel: null,
          prevPanel: null,
          animated: false,
          visiblePanels: [this.props.activePanel],
          activePanel: this.props.activePanel
        });
      }
    }
  }, {
    key: "shouldDisableTransitionMotion",
    value: function shouldDisableTransitionMotion() {
      return this.props.configProvider.transitionMotionEnabled === false || !this.props.splitCol.animate;
    }
  }, {
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(elem, eventHandler) {
      {
        clearTimeout(this.transitionFinishTimeout);
        this.transitionFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(elem, eventHandler) {
      if (this.shouldDisableTransitionMotion()) {
        eventHandler();
        return;
      }

      {
        clearTimeout(this.animationFinishTimeout);
        this.animationFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "blurActiveElement",
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: "pickPanel",
    value: function pickPanel(id) {
      var elem = this.document.getElementById(id);

      if (!elem) {
        console.warn("Element #".concat(id, " not found"));
      }

      return elem && elem.parentNode.parentNode;
    }
  }, {
    key: "onSwipeBackSuccess",
    value: function onSwipeBackSuccess() {
      this.props.onSwipeBack && this.props.onSwipeBack();
    }
  }, {
    key: "onSwipeBackCancel",
    value: function onSwipeBackCancel() {
      var _this3 = this;

      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipeBackResult: null,
        swipebackStartX: 0,
        swipeBackShift: 0
      }, function () {
        _this3.document.dispatchEvent(createCustomEvent(_this3.window, transitionEndEventName));
      });
    }
  }, {
    key: "calcPanelSwipeStyles",
    value: function calcPanelSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      if (!isPrev && !isNext || this.state.swipeBackResult) {
        return {};
      }

      var prevPanelTranslate = "".concat(this.state.swipeBackShift, "px");
      var nextPanelTranslate = "".concat(-50 + this.state.swipeBackShift * 100 / this.window.innerWidth / 2, "%");
      var prevPanelShadow = 0.3 * (this.window.innerWidth - this.state.swipeBackShift) / this.window.innerWidth;

      if (this.state.swipeBackResult) {
        return isPrev ? {
          boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(prevPanelShadow, ")")
        } : {};
      }

      if (isNext) {
        return {
          transform: "translate3d(".concat(nextPanelTranslate, ", 0, 0)"),
          WebkitTransform: "translate3d(".concat(nextPanelTranslate, ", 0, 0)")
        };
      }

      if (isPrev) {
        return {
          transform: "translate3d(".concat(prevPanelTranslate, ", 0, 0)"),
          WebkitTransform: "translate3d(".concat(prevPanelTranslate, ", 0, 0)"),
          boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(prevPanelShadow, ")")
        };
      }

      return {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          style = _this$props2.style,
          popout = _this$props2.popout,
          modal = _this$props2.modal,
          platform = _this$props2.platform;
      var _this$state = this.state,
          prevPanel = _this$state.prevPanel,
          nextPanel = _this$state.nextPanel,
          activePanel = _this$state.activePanel,
          swipeBackPrevPanel = _this$state.swipeBackPrevPanel,
          swipeBackNextPanel = _this$state.swipeBackNextPanel,
          swipeBackResult = _this$state.swipeBackResult;
      var hasPopout = !!popout;
      var hasModal = !!modal;
      var panels = this.panels.filter(function (panel) {
        var panelId = panel.props.id;
        return _this4.state.visiblePanels.includes(panelId) || panelId === swipeBackPrevPanel || panelId === swipeBackNextPanel;
      });
      var modifiers = {
        'View--animated': this.state.animated,
        'View--swiping-back': this.state.swipingBack,
        'View--no-motion': this.shouldDisableTransitionMotion()
      };
      return /*#__PURE__*/react.createElement(Touch, {
        Component: "section",
        className: classNames(getClassname('View', platform), this.props.className, modifiers),
        style: style,
        onMoveX: this.onMoveX,
        onEnd: this.onEnd
      }, /*#__PURE__*/react.createElement("div", {
        className: "View__panels"
      }, panels.map(function (panel) {
        var panelId = panel.props.id;
        return /*#__PURE__*/react.createElement("div", {
          className: classNames('View__panel', {
            'View__panel--active': panelId === activePanel,
            'View__panel--prev': panelId === prevPanel,
            'View__panel--next': panelId === nextPanel,
            'View__panel--swipe-back-prev': panelId === swipeBackPrevPanel,
            'View__panel--swipe-back-next': panelId === swipeBackNextPanel,
            'View__panel--swipe-back-success': swipeBackResult === SwipeBackResults.success,
            'View__panel--swipe-back-failed': swipeBackResult === SwipeBackResults.fail
          }),
          style: _this4.calcPanelSwipeStyles(panelId),
          key: panelId
        }, /*#__PURE__*/react.createElement("div", {
          className: "View__panel-in"
        }, panel));
      })), hasPopout && /*#__PURE__*/react.createElement("div", {
        className: "View__popout"
      }, popout), hasModal && /*#__PURE__*/react.createElement("div", {
        className: "View__modal"
      }, modal));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "panels",
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return View;
}(react.Component);

defineProperty(View, "defaultProps", {
  history: []
});

defineProperty(View, "contextTypes", {
  window: propTypes.any,
  document: propTypes.any
});

var View$1 = withContext(withContext(withPlatform(View), SplitContext, 'splitCol'), ConfigProviderContext, 'configProvider');

var PanelContext = /*#__PURE__*/react.createContext({});

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Panel = /*#__PURE__*/function (_Component) {
  inherits(Panel, _Component);

  var _super = _createSuper$4(Panel);

  function Panel(props) {
    var _this;

    classCallCheck(this, Panel);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "childContext", void 0);

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      setRef(container, _this.props.getRootRef);
    });

    _this.childContext = {
      panel: props.id
    };
    return _this;
  }

  createClass(Panel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          centered = _this$props.centered,
          children = _this$props.children,
          platform = _this$props.platform,
          getRootRef = _this$props.getRootRef,
          sizeX = _this$props.sizeX,
          restProps = objectWithoutProperties(_this$props, ["className", "centered", "children", "platform", "getRootRef", "sizeX"]);

      return /*#__PURE__*/react.createElement(PanelContext.Provider, {
        value: this.childContext
      }, /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
        ref: this.getRef,
        className: classNames(getClassname('Panel', platform), className, "Panel--".concat(sizeX), defineProperty({
          'Panel--centered': centered
        }, "Panel--sizeX-".concat(sizeX), true))
      }), /*#__PURE__*/react.createElement(Touch, {
        className: "Panel__in"
      }, platform === IOS && /*#__PURE__*/react.createElement("div", {
        className: "Panel__fade"
      }), /*#__PURE__*/react.createElement("div", {
        className: "Panel__in-before"
      }), centered ? /*#__PURE__*/react.createElement("div", {
        className: "Panel__centered"
      }, children) : children, /*#__PURE__*/react.createElement("div", {
        className: "Panel__in-after"
      }))));
    }
  }]);

  return Panel;
}(react.Component);

defineProperty(Panel, "defaultProps", {
  children: '',
  centered: false
});

var Panel$1 = withAdaptivity(withPlatform(Panel), {
  sizeX: true
});

/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */

var TouchRootContext = /*#__PURE__*/react.createContext(false);

function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left,
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

var hasMouse;
var hasTouchEvents;
var hasHover;

if (IS_PLATFORM_IOS) {
  hasMouse = false;
  hasHover = false;
  hasTouchEvents = true;
} else {
  hasTouchEvents = 'ontouchstart' in document;

  if (hasTouchEvents) {
    hasMouse = window.matchMedia && matchMedia('(any-pointer)').matches ? matchMedia('(any-pointer: fine)').matches : /android|mobile|tablet/i.test(navigator.userAgent);
    hasHover = hasMouse && (window.matchMedia && matchMedia('(hover)').matches ? matchMedia('(hover: hover)').matches : false);
  } else {
    hasMouse = true;
    hasHover = true;
  }
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ts = function ts() {
  return +Date.now();
};

var ACTIVE_DELAY = 70;
var ACTIVE_EFFECT_DELAY = 600;
var storage = {};
/*
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 */

function deactivateOtherInstances(exclude) {
  Object.keys(storage).filter(function (id) {
    return id !== exclude;
  }).forEach(function (id) {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();
    delete storage[id];
  });
}

var Tappable = /*#__PURE__*/function (_Component) {
  inherits(Tappable, _Component);

  var _super = _createSuper$5(Tappable);

  function Tappable(props) {
    var _this;

    classCallCheck(this, Tappable);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "id", void 0);

    defineProperty(assertThisInitialized(_this), "isSlide", void 0);

    defineProperty(assertThisInitialized(_this), "insideTouchRoot", void 0);

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "timeout", void 0);

    defineProperty(assertThisInitialized(_this), "wavesTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onStart", function (_ref) {
      var originalEvent = _ref.originalEvent;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();

      if (originalEvent.touches && originalEvent.touches.length > 1) {
        deactivateOtherInstances();
        return;
      }

      if (_this.props.platform === ANDROID) {
        _this.onDown(originalEvent);
      }

      storage[_this.id] = {
        stop: _this.stop,
        activeTimeout: window.setTimeout(_this.start, ACTIVE_DELAY)
      };
    });

    defineProperty(assertThisInitialized(_this), "onMove", function (_ref2) {
      var originalEvent = _ref2.originalEvent,
          shiftXAbs = _ref2.shiftXAbs,
          shiftYAbs = _ref2.shiftYAbs;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();

      if (shiftXAbs > 20 || shiftYAbs > 20) {
        _this.isSlide = true;

        _this.stop();
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnd", function (_ref3) {
      var originalEvent = _ref3.originalEvent;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();
      var now = ts();

      if (originalEvent.touches && originalEvent.touches.length > 0) {
        _this.isSlide = false;

        _this.stop();

        return;
      }

      if (_this.state.active) {
        if (now - _this.state.ts >= 100) {
          // Долгий тап, выключаем подсветку
          _this.stop();
        } else {
          // Короткий тап, оставляем подсветку
          var timeout = window.setTimeout(_this.stop, _this.props.activeEffectDelay - now + _this.state.ts);

          var store = _this.getStorage();

          if (store) {
            store.timeout = timeout;
          }
        }
      } else if (!_this.isSlide) {
        // Очень короткий тап, включаем подсветку
        _this.start();

        var _timeout = window.setTimeout(_this.stop, _this.props.activeEffectDelay);

        if (_this.getStorage()) {
          clearTimeout(_this.getStorage().activeTimeout);
          _this.getStorage().timeout = _timeout;
        } else {
          _this.timeout = _timeout;
        }
      }

      _this.isSlide = false;
    });

    defineProperty(assertThisInitialized(_this), "onDown", function (e) {
      if (_this.props.platform === ANDROID) {
        var _getOffsetRect = getOffsetRect(_this.container),
            top = _getOffsetRect.top,
            left = _getOffsetRect.left;

        var x = coordX(e) - left;
        var y = coordY(e) - top;
        var key = 'wave' + Date.now().toString();

        _this.setState(function (state) {
          return {
            clicks: _objectSpread$4(_objectSpread$4({}, state.clicks), {}, defineProperty({}, key, {
              x: x,
              y: y
            }))
          };
        });

        _this.wavesTimeout = window.setTimeout(function () {
          _this.setState(function (state) {
            var clicks = _objectSpread$4({}, state.clicks);

            delete clicks[key];
            return {
              clicks: clicks
            };
          });
        }, 225);
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnter", function () {
      _this.setState({
        hovered: true
      });
    });

    defineProperty(assertThisInitialized(_this), "onLeave", function () {
      _this.setState({
        hovered: false
      });
    });

    defineProperty(assertThisInitialized(_this), "start", function () {
      if (!_this.state.active) {
        _this.setState({
          active: true,
          ts: ts()
        });
      }

      deactivateOtherInstances(_this.id);
    });

    defineProperty(assertThisInitialized(_this), "stop", function () {
      if (_this.state.active) {
        _this.setState({
          active: false,
          ts: null
        });
      }

      if (_this.getStorage()) {
        clearTimeout(_this.getStorage().activeTimeout);
        delete storage[_this.id];
      }
    });

    defineProperty(assertThisInitialized(_this), "getStorage", function () {
      return storage[_this.id];
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      setRef(container, _this.props.getRootRef);
    });

    defineProperty(assertThisInitialized(_this), "containerHasTransparentBackground", function () {
      if (!_this.container) {
        return true;
      }

      if (!_this.container.style.backgroundColor) {
        return true;
      }

      if (_this.container.style.backgroundColor === 'transparent') {
        return true;
      }

      return false;
    });

    _this.id = Math.round(Math.random() * 1e8).toString(16);
    _this.state = {
      clicks: {},
      active: false,
      ts: null
    };
    _this.isSlide = false;
    return _this;
  }

  createClass(Tappable, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (storage[this.id]) {
        clearTimeout(storage[this.id].timeout);
        clearTimeout(storage[this.id].activeTimeout);
        delete storage[this.id];
      }

      clearTimeout(this.wavesTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          clicks = _this$state.clicks,
          active = _this$state.active,
          hovered = _this$state.hovered;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Component = _this$props.Component,
          activeEffectDelay = _this$props.activeEffectDelay,
          stopPropagation = _this$props.stopPropagation,
          getRootRef = _this$props.getRootRef,
          platform = _this$props.platform,
          restProps = objectWithoutProperties(_this$props, ["children", "className", "Component", "activeEffectDelay", "stopPropagation", "getRootRef", "platform"]);

      var hoverClassModificator = this.containerHasTransparentBackground() ? 'shadowHovered' : 'opacityHovered';
      var classes = classNames(getClassname('Tappable', platform), className, defineProperty({
        'Tappable--active': active,
        'Tappable--inactive': !active
      }, "Tappable--".concat(hoverClassModificator), hasHover && hovered));
      var RootComponent = restProps.disabled ? Component : Touch;
      var props = {};

      if (!restProps.disabled) {
        props.Component = Component;
        /* eslint-disable */

        props.onStart = this.onStart;
        props.onMove = this.onMove;
        props.onEnd = this.onEnd;
        props.onEnter = this.onEnter;
        props.onLeave = this.onLeave;
        /* eslint-enable */

        props.getRootRef = this.getRef;
      } else {
        props.ref = this.getRef;
      }

      return /*#__PURE__*/react.createElement(TouchRootContext.Consumer, null, function (insideTouchRoot) {
        _this2.insideTouchRoot = insideTouchRoot;
        return /*#__PURE__*/react.createElement(RootComponent, _extends_1({}, restProps, {
          className: classes
        }, props), children, platform === ANDROID && /*#__PURE__*/react.createElement("span", {
          className: "Tappable__waves"
        }, Object.keys(clicks).map(function (k) {
          return /*#__PURE__*/react.createElement("span", {
            className: "Tappable__wave",
            style: {
              top: clicks[k].y,
              left: clicks[k].x
            },
            key: k
          });
        })), hasHover && /*#__PURE__*/react.createElement("span", {
          className: "Tappable__hoverShadow"
        }));
      });
    }
  }]);

  return Tappable;
}(react.Component);

defineProperty(Tappable, "defaultProps", {
  Component: 'div',
  role: 'button',
  stopPropagation: false,
  disabled: false,
  activeEffectDelay: ACTIVE_EFFECT_DELAY
});

var Tappable$1 = withPlatform(Tappable);

function usePlatform() {
  var ssrContext = react.useContext(SSRContext);

  var _useContext = react.useContext(ConfigProviderContext),
      platform = _useContext.platform;

  return ssrContext.platform || platform;
}

var PanelHeaderButton = function PanelHeaderButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      label = _ref.label,
      restProps = objectWithoutProperties(_ref, ["className", "children", "primary", "label"]);

  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  var Component = restProps.href ? 'a' : 'button';
  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    Component: Component,
    activeEffectDelay: 200,
    className: classNames(getClassname('PanelHeaderButton', platform), className, {
      'PanelHeaderButton--primary': primary,
      'PanelHeaderButton--primitive': isPrimitive
    })
  }), children, label);
};

PanelHeaderButton.defaultProps = {
  primary: false
};

function withPanelContext(Component) {
  function WithPanelContext(props) {
    var _useContext = react.useContext(PanelContext),
        panel = _useContext.panel; // @ts-ignore


    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, {
      panel: panel
    }));
  }

  return WithPanelContext;
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FixedLayout = /*#__PURE__*/function (_React$Component) {
  inherits(FixedLayout, _React$Component);

  var _super = _createSuper$6(FixedLayout);

  function FixedLayout() {
    var _this;

    classCallCheck(this, FixedLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      position: 'absolute',
      top: null,
      width: ''
    });

    defineProperty(assertThisInitialized(_this), "el", void 0);

    defineProperty(assertThisInitialized(_this), "onMountResizeTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onViewTransitionStart", function (e) {
      var panelScroll = e.detail.scrolls[_this.props.panel] || 0;

      _this.setState({
        position: 'absolute',
        top: _this.el.offsetTop + panelScroll,
        width: ''
      });
    });

    defineProperty(assertThisInitialized(_this), "onViewTransitionEnd", function () {
      _this.setState({
        position: null,
        top: null
      });

      _this.doResize();
    });

    defineProperty(assertThisInitialized(_this), "doResize", function () {
      var colRef = _this.props.splitCol.colRef;

      if (colRef && colRef.current) {
        var node = colRef.current;
        var width = node.offsetWidth;

        _this.setState({
          width: "".concat(width, "px"),
          position: null
        });
      } else {
        _this.setState({
          width: '',
          position: null
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (element) {
      _this.el = element;
      setRef(element, _this.props.getRootRef);
    });

    return _this;
  }

  createClass(FixedLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.onMountResizeTimeout = setTimeout(function () {
        return _this2.doResize();
      });
      window.addEventListener('resize', this.doResize);
      this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
      this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.onMountResizeTimeout);
      window.removeEventListener('resize', this.doResize);
      this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
      this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          vertical = _this$props.vertical,
          getRootRef = _this$props.getRootRef,
          platform = _this$props.platform,
          filled = _this$props.filled,
          splitCol = _this$props.splitCol,
          panel = _this$props.panel,
          restProps = objectWithoutProperties(_this$props, ["className", "children", "style", "vertical", "getRootRef", "platform", "filled", "splitCol", "panel"]);

      return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
        ref: this.getRef,
        className: classNames(getClassname('FixedLayout', platform), {
          'FixedLayout--filled': filled
        }, "FixedLayout--".concat(vertical), className),
        style: _objectSpread$5(_objectSpread$5({}, style), this.state)
      }), /*#__PURE__*/react.createElement("div", {
        className: "FixedLayout__in"
      }, children));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return FixedLayout;
}(react.Component);

defineProperty(FixedLayout, "contextTypes", {
  document: propTypes.any
});

var FixedLayout$1 = withContext(withPlatform(withPanelContext(FixedLayout)), SplitContext, 'splitCol');

var Separator = function Separator(_ref) {
  var className = _ref.className,
      wide = _ref.wide,
      expanded = _ref.expanded,
      restProps = objectWithoutProperties(_ref, ["className", "wide", "expanded"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Separator', platform), className, {
      'Separator--wide': wide
    })
  }), /*#__PURE__*/react.createElement("div", {
    className: classNames('Separator__in', {
      'Separator__in--expanded': expanded
    })
  }));
};

var Separator$1 = /*#__PURE__*/react.memo(Separator);

var PanelHeader = function PanelHeader(_ref) {
  var className = _ref.className,
      left = _ref.left,
      addon = _ref.addon,
      children = _ref.children,
      right = _ref.right,
      separator = _ref.separator,
      visor = _ref.visor,
      transparent = _ref.transparent,
      shadow = _ref.shadow,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      sizeX = _ref.sizeX,
      restProps = objectWithoutProperties(_ref, ["className", "left", "addon", "children", "right", "separator", "visor", "transparent", "shadow", "getRef", "getRootRef", "sizeX"]);

  var platform = usePlatform();

  var _useContext = react.useContext(ConfigProviderContext),
      webviewType = _useContext.webviewType;

  var needShadow = shadow && sizeX === SizeType.REGULAR;
  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('PanelHeader', platform), {
      'PanelHeader--trnsp': transparent,
      'PanelHeader--shadow': needShadow,
      'PanelHeader--vis': visor,
      'PanelHeader--sep': separator && visor,
      'PanelHeader--vkapps': webviewType === WebviewType.VKAPPS,
      'PanelHeader--no-left': left === undefined,
      'PanelHeader--no-right': right === undefined
    }, className),
    ref: getRootRef
  }), /*#__PURE__*/react.createElement(FixedLayout$1, {
    vertical: "top",
    className: classNames('PanelHeader__fixed', {
      'PanelHeader__fixed--shadow': needShadow
    }),
    getRootRef: getRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__in"
  }, /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__left"
  }, left, platform !== ANDROID && addon), /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__content"
  }, isPrimitive ? /*#__PURE__*/react.createElement("span", null, children) : children), /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__right"
  }, webviewType !== WebviewType.VKAPPS && right))), separator && visor && /*#__PURE__*/react.createElement(Separator$1, {
    className: sizeX === SizeType.COMPACT ? 'PanelHeader__separator' : '',
    expanded: sizeX === SizeType.REGULAR
  }));
};

PanelHeader.defaultProps = {
  separator: true,
  transparent: false,
  visor: true
};
var PanelHeader$1 = withAdaptivity(PanelHeader, {
  sizeX: true
});

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PopoutWrapper = /*#__PURE__*/function (_Component) {
  inherits(PopoutWrapper, _Component);

  var _super = _createSuper$7(PopoutWrapper);

  function PopoutWrapper(props) {
    var _this;

    classCallCheck(this, PopoutWrapper);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "elRef", void 0);

    defineProperty(assertThisInitialized(_this), "animationFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onFadeInEnd", function (e) {
      if (!e || e.animationName === 'animation-full-fade-in') {
        _this.setState({
          opened: true
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "preventTouch", function (e) {
      return e.preventDefault();
    });

    _this.state = {
      opened: !props.hasMask
    };
    _this.elRef = /*#__PURE__*/react.createRef();
    return _this;
  }

  createClass(PopoutWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (canUseDOM) {
        window.addEventListener('touchmove', this.preventTouch, {
          passive: false
        });
        this.waitAnimationFinish(this.elRef.current, this.onFadeInEnd);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Здесь нужен последний аргумент с такими же параметрами, потому что
      // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
      // https://github.com/VKCOM/VKUI/issues/444
      if (canUseDOM) {
        // @ts-ignore (В интерфейсе EventListenerOptions нет поля passive)
        window.removeEventListener('touchmove', this.preventTouch, {
          passive: false
        });
        clearTimeout(this.animationFinishTimeout);
      }
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(elem, eventHandler) {
      {
        clearTimeout(this.animationFinishTimeout);
        this.animationFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 200 : 300);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          alignY = _this$props.alignY,
          alignX = _this$props.alignX,
          closing = _this$props.closing,
          children = _this$props.children,
          hasMask = _this$props.hasMask,
          className = _this$props.className,
          platform = _this$props.platform,
          restProps = objectWithoutProperties(_this$props, ["alignY", "alignX", "closing", "children", "hasMask", "className", "platform"]);

      var baseClassNames = getClassname('PopoutWrapper', platform);
      return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
        className: classNames(baseClassNames, "PopoutWrapper--v-".concat(alignY), "PopoutWrapper--h-".concat(alignX), {
          'PopoutWrapper--closing': closing,
          'PopoutWrapper--opened': this.state.opened,
          'PopoutWrapper--fixed': hasMask
        }, className),
        ref: this.elRef
      }), hasMask && /*#__PURE__*/react.createElement("div", {
        className: "PopoutWrapper__mask"
      }), /*#__PURE__*/react.createElement("div", {
        className: "PopoutWrapper__container"
      }, children));
    }
  }]);

  return PopoutWrapper;
}(react.Component);

defineProperty(PopoutWrapper, "defaultProps", {
  hasMask: true,
  alignY: 'center',
  alignX: 'center',
  closing: false
});

var PopoutWrapper$1 = withPlatform(PopoutWrapper);

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ActionSheetDropdownDesktop = /*#__PURE__*/function (_Component) {
  inherits(ActionSheetDropdownDesktop, _Component);

  var _super = _createSuper$8(ActionSheetDropdownDesktop);

  function ActionSheetDropdownDesktop() {
    var _this;

    classCallCheck(this, ActionSheetDropdownDesktop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      dropdownStyles: {
        left: '0',
        top: '0',
        opacity: '0',
        pointerEvents: 'none'
      }
    });

    defineProperty(assertThisInitialized(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          toggleRef = _this$props.toggleRef,
          elementRef = _this$props.elementRef;
      var toggleRect = toggleRef.getBoundingClientRect();
      var elementRect = elementRef.current.getBoundingClientRect();
      var left = toggleRect.left + toggleRect.width - elementRect.width + _this.window.pageXOffset;
      var top = toggleRect.top + toggleRect.height + _this.window.pageYOffset;

      _this.setState({
        dropdownStyles: {
          left: "".concat(left, "px"),
          top: "".concat(top, "px"),
          opacity: '1',
          pointerEvents: 'auto'
        }
      });

      setTimeout(function () {
        _this.window.addEventListener('click', _this.handleClickOutside);
      });
    });

    defineProperty(assertThisInitialized(_this), "componentWillUnmount", function () {
      _this.window.removeEventListener('click', _this.handleClickOutside);
    });

    defineProperty(assertThisInitialized(_this), "handleClickOutside", function (e) {
      var dropdownElement = _this.props.elementRef.current;

      if (dropdownElement !== e.target && dropdownElement && !dropdownElement.contains(e.target)) {
        _this.onClose();
      }
    });

    defineProperty(assertThisInitialized(_this), "onClose", function () {
      _this.props.onClose();
    });

    defineProperty(assertThisInitialized(_this), "stopPropagation", function (e) {
      return e.stopPropagation();
    });

    return _this;
  }

  createClass(ActionSheetDropdownDesktop, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          platform = _this$props2.platform,
          elementRef = _this$props2.elementRef,
          toggleRef = _this$props2.toggleRef,
          closing = _this$props2.closing,
          restProps = objectWithoutProperties(_this$props2, ["children", "platform", "elementRef", "toggleRef", "closing"]);

      var baseClaseName = getClassname('ActionSheet', platform);
      return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
        ref: elementRef,
        onClick: this.stopPropagation,
        style: this.state.dropdownStyles,
        className: classNames(baseClaseName, 'ActionSheet--desktop', {
          'ActionSheet--closing': this.props.closing
        })
      }), children);
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }]);

  return ActionSheetDropdownDesktop;
}(react.Component);

defineProperty(ActionSheetDropdownDesktop, "contextTypes", {
  window: propTypes.any
});

var ActionSheetDropdownDesktop$1 = withPlatform(ActionSheetDropdownDesktop);

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ActionSheetDropdown = /*#__PURE__*/function (_Component) {
  inherits(ActionSheetDropdown, _Component);

  var _super = _createSuper$9(ActionSheetDropdown);

  function ActionSheetDropdown() {
    var _this;

    classCallCheck(this, ActionSheetDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "onClose", function () {
      _this.props.onClose();
    });

    defineProperty(assertThisInitialized(_this), "stopPropagation", function (e) {
      return e.stopPropagation();
    });

    return _this;
  }

  createClass(ActionSheetDropdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          platform = _this$props.platform,
          elementRef = _this$props.elementRef,
          toggleRef = _this$props.toggleRef,
          closing = _this$props.closing,
          restProps = objectWithoutProperties(_this$props, ["children", "platform", "elementRef", "toggleRef", "closing"]);

      var baseClaseName = getClassname('ActionSheet', platform);
      return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
        ref: elementRef,
        onClick: this.stopPropagation,
        className: classNames(baseClaseName, {
          'ActionSheet--closing': this.props.closing
        })
      }), children);
    }
  }]);

  return ActionSheetDropdown;
}(react.Component);

var ActionSheetDropdown$1 = withPlatform(ActionSheetDropdown);

var ActionSheetContext = /*#__PURE__*/react.createContext({});

var Caption = function Caption(_ref) {
  var children = _ref.children,
      className = _ref.className,
      weight = _ref.weight,
      level = _ref.level,
      caps = _ref.caps,
      restProps = objectWithoutProperties(_ref, ["children", "className", "weight", "level", "caps"]);

  var platform = usePlatform();
  var captionWeight = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      captionWeight = 'medium';
    }
  }

  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Caption', platform), "Caption--w-".concat(captionWeight), "Caption--l-".concat(level), {
      'Caption--caps': caps
    }, className)
  }), children);
};

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ActionSheet = /*#__PURE__*/function (_Component) {
  inherits(ActionSheet, _Component);

  var _super = _createSuper$a(ActionSheet);

  function ActionSheet(props) {
    var _this;

    classCallCheck(this, ActionSheet);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "state", {
      closing: false
    });

    defineProperty(assertThisInitialized(_this), "elRef", void 0);

    defineProperty(assertThisInitialized(_this), "transitionFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        closing: true
      });

      _this.waitTransitionFinish(_this.props.onClose);
    });

    defineProperty(assertThisInitialized(_this), "onItemClick", function (action, autoclose) {
      return function (event) {
        event.persist();

        if (autoclose) {
          _this.setState({
            closing: true
          });

          _this.waitTransitionFinish(function () {
            _this.props.onClose();

            action && action(event);
          });
        } else {
          action && action(event);
        }
      };
    });

    _this.elRef = /*#__PURE__*/react.createRef();
    return _this;
  }

  createClass(ActionSheet, [{
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(eventHandler) {
      if (this.props.viewWidth >= ViewWidth.TABLET) {
        eventHandler();
      }

      {
        clearTimeout(this.transitionFinishTimeout);
        this.transitionFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 200 : 300);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          header = _this$props.header,
          text = _this$props.text,
          style = _this$props.style,
          platform = _this$props.platform,
          viewWidth = _this$props.viewWidth,
          iosCloseItem = _this$props.iosCloseItem,
          restProps = objectWithoutProperties(_this$props, ["children", "className", "header", "text", "style", "platform", "viewWidth", "iosCloseItem"]);

      var isDesktop = viewWidth >= ViewWidth.TABLET;
      var DropdownComponent = isDesktop ? ActionSheetDropdownDesktop$1 : ActionSheetDropdown$1;
      return /*#__PURE__*/react.createElement(PopoutWrapper$1, {
        closing: this.state.closing,
        alignY: "bottom",
        className: className,
        style: style,
        onClick: this.onClose,
        hasMask: !isDesktop
      }, /*#__PURE__*/react.createElement(ActionSheetContext.Provider, {
        value: {
          onItemClick: this.onItemClick,
          isDesktop: isDesktop
        }
      }, /*#__PURE__*/react.createElement(DropdownComponent, _extends_1({
        closing: this.state.closing,
        onClose: this.onClose,
        elementRef: this.elRef
      }, restProps), (hasReactNode(header) || hasReactNode(text)) && /*#__PURE__*/react.createElement("header", {
        className: "ActionSheet__header"
      }, hasReactNode(header) && /*#__PURE__*/react.createElement(Caption, {
        level: "1",
        weight: platform === IOS ? 'semibold' : 'medium',
        className: "ActionSheet__title"
      }, header), hasReactNode(text) && /*#__PURE__*/react.createElement(Caption, {
        level: "1",
        weight: "regular",
        className: "ActionSheet__text"
      }, text)), children, platform === IOS && !isDesktop && iosCloseItem)));
    }
  }]);

  return ActionSheet;
}(react.Component);

var ActionSheet$1 = withAdaptivity(withPlatform(ActionSheet), {
  viewWidth: true
});

var Subhead = function Subhead(_ref) {
  var children = _ref.children,
      className = _ref.className,
      weight = _ref.weight,
      Component = _ref.Component,
      restProps = objectWithoutProperties(_ref, ["children", "className", "weight", "Component"]);

  var platform = usePlatform();
  var SubheadComponent = Component;
  var subheadWeight = platform === ANDROID && weight === 'semibold' ? 'medium' : weight;

  if (!Component) {
    SubheadComponent = platform === ANDROID ? 'h4' : 'h5';
  }

  return /*#__PURE__*/react.createElement(SubheadComponent, _extends_1({}, restProps, {
    className: classNames(getClassname('Subhead', platform), "Subhead--w-".concat(subheadWeight), className)
  }), children);
};

var Headline = function Headline(_ref) {
  var children = _ref.children,
      className = _ref.className,
      weight = _ref.weight,
      Component = _ref.Component,
      restProps = objectWithoutProperties(_ref, ["children", "className", "weight", "Component"]);

  var platform = usePlatform();
  var HeadlineComponent = Component;

  if (!Component) {
    HeadlineComponent = platform === ANDROID ? 'h3' : 'h4';
  }

  var headlineWeight = weight;

  if (platform === ANDROID && weight === 'semibold') {
    headlineWeight = 'medium';
  }

  return /*#__PURE__*/react.createElement(HeadlineComponent, _extends_1({}, restProps, {
    className: classNames(getClassname('Headline', platform), "Headline--w-".concat(headlineWeight), className)
  }), children);
};

var getComponent = function getComponent(level) {
  if (!level) {
    return 'div';
  }

  return 'h' + level;
};

var getAndroidTitleWeight = function getAndroidTitleWeight(level, weight) {
  if (level === '3') {
    return weight === 'regular' ? weight : 'medium';
  }

  if (level === '2' && weight === 'semibold') {
    return 'medium';
  }

  if (weight === 'heavy') {
    return 'bold';
  }

  return weight;
};

var Title = function Title(_ref) {
  var children = _ref.children,
      className = _ref.className,
      weight = _ref.weight,
      level = _ref.level,
      Component = _ref.Component,
      restProps = objectWithoutProperties(_ref, ["children", "className", "weight", "level", "Component"]);

  var platform = usePlatform();
  var TitleComponent = Component || getComponent(level);
  var titleWeight = platform === ANDROID ? getAndroidTitleWeight(level, weight) : weight;

  if (platform === ANDROID && level === '3') {
    return /*#__PURE__*/react.createElement(Headline, _extends_1({
      Component: TitleComponent
    }, restProps, {
      weight: titleWeight,
      className: className
    }), children);
  }

  return /*#__PURE__*/react.createElement(TitleComponent, _extends_1({}, restProps, {
    className: classNames(getClassname('Title', platform), "Title--w-".concat(titleWeight), "Title--l-".concat(level), className)
  }), children);
};

var done = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 16';
var id = 'done_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="done_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M6 10.2L3.5 7.7a.99.99 0 10-1.4 1.4l3.193 3.193a1 1 0 001.414 0L14.3 4.7a.99.99 0 00-1.4-1.4L6 10.2z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16Done = function Icon16Done(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16Done.mountIcon = mountIcon;
var _default = Icon16Done;
exports.default = _default;

});

var SelectedIcon = /*@__PURE__*/getDefaultExportFromCjs(done);

var ActionSheetItem = function ActionSheetItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      autoclose = _ref.autoclose,
      mode = _ref.mode,
      meta = _ref.meta,
      subtitle = _ref.subtitle,
      before = _ref.before,
      isLast = _ref.isLast,
      selectable = _ref.selectable,
      value = _ref.value,
      name = _ref.name,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      restProps = objectWithoutProperties(_ref, ["className", "children", "autoclose", "mode", "meta", "subtitle", "before", "isLast", "selectable", "value", "name", "checked", "defaultChecked", "onChange", "onClick"]);

  var platform = usePlatform();

  var _useContext = react.useContext(ActionSheetContext),
      onItemClick = _useContext.onItemClick,
      isDesktop = _useContext.isDesktop;

  var Component = 'div';

  if (restProps.href) {
    Component = 'a';
  } else if (selectable) {
    Component = 'label';
  }

  var isCompact = hasReactNode(subtitle) || hasReactNode(meta) || selectable;
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    onClick: onItemClick(onClick, autoclose),
    className: classNames(getClassname('ActionSheetItem', platform), "ActionSheetItem--".concat(mode), {
      'ActionSheetItem--compact': isCompact,
      'ActionSheetItem--desktop': isDesktop
    }, className),
    Component: Component
  }), hasReactNode(before) && /*#__PURE__*/react.createElement("div", {
    className: "ActionSheetItem__before"
  }, before), /*#__PURE__*/react.createElement("div", {
    className: "ActionSheetItem__container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ActionSheetItem__content"
  }, /*#__PURE__*/react.createElement(Title, {
    weight: mode === 'cancel' ? 'medium' : 'regular',
    level: isCompact || hasReactNode(before) || platform === ANDROID ? '3' : '2',
    className: "ActionSheetItem__children"
  }, children), hasReactNode(meta) && /*#__PURE__*/react.createElement(Title, {
    weight: "regular",
    level: isCompact || hasReactNode(before) || platform === ANDROID ? '3' : '2',
    className: "ActionSheetItem__meta"
  }, meta)), hasReactNode(subtitle) && /*#__PURE__*/react.createElement(Subhead, {
    weight: "regular",
    className: "ActionSheetItem__subtitle"
  }, subtitle)), selectable && /*#__PURE__*/react.createElement("div", {
    className: "ActionSheetItem__after"
  }, /*#__PURE__*/react.createElement("input", {
    type: "radio",
    className: "ActionSheetItem__radio",
    name: name,
    value: value,
    onChange: onChange,
    defaultChecked: defaultChecked,
    checked: checked,
    disabled: restProps.disabled
  }), /*#__PURE__*/react.createElement("div", {
    className: "ActionSheetItem__marker"
  }, /*#__PURE__*/react.createElement(SelectedIcon, null))));
};

ActionSheetItem.defaultProps = {
  mode: 'default'
};

var spinner = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'spinner_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="spinner_24"><path d="M12 24a1.25 1.25 0 110-2.5A9.5 9.5 0 102.5 12c0 1.1.187 2.175.548 3.188a1.25 1.25 0 01-2.355.84A11.981 11.981 0 010 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" fill="currentColor" fill-rule="nonzero" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Spinner = function Icon24Spinner(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Spinner.mountIcon = mountIcon;
var _default = Icon24Spinner;
exports.default = _default;

});

var Spinner24 = /*@__PURE__*/getDefaultExportFromCjs(spinner);

var spinner$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 32 32';
var id = 'spinner_32';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path d="M16 32a1.5 1.5 0 010-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 11.986 21.54 15.97 15.97 0 010 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fill="currentColor" fill-rule="nonzero" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon32Spinner = function Icon32Spinner(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 32,
    height: !isNaN(props.height) ? +props.height : 32
  }));
};

Icon32Spinner.mountIcon = mountIcon;
var _default = Icon32Spinner;
exports.default = _default;

});

var Spinner32 = /*@__PURE__*/getDefaultExportFromCjs(spinner$1);

var spinner$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 44 44';
var id = 'spinner_44';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path d="M22 44a1.5 1.5 0 010-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 11-2.825 1.01A21.964 21.964 0 010 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22z" fill="currentColor" fill-rule="nonzero" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon44Spinner = function Icon44Spinner(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 44,
    height: !isNaN(props.height) ? +props.height : 44
  }));
};

Icon44Spinner.mountIcon = mountIcon;
var _default = Icon44Spinner;
exports.default = _default;

});

var Spinner44 = /*@__PURE__*/getDefaultExportFromCjs(spinner$2);

var spinner$3 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 16';
var id = 'spinner_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="spinner_16"><path d="M8 16a1 1 0 110-2 6 6 0 10-5.7-4.12 1 1 0 11-1.9.626A8 8 0 118 16z" fill="currentColor" fill-rule="nonzero" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16Spinner = function Icon16Spinner(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16Spinner.mountIcon = mountIcon;
var _default = Icon16Spinner;
exports.default = _default;

});

var Spinner16 = /*@__PURE__*/getDefaultExportFromCjs(spinner$3);

var svgSpinner = function svgSpinner(size) {
  switch (size) {
    case 'large':
      return /*#__PURE__*/react.createElement(Spinner44, {
        className: "Spinner__self"
      });

    case 'medium':
      return /*#__PURE__*/react.createElement(Spinner32, {
        className: "Spinner__self"
      });

    case 'small':
      return /*#__PURE__*/react.createElement(Spinner16, {
        className: "Spinner__self"
      });

    default:
      return /*#__PURE__*/react.createElement(Spinner24, {
        className: "Spinner__self"
      });
  }
};

var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      size = _ref.size,
      restProps = objectWithoutProperties(_ref, ["className", "size"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Spinner', platform), className)
  }), svgSpinner(size));
};

Spinner.defaultProps = {
  size: 'regular'
};
var Spinner$1 = /*#__PURE__*/react.memo(Spinner);

var Text = function Text(_ref) {
  var children = _ref.children,
      className = _ref.className,
      weight = _ref.weight,
      restProps = objectWithoutProperties(_ref, ["children", "className", "weight"]);

  var platform = usePlatform();
  var textWeight = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      textWeight = 'medium';
    }
  }

  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Text', platform), "Text--w-".concat(textWeight), className)
  }), children);
};

var getContent = function getContent(size, children, hasIcons, sizeY, platform) {
  switch (size) {
    case 'l':
      return sizeY === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Text, {
        weight: "medium",
        className: "Button__content"
      }, children) : /*#__PURE__*/react.createElement(Title, {
        level: "3",
        weight: "medium",
        Component: "div",
        className: "Button__content"
      }, children);

    case 'm':
      return sizeY === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Subhead, {
        weight: "medium",
        className: "Button__content",
        Component: "div"
      }, children) : /*#__PURE__*/react.createElement(Text, {
        weight: "medium",
        className: "Button__content"
      }, children);

    case 's':
    default:
      if (hasIcons) {
        return /*#__PURE__*/react.createElement(Caption, {
          caps: platform !== OS.VKCOM,
          level: platform === OS.VKCOM ? '1' : sizeY === SizeType.COMPACT ? '3' : '2',
          weight: platform === OS.VKCOM || sizeY === SizeType.COMPACT ? 'medium' : 'semibold',
          className: 'Button__content' + (platform !== OS.VKCOM ? '--caps' : '')
        }, children);
      }

      return sizeY === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Caption, {
        weight: "medium",
        level: "1",
        className: "Button__content"
      }, children) : /*#__PURE__*/react.createElement(Subhead, {
        weight: "medium",
        Component: "div",
        className: "Button__content"
      }, children);
  }
};

var Button = function Button(props) {
  var _classNames;

  var platform = usePlatform();

  var className = props.className,
      size = props.size,
      mode = props.mode,
      stretched = props.stretched,
      align = props.align,
      children = props.children,
      before = props.before,
      after = props.after,
      getRootRef = props.getRootRef,
      Component = props.Component,
      sizeY = props.sizeY,
      restProps = objectWithoutProperties(props, ["className", "size", "mode", "stretched", "align", "children", "before", "after", "getRootRef", "Component", "sizeY"]);

  var hasIcons = Boolean(before || after);
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    className: classNames(getClassname('Button', platform), className, "Button--sz-".concat(size), "Button--lvl-".concat(mode), "Button--aln-".concat(align || 'center'), "Button--sizeY-".concat(sizeY), (_classNames = {}, defineProperty(_classNames, 'Button--str', stretched), defineProperty(_classNames, 'Button--with-icon', hasIcons), _classNames)),
    getRootRef: getRootRef,
    Component: restProps.href ? 'a' : Component
  }), /*#__PURE__*/react.createElement("div", {
    className: "Button__in"
  }, before && /*#__PURE__*/react.createElement("div", {
    className: "Button__before"
  }, before), children && getContent(size, children, hasIcons, sizeY, platform), after && /*#__PURE__*/react.createElement("div", {
    className: "Button__after"
  }, after)));
};

Button.defaultProps = {
  mode: 'primary',
  Component: 'button',
  size: 's',
  stretched: false,
  stopPropagation: true
};
var Button$1 = withAdaptivity(Button, {
  sizeY: true
});

var IconButton = function IconButton(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      restProps = objectWithoutProperties(_ref, ["className", "icon"]);

  var Component = restProps.href ? 'a' : 'button';
  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    Component: Component,
    activeEffectDelay: 200,
    className: classNames(getClassname('IconButton', platform), className)
  }), icon);
};

var Card = function Card(_ref) {
  var size = _ref.size,
      mode = _ref.mode,
      children = _ref.children,
      style = _ref.style,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ["size", "mode", "children", "style", "className"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    style: style,
    className: classNames(className, getClassname('Card', platform), "Card--sz-".concat(size), "Card--md-".concat(mode))
  }), /*#__PURE__*/react.createElement("div", {
    className: "Card__in"
  }, children));
};

Card.defaultProps = {
  size: 'm',
  mode: 'tint'
};

var CardGrid = function CardGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ["children", "className", "style"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    style: style,
    className: classNames(className, getClassname('CardGrid', platform))
  }), children);
};

var CellButton = function CellButton(_ref) {
  var className = _ref.className,
      align = _ref.align,
      mode = _ref.mode,
      before = _ref.before,
      children = _ref.children,
      stopPropagation = _ref.stopPropagation,
      Component = _ref.Component,
      sizeX = _ref.sizeX,
      restProps = objectWithoutProperties(_ref, ["className", "align", "mode", "before", "children", "stopPropagation", "Component", "sizeX"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    className: classNames(getClassname('CellButton', platform), className, "CellButton--sizeX-".concat(sizeX), "CellButton--lvl-".concat(mode), "CellButton--aln-".concat(align)),
    Component: restProps.href ? 'a' : Component
  }), /*#__PURE__*/react.createElement("div", {
    className: "CellButton__in"
  }, before && /*#__PURE__*/react.createElement("div", {
    className: "CellButton__before"
  }, before), children && /*#__PURE__*/react.createElement("div", {
    className: "CellButton__content"
  }, children)));
};

CellButton.defaultProps = {
  mode: 'primary',
  Component: 'button',
  align: 'left',
  stopPropagation: true
};
var CellButton$1 = withAdaptivity(CellButton, {
  sizeX: true
});

var Header = function Header(_ref) {
  var className = _ref.className,
      mode = _ref.mode,
      children = _ref.children,
      subtitle = _ref.subtitle,
      indicator = _ref.indicator,
      aside = _ref.aside,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["className", "mode", "children", "subtitle", "indicator", "aside", "getRootRef"]);

  var platform = usePlatform();
  var baseClassNames = getClassname('Header', platform);
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassNames, className, "Header--mode-".concat(mode), {
      'Header--pi': typeof indicator === 'string' || typeof indicator === 'number'
    })
  }), /*#__PURE__*/react.createElement("div", {
    className: "Header__in"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Header__content"
  }, children, subtitle && /*#__PURE__*/react.createElement("div", {
    className: "Header__subtitle"
  }, subtitle)), indicator && /*#__PURE__*/react.createElement("div", {
    className: "Header__indicator"
  }, indicator), aside && /*#__PURE__*/react.createElement("div", {
    className: "Header__aside"
  }, aside)));
};

Header.defaultProps = {
  mode: 'primary'
};

var Group = function Group(props) {
  var header = props.header,
      description = props.description,
      className = props.className,
      children = props.children,
      separator = props.separator,
      getRootRef = props.getRootRef,
      sizeX = props.sizeX,
      restProps = objectWithoutProperties(props, ["header", "description", "className", "children", "separator", "getRootRef", "sizeX"]);

  var platform = usePlatform();
  var baseClassNames = getClassname('Group', platform);
  return /*#__PURE__*/react.createElement("section", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassNames, className)
  }), /*#__PURE__*/react.createElement("div", {
    className: classNames('Group__inner', "Group__inner--sizeX-".concat(sizeX))
  }, header, children, description && /*#__PURE__*/react.createElement("div", {
    className: "Group__description"
  }, description)), separator !== 'hide' && /*#__PURE__*/react.createElement(Separator$1, {
    className: classNames('Group__separator', {
      'Group__separator--force': separator === 'show'
    }),
    expanded: sizeX === SizeType.REGULAR
  }));
};

Group.defaultProps = {
  separator: 'auto'
};
Group = withAdaptivity(Group, {
  sizeX: true
});
var Group$1 = Group;

var List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ["className", "children"]);

  var platform = usePlatform();
  var baseClassName = getClassname('List', platform);
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(baseClassName, className)
  }), children);
};

var cancel = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'cancel_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cancel_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M18.3 5.7a.99.99 0 00-1.4 0L12 10.6 7.1 5.7a.99.99 0 00-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 001.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 001.4-1.4L13.4 12l4.9-4.9a.99.99 0 000-1.4z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Cancel = function Icon24Cancel(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Cancel.mountIcon = mountIcon;
var _default = Icon24Cancel;
exports.default = _default;

});

var Icon24Cancel = /*@__PURE__*/getDefaultExportFromCjs(cancel);

var reorder = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'reorder_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M21 18a1 1 0 01-1 1H4a1 1 0 010-2h16a1 1 0 011 1zm0-4a1 1 0 01-1 1H4a1 1 0 010-2h16a1 1 0 011 1zm0-4a1 1 0 01-1 1H4a1 1 0 010-2h16a1 1 0 011 1zM3 6a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Reorder = function Icon24Reorder(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Reorder.mountIcon = mountIcon;
var _default = Icon24Reorder;
exports.default = _default;

});

var Icon24Reorder = /*@__PURE__*/getDefaultExportFromCjs(reorder);

var reorder_ios = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'reorder_ios_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_ios_24"><g fill="none" fill-rule="evenodd"><path opacity=".1" d="M0 0h24v24H0z" /><path d="M2.75 7h18.5a.75.75 0 110 1.5H2.75a.75.75 0 010-1.5zm0 4h18.5a.75.75 0 110 1.5H2.75a.75.75 0 110-1.5zm0 4h18.5a.75.75 0 110 1.5H2.75a.75.75 0 110-1.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24ReorderIos = function Icon24ReorderIos(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24ReorderIos.mountIcon = mountIcon;
var _default = Icon24ReorderIos;
exports.default = _default;

});

var Icon24ReorderIos = /*@__PURE__*/getDefaultExportFromCjs(reorder_ios);

var chevron = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 24';
var id = 'chevron_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path d="M4.706 7.706a1 1 0 010-1.412l.088-.088a.997.997 0 011.414.002l5.084 5.084a.998.998 0 010 1.416l-5.084 5.084a1.002 1.002 0 01-1.414.002l-.088-.088a.995.995 0 010-1.412L9 12 4.706 7.706z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Chevron = function Icon24Chevron(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Chevron.mountIcon = mountIcon;
var _default = Icon24Chevron;
exports.default = _default;

});

var Icon24Chevron = /*@__PURE__*/getDefaultExportFromCjs(chevron);

var SimpleCell = function SimpleCell(_ref) {
  var before = _ref.before,
      indicator = _ref.indicator,
      children = _ref.children,
      after = _ref.after,
      description = _ref.description,
      className = _ref.className,
      expandable = _ref.expandable,
      multiline = _ref.multiline,
      Component = _ref.Component,
      sizeX = _ref.sizeX,
      restProps = objectWithoutProperties(_ref, ["before", "indicator", "children", "after", "description", "className", "expandable", "multiline", "Component", "sizeX"]);

  var platform = usePlatform();
  var hasAfter = hasReactNode(after) || expandable && platform === IOS;
  var RootComponent = restProps.disabled ? Component : Tappable$1;
  Component = restProps.disabled ? undefined : Component;
  return /*#__PURE__*/react.createElement(RootComponent, _extends_1({}, restProps, {
    Component: restProps.href ? 'a' : Component,
    className: classNames(className, getClassname('SimpleCell', platform), "SimpleCell--sizeX-".concat(sizeX), {
      'SimpleCell--exp': expandable,
      'SimpleCell--mult': multiline
    })
  }), before, /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__main"
  }, /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__children"
  }, children), description && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__description"
  }, description)), hasReactNode(indicator) && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__indicator"
  }, indicator), hasAfter && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__after"
  }, after, expandable && platform === IOS && /*#__PURE__*/react.createElement(Icon24Chevron, null)));
};

SimpleCell.defaultProps = {
  Component: 'div'
};
var SimpleCell$1 = withAdaptivity(SimpleCell, {
  sizeX: true
});

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Cell = /*#__PURE__*/function (_Component) {
  inherits(Cell, _Component);

  var _super = _createSuper$b(Cell);

  function Cell(props) {
    var _this;

    classCallCheck(this, Cell);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "rootEl", void 0);

    defineProperty(assertThisInitialized(_this), "removeButton", void 0);

    defineProperty(assertThisInitialized(_this), "onRemoveActivateClick", function (e) {
      e.nativeEvent.stopPropagation();
      e.preventDefault();

      _this.setState({
        isRemoveActivated: true
      });

      _this.document.addEventListener('click', _this.deactivateRemove);
    });

    defineProperty(assertThisInitialized(_this), "deactivateRemove", function () {
      _this.setState({
        isRemoveActivated: false,
        removeOffset: 0
      });

      _this.document.removeEventListener('click', _this.deactivateRemove);
    });

    defineProperty(assertThisInitialized(_this), "onRemoveClick", function (e) {
      e.nativeEvent.stopImmediatePropagation();
      e.preventDefault();
      _this.props.onRemove && _this.props.onRemove(e, _this.rootEl);
    });

    defineProperty(assertThisInitialized(_this), "getRemoveRef", function (el) {
      return _this.removeButton = el;
    });

    defineProperty(assertThisInitialized(_this), "getRootRef", function (element) {
      _this.rootEl = element;
      setRef(element, _this.props.getRootRef);
    });

    defineProperty(assertThisInitialized(_this), "dragShift", void 0);

    defineProperty(assertThisInitialized(_this), "listEl", void 0);

    defineProperty(assertThisInitialized(_this), "siblings", void 0);

    defineProperty(assertThisInitialized(_this), "dragStartIndex", void 0);

    defineProperty(assertThisInitialized(_this), "dragEndIndex", void 0);

    defineProperty(assertThisInitialized(_this), "dragDirection", void 0);

    defineProperty(assertThisInitialized(_this), "onDragStart", function () {
      _this.setState({
        dragging: true
      });

      _this.dragShift = 0;
      _this.listEl = _this.rootEl.closest('.List');
      _this.listEl && _this.listEl.classList.add('List--dragging');
      _this.siblings = Array.prototype.slice.call(_this.rootEl.parentElement.childNodes);
      _this.dragStartIndex = _this.siblings.indexOf(_this.rootEl);
    });

    defineProperty(assertThisInitialized(_this), "onDragMove", function (e) {
      e.originalEvent.preventDefault();

      if (_this.state.removeOffset) {
        return;
      }

      _this.rootEl.style.transform = "translateY(".concat(e.shiftY, "px)");

      var rootGesture = _this.rootEl.getBoundingClientRect();

      _this.dragDirection = _this.dragShift - e.shiftY < 0 ? 'down' : 'up';
      _this.dragShift = e.shiftY;
      _this.dragEndIndex = _this.dragStartIndex;

      _this.siblings.forEach(function (sibling, siblingIndex) {
        var siblingGesture = sibling.getBoundingClientRect();

        if (_this.dragStartIndex < siblingIndex) {
          if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2) {
            if (_this.dragDirection === 'down') {
              sibling.style.transform = 'translateY(-100%)';
            }

            _this.dragEndIndex++;
          }

          if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2 && _this.dragDirection === 'up') {
            sibling.style.transform = 'translateY(0)';
          }
        } else if (_this.dragStartIndex > siblingIndex) {
          if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2) {
            if (_this.dragDirection === 'up') {
              sibling.style.transform = 'translateY(100%)';
            }

            _this.dragEndIndex--;
          }

          if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2 && _this.dragDirection === 'down') {
            sibling.style.transform = 'translateY(0)';
          }
        }
      });
    });

    defineProperty(assertThisInitialized(_this), "onDragEnd", function () {
      _this.setState({
        dragging: false
      });

      _this.listEl && _this.listEl.classList.remove('List--dragging');
      _this.props.onDragFinish && _this.props.onDragFinish({
        from: _this.dragStartIndex,
        to: _this.dragEndIndex
      });

      _this.siblings.forEach(function (sibling) {
        return sibling.style.transform = null;
      });

      delete _this.dragShift;
      delete _this.listEl;
      delete _this.siblings;
      delete _this.dragStartIndex;
      delete _this.dragEndIndex;
      delete _this.dragDirection;
    });

    defineProperty(assertThisInitialized(_this), "onDragClick", function (e) {
      e.nativeEvent.stopPropagation();
      e.preventDefault();
    });

    _this.state = {
      isRemoveActivated: false,
      removeOffset: 0,
      dragging: false
    };
    return _this;
  }

  createClass(Cell, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.document.removeEventListener('click', this.deactivateRemove);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, prevState) {
      if (prevState.isRemoveActivated !== this.state.isRemoveActivated && this.state.isRemoveActivated) {
        this.setState({
          removeOffset: this.removeButton.offsetWidth
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onRemove = _this$props.onRemove,
          removePlaceholder = _this$props.removePlaceholder,
          onDragFinish = _this$props.onDragFinish,
          className = _this$props.className,
          style = _this$props.style,
          getRootRef = _this$props.getRootRef,
          platform = _this$props.platform,
          before = _this$props.before,
          after = _this$props.after,
          disabled = _this$props.disabled,
          removable = _this$props.removable,
          draggable = _this$props.draggable,
          selectable = _this$props.selectable,
          Component = _this$props.Component,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick,
          name = _this$props.name,
          checked = _this$props.checked,
          defaultChecked = _this$props.defaultChecked,
          restProps = objectWithoutProperties(_this$props, ["onRemove", "removePlaceholder", "onDragFinish", "className", "style", "getRootRef", "platform", "before", "after", "disabled", "removable", "draggable", "selectable", "Component", "onChange", "onClick", "name", "checked", "defaultChecked"]);

      return /*#__PURE__*/react.createElement("div", {
        className: classNames(getClassname('Cell', platform), {
          'Cell--dragging': this.state.dragging
        }, className),
        style: style,
        ref: this.getRootRef
      }, /*#__PURE__*/react.createElement("div", {
        className: "Cell__in",
        style: platform === IOS && removable ? {
          transform: "translateX(-".concat(this.state.removeOffset, "px)")
        } : null
      }, /*#__PURE__*/react.createElement(SimpleCell$1, _extends_1({}, restProps, {
        onClick: draggable || removable ? undefined : onClick,
        disabled: draggable || removable || disabled,
        Component: selectable ? 'label' : Component,
        before: /*#__PURE__*/react.createElement(react.Fragment, null, platform === IOS && removable && /*#__PURE__*/react.createElement("div", {
          className: "Cell__remove-marker",
          onClick: this.onRemoveActivateClick
        }), selectable && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("input", {
          type: "checkbox",
          className: "Cell__checkbox",
          name: name,
          onChange: onChange,
          defaultChecked: defaultChecked,
          checked: checked
        }), /*#__PURE__*/react.createElement("div", {
          className: "Cell__marker"
        }, /*#__PURE__*/react.createElement(SelectedIcon, null))), platform === ANDROID && draggable && /*#__PURE__*/react.createElement(Touch, {
          onStart: this.onDragStart,
          onMoveY: this.onDragMove,
          onEnd: this.onDragEnd,
          onClick: this.onDragClick,
          className: "Cell__dragger"
        }, /*#__PURE__*/react.createElement(Icon24Reorder, null)), before),
        after: /*#__PURE__*/react.createElement(react.Fragment, null, platform === ANDROID && removable && /*#__PURE__*/react.createElement("div", {
          className: "Cell__remove-marker"
        }, /*#__PURE__*/react.createElement(IconButton, {
          icon: /*#__PURE__*/react.createElement(Icon24Cancel, null),
          onClick: this.onRemoveClick
        })), platform === IOS && draggable && /*#__PURE__*/react.createElement(Touch, {
          className: "Cell__dragger",
          onStart: this.onDragStart,
          onMoveY: this.onDragMove,
          onEnd: this.onDragEnd,
          onClick: this.onDragClick
        }, /*#__PURE__*/react.createElement(Icon24ReorderIos, null)), after)
      }))), platform === IOS && removable && /*#__PURE__*/react.createElement("div", {
        ref: this.getRemoveRef,
        className: "Cell__remove",
        onClick: this.onRemoveClick,
        style: {
          transform: "translateX(-".concat(this.state.removeOffset, "px)")
        }
      }, /*#__PURE__*/react.createElement("span", {
        className: "Cell__remove-in"
      }, removePlaceholder)));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return Cell;
}(react.Component);

defineProperty(Cell, "defaultProps", {
  removePlaceholder: 'Удалить'
});

defineProperty(Cell, "contextTypes", {
  document: propTypes.any
});

var Cell$1 = withPlatform(Cell);

var Div = function Div(_ref) {
  var className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["className", "children", "getRootRef"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(getClassname('Div', platform), className)
  }), children);
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      size = _ref.size,
      shadow = _ref.shadow,
      mode = _ref.mode,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["src", "size", "shadow", "mode", "style", "className", "children", "getRootRef"]);

  var Component = src ? 'img' : 'div';
  var platform = usePlatform();
  var borderRadius;

  switch (mode) {
    case 'default':
      borderRadius = '50%';
      break;

    case 'image':
      borderRadius = 4;
      break;

    case 'app':
      borderRadius = Math.floor(size * 10 / 48);
      break;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: classNames(getClassname('Avatar', platform), className, "Avatar--type-".concat(mode), "Avatar--sz-".concat(size)),
    ref: getRootRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "Avatar__in",
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
    className: "Avatar__img",
    src: src,
    style: _objectSpread$6(_objectSpread$6({}, style), {}, {
      borderRadius: borderRadius
    })
  })), shadow && /*#__PURE__*/react.createElement("span", {
    className: "Avatar__shadow",
    style: {
      borderRadius: borderRadius
    }
  }), children && /*#__PURE__*/react.createElement("div", {
    className: "Avatar__children",
    style: {
      width: size,
      height: size,
      borderRadius: borderRadius
    }
  }, children)));
};

Avatar.defaultProps = {
  size: 48,
  mode: 'default',
  shadow: true
};

var Progress = function Progress(props) {
  var value = props.value,
      className = props.className,
      getRootRef = props.getRootRef,
      restProps = objectWithoutProperties(props, ["value", "className", "getRootRef"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(getClassname('Progress', platform), className)
  }), /*#__PURE__*/react.createElement("div", {
    className: "Progress__bg"
  }), /*#__PURE__*/react.createElement("div", {
    className: "Progress__in",
    style: {
      width: "".concat(value, "%")
    }
  }));
};

Progress.defaultProps = {
  value: 0
};

var search_outline = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 16';
var id = 'search_outline_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="search_outline_16"><g fill="none" fill-rule="evenodd" opacity=".92"><path opacity=".1" d="M0 0h16v16H0z" /><path d="M9.823 10.884a5.5 5.5 0 111.06-1.06l3.896 3.9a.75.75 0 01-1.061 1.06l-3.895-3.9zM6.5 10.5a4 4 0 100-8 4 4 0 000 8z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16SearchOutline = function Icon16SearchOutline(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16SearchOutline.mountIcon = mountIcon;
var _default = Icon16SearchOutline;
exports.default = _default;

});

var Icon16SearchOutline = /*@__PURE__*/getDefaultExportFromCjs(search_outline);

var clear = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 16';
var id = 'clear_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="clear_16"><path d="M6.729 8.002L4.263 10.47a.9.9 0 101.273 1.273L8 9.275l2.465 2.468a.9.9 0 101.272-1.273L9.273 8.002l2.465-2.469a.9.9 0 10-1.272-1.273L8 6.728 5.536 4.26a.9.9 0 00-1.273 1.273l2.466 2.469zM8 16A8 8 0 118 0a8 8 0 010 16z" fill="currentColor" fill-rule="evenodd" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16Clear = function Icon16Clear(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16Clear.mountIcon = mountIcon;
var _default = Icon16Clear;
exports.default = _default;

});

var Icon16Clear = /*@__PURE__*/getDefaultExportFromCjs(clear);

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var searchId = 0;

var Search = /*#__PURE__*/function (_Component) {
  inherits(Search, _Component);

  var _super = _createSuper$c(Search);

  function Search(props) {
    var _this;

    classCallCheck(this, Search);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "isControlledOutside", void 0);

    defineProperty(assertThisInitialized(_this), "inputEl", void 0);

    defineProperty(assertThisInitialized(_this), "searchId", void 0);

    defineProperty(assertThisInitialized(_this), "onFocus", function (e) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus && _this.props.onFocus(e);
    });

    defineProperty(assertThisInitialized(_this), "onBlur", function (e) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur && _this.props.onBlur(e);
    });

    defineProperty(assertThisInitialized(_this), "onChange", function (e) {
      var target = e.target;

      if (!_this.isControlledOutside) {
        _this.setState({
          value: target.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "onCancel", function () {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeInputValueSetter.call(_this.inputEl, '');
      var ev2 = new Event('input', {
        bubbles: true
      });

      _this.inputEl.dispatchEvent(ev2);
    });

    defineProperty(assertThisInitialized(_this), "onIconClickStart", function (e) {
      _this.props.onIconClick && _this.props.onIconClick(e.originalEvent);
    });

    defineProperty(assertThisInitialized(_this), "onIconCancelClickStart", function (e) {
      e.originalEvent.preventDefault();

      _this.inputEl.focus();

      _this.onCancel();
    });

    defineProperty(assertThisInitialized(_this), "inputRef", function (element) {
      _this.inputEl = element;
      setRef(element, _this.props.getRef);
    });

    var state = {
      focused: false
    };

    if (props.hasOwnProperty('value')) {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    _this.searchId = "search-".concat(searchId++);
    _this.state = state;
    return _this;
  }

  createClass(Search, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          placeholder = _this$props.placeholder,
          after = _this$props.after,
          getRef = _this$props.getRef,
          platform = _this$props.platform,
          icon = _this$props.icon,
          onIconClick = _this$props.onIconClick,
          inputProps = objectWithoutProperties(_this$props, ["className", "onFocus", "onBlur", "onChange", "defaultValue", "value", "placeholder", "after", "getRef", "platform", "icon", "onIconClick"]);

      return /*#__PURE__*/react.createElement("div", {
        className: classNames(getClassname('Search', platform), {
          'Search--focused': this.state.focused,
          'Search--has-value': !!this.value,
          'Search--has-after': !!after,
          'Search--has-icon': !!icon
        }, className)
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__in"
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__width"
      }), /*#__PURE__*/react.createElement("div", {
        className: "Search__control"
      }, /*#__PURE__*/react.createElement("input", _extends_1({}, inputProps, {
        ref: this.inputRef,
        type: "text",
        className: "Search__input",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        value: this.value
      })), platform === IOS && after && /*#__PURE__*/react.createElement("div", {
        className: "Search__after-width"
      }, after), /*#__PURE__*/react.createElement("div", {
        className: "Search__placeholder"
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__placeholder-in"
      }, /*#__PURE__*/react.createElement(Icon16SearchOutline, null), /*#__PURE__*/react.createElement("div", {
        className: "Search__placeholder-text"
      }, placeholder)))), /*#__PURE__*/react.createElement("div", {
        className: "Search__after",
        onClick: this.onCancel
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__icons"
      }, icon && /*#__PURE__*/react.createElement(Touch, {
        onStart: this.onIconClickStart,
        className: "Search__icon"
      }, icon), !!this.value && /*#__PURE__*/react.createElement(Touch, {
        onStart: this.onIconCancelClickStart,
        className: "Search__icon"
      }, /*#__PURE__*/react.createElement(Icon16Clear, null))), platform === IOS && after && /*#__PURE__*/react.createElement("div", {
        className: "Search__after-in"
      }, after))));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Search;
}(react.Component);

defineProperty(Search, "defaultProps", {
  autoComplete: 'off',
  placeholder: 'Поиск',
  after: 'Отмена'
});

var Search$1 = withPlatform(Search);

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.Component,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["children", "className", "Component", "getRootRef"]);

  var platform = usePlatform();
  var baseClassName = getClassname('Link', platform);

  if (!Component) {
    if (restProps.href) {
      Component = 'a';
    } else {
      Component = 'button';
      restProps = _objectSpread$7({
        type: 'button'
      }, restProps);
    }
  }

  return /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassName, className)
  }), children);
};

var Placeholder = function Placeholder(props) {
  var className = props.className,
      icon = props.icon,
      header = props.header,
      action = props.action,
      children = props.children,
      stretched = props.stretched;
  return /*#__PURE__*/react.createElement("div", {
    className: classNames('Placeholder', {
      'Placeholder--stretched': stretched
    }, className)
  }, /*#__PURE__*/react.createElement("div", {
    className: "Placeholder__in"
  }, icon && /*#__PURE__*/react.createElement("div", {
    className: "Placeholder__icon"
  }, icon), header && /*#__PURE__*/react.createElement("div", {
    className: "Placeholder__header"
  }, header), children && /*#__PURE__*/react.createElement("div", {
    className: "Placeholder__text"
  }, children), action && /*#__PURE__*/react.createElement("div", {
    className: "Placeholder__action"
  }, action)));
};

var preventDefault = function preventDefault(e) {
  return e.preventDefault();
};

var FormLayout = function FormLayout(props) {
  var children = props.children,
      Component = props.Component,
      className = props.className,
      getRef = props.getRef,
      onSubmit = props.onSubmit,
      restProps = objectWithoutProperties(props, ["children", "Component", "className", "getRef", "onSubmit"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
    className: classNames(getClassname('FormLayout', platform), className),
    onSubmit: onSubmit,
    ref: getRef
  }), /*#__PURE__*/react.createElement("div", {
    className: "FormLayout__container"
  }, react.Children.toArray(children).map(function (field, i) {
    if (field) {
      var _field$props = field.props,
          status = _field$props.status,
          top = _field$props.top,
          bottom = _field$props.bottom;
      return /*#__PURE__*/react.createElement("div", {
        className: classNames('FormLayout__row', defineProperty({}, "FormLayout__row--s-".concat(status), !!status)),
        key: field.key || "row-".concat(i)
      }, top && /*#__PURE__*/react.createElement("div", {
        className: "FormLayout__row-top"
      }, top), field, bottom && /*#__PURE__*/react.createElement("div", {
        className: "FormLayout__row-bottom"
      }, bottom));
    } else {
      return null;
    }
  })), Component === 'form' && /*#__PURE__*/react.createElement("input", {
    type: "submit",
    className: "FormLayout__submit",
    value: ""
  }));
};

FormLayout.defaultProps = {
  Component: 'form',
  onSubmit: preventDefault
};

var File = function File(props) {
  var children = props.children,
      align = props.align,
      controlSize = props.controlSize,
      mode = props.mode,
      stretched = props.stretched,
      before = props.before,
      className = props.className,
      style = props.style,
      getRef = props.getRef,
      getRootRef = props.getRootRef,
      restProps = objectWithoutProperties(props, ["children", "align", "controlSize", "mode", "stretched", "before", "className", "style", "getRef", "getRootRef"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Button$1, {
    align: align,
    className: classNames(getClassname('File', platform), className),
    Component: "label",
    stretched: stretched,
    mode: mode,
    size: controlSize,
    before: before,
    style: style,
    getRootRef: getRootRef,
    disabled: restProps.disabled
  }, /*#__PURE__*/react.createElement("input", _extends_1({}, restProps, {
    className: "File__input",
    type: "file",
    ref: getRef
  })), children);
};

File.defaultProps = {
  children: 'Выберите файл',
  align: 'left'
};

var FormField = function FormField(_ref) {
  var Component = _ref.Component,
      className = _ref.className,
      children = _ref.children,
      status = _ref.status,
      getRootRef = _ref.getRootRef,
      top = _ref.top,
      bottom = _ref.bottom,
      restProps = objectWithoutProperties(_ref, ["Component", "className", "children", "status", "getRootRef", "top", "bottom"]);

  var platform = usePlatform();

  var _useState = react.useState(false),
      _useState2 = slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var handleMouseEnter = function handleMouseEnter(e) {
    e.stopPropagation();
    setHover(true);
  };

  var handleMouseLeave = function handleMouseLeave(e) {
    e.stopPropagation();
    setHover(false);
  };

  return /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
    ref: getRootRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: classNames(getClassname('FormField', platform), defineProperty({}, "FormField--s-".concat(status), status !== 'default'), className)
  }), children, /*#__PURE__*/react.createElement("div", {
    className: classNames('FormField__border', {
      'FormField__border--hover': hover
    })
  }));
};

FormField.defaultProps = {
  status: 'default',
  Component: 'div'
};

var Input = function Input(_ref) {
  var align = _ref.align,
      status = _ref.status,
      getRef = _ref.getRef,
      className = _ref.className,
      getRootRef = _ref.getRootRef,
      top = _ref.top,
      bottom = _ref.bottom,
      sizeY = _ref.sizeY,
      restProps = objectWithoutProperties(_ref, ["align", "status", "getRef", "className", "getRootRef", "top", "bottom", "sizeY"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(FormField, {
    className: classNames(getClassname('Input', platform), className, defineProperty({}, "Input--".concat(align), !!align), "Input--sizeY-".concat(sizeY)),
    status: status,
    getRootRef: getRootRef
  }, /*#__PURE__*/react.createElement("input", _extends_1({}, restProps, {
    className: "Input__el",
    ref: getRef
  })));
};

Input.defaultProps = {
  type: 'text'
};
var Input$1 = withAdaptivity(Input, {
  sizeY: true
});

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Textarea = /*#__PURE__*/function (_PureComponent) {
  inherits(Textarea, _PureComponent);

  var _super = _createSuper$d(Textarea);

  function Textarea(props) {
    var _this;

    classCallCheck(this, Textarea);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "isControlledOutside", void 0);

    defineProperty(assertThisInitialized(_this), "element", void 0);

    defineProperty(assertThisInitialized(_this), "getRef", function (element) {
      _this.element = element;
      setRef(element, _this.props.getRef);
    });

    defineProperty(assertThisInitialized(_this), "resize", function () {
      var el = _this.element;

      if (el) {
        var offsetHeight = el.offsetHeight,
            scrollHeight = el.scrollHeight;
        var style = window.getComputedStyle(el);
        var paddingTop = parseInt(style.paddingTop);
        var paddingBottom = parseInt(style.paddingBottom);
        var diff = paddingTop + paddingBottom;

        if (scrollHeight + diff <= offsetHeight) {
          diff = 0;
        }

        if (el.value) {
          _this.setState({
            height: scrollHeight - diff
          });
        }

        _this.setState({
          height: 0
        }, function () {
          var height = el.scrollHeight - diff;

          _this.setState({
            height: height
          });

          if (_this.props.onResize) {
            _this.props.onResize(el);
          }
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "onChange", function (e) {
      if (_this.props.grow) {
        _this.resize();
      }

      if (!_this.isControlledOutside) {
        _this.setState({
          value: e.target.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
      _this.state = {};
    } else {
      _this.state = {
        value: props.defaultValue || ''
      };
    }

    return _this;
  }

  createClass(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.grow) {
        this.resize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        window.requestAnimationFrame(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          onChange = _this$props.onChange,
          grow = _this$props.grow,
          style = _this$props.style,
          onResize = _this$props.onResize,
          className = _this$props.className,
          getRootRef = _this$props.getRootRef,
          getRef = _this$props.getRef,
          status = _this$props.status,
          top = _this$props.top,
          bottom = _this$props.bottom,
          sizeY = _this$props.sizeY,
          platform = _this$props.platform,
          restProps = objectWithoutProperties(_this$props, ["defaultValue", "value", "onChange", "grow", "style", "onResize", "className", "getRootRef", "getRef", "status", "top", "bottom", "sizeY", "platform"]);

      var height = this.state.height || style.height || 66;
      return /*#__PURE__*/react.createElement(FormField, {
        className: classNames(getClassname('Textarea', platform), className, "Textarea--sizeY-".concat(sizeY)),
        style: style,
        getRootRef: getRootRef,
        status: status
      }, /*#__PURE__*/react.createElement("textarea", _extends_1({}, restProps, {
        className: "Textarea__el",
        value: this.value,
        onChange: this.onChange,
        ref: this.getRef,
        style: {
          height: height
        }
      })));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Textarea;
}(react.PureComponent);

defineProperty(Textarea, "defaultProps", {
  style: {},
  defaultValue: '',
  grow: true
});

var Textarea$1 = withPlatform(withAdaptivity(Textarea, {
  sizeY: true
}));

var check_box_on = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 20 20';
var id = 'check_box_on_20';
var content = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="check_box_on_20"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 001.748 1.748C5.04 18 6.16 18 8.4 18h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 001.748-1.748C18 14.96 18 13.84 18 11.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 00-1.748-1.748C14.96 2 13.84 2 11.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 00-1.748 1.748zm12.2 3.803a.9.9 0 10-1.272-1.274l-4.673 4.665-2.055-2.052A.9.9 0 005.364 10.6l2.691 2.687a.9.9 0 001.272 0l5.309-5.3z" fill="currentColor" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon20CheckBoxOn = function Icon20CheckBoxOn(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
};

Icon20CheckBoxOn.mountIcon = mountIcon;
var _default = Icon20CheckBoxOn;
exports.default = _default;

});

var Icon20CheckboxOn = /*@__PURE__*/getDefaultExportFromCjs(check_box_on);

var check_box_off = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 20 20';
var id = 'check_box_off_20';
var content = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="check_box_off_20"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.046 2.534C4.788 2.138 5.517 2 7.128 2h5.744c1.61 0 2.34.138 3.082.534.65.348 1.164.862 1.512 1.512.396.742.534 1.471.534 3.082v5.744c0 1.61-.138 2.34-.534 3.082a3.644 3.644 0 01-1.512 1.512c-.742.396-1.472.534-3.082.534H7.128c-1.61 0-2.34-.138-3.082-.534a3.644 3.644 0 01-1.512-1.512C2.138 15.212 2 14.482 2 12.872V7.128c0-1.61.138-2.34.534-3.082a3.645 3.645 0 011.512-1.512zm3.082.966c-1.531 0-1.962.136-2.374.357a2.145 2.145 0 00-.897.897c-.22.412-.357.843-.357 2.374v5.744c0 1.531.136 1.962.357 2.374.208.389.508.69.897.897.412.22.843.357 2.374.357h5.744c1.531 0 1.962-.136 2.374-.357.389-.208.69-.508.897-.897.22-.412.357-.843.357-2.374V7.128c0-1.531-.136-1.962-.357-2.374a2.145 2.145 0 00-.897-.897c-.412-.22-.843-.357-2.374-.357H7.128z" fill="currentColor" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon20CheckBoxOff = function Icon20CheckBoxOff(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
};

Icon20CheckBoxOff.mountIcon = mountIcon;
var _default = Icon20CheckBoxOff;
exports.default = _default;

});

var Icon20CheckboxOff = /*@__PURE__*/getDefaultExportFromCjs(check_box_off);

var check_box_on$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'check_box_on_24';
var content = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check_box_on_24"><path clip-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 001.748 1.748C5.04 22 6.16 22 8.4 22h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 001.748-1.748C22 18.96 22 17.84 22 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 00-1.748-1.748C18.96 2 17.84 2 15.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 00-1.748 1.748zm15.771 5.023a1 1 0 00-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 00-1.414 1.414l3.5 3.5a1 1 0 001.414 0z" fill="currentColor" fill-rule="evenodd" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24CheckBoxOn = function Icon24CheckBoxOn(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24CheckBoxOn.mountIcon = mountIcon;
var _default = Icon24CheckBoxOn;
exports.default = _default;

});

var Icon24CheckboxOn = /*@__PURE__*/getDefaultExportFromCjs(check_box_on$1);

var check_box_off$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'check_box_off_24';
var content = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check_box_off_24"><path d="M16.872 2c1.783 0 2.43.186 3.082.534.651.349 1.163.86 1.512 1.512S22 5.345 22 7.128v9.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 01-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534s-1.163-.86-1.512-1.512C2.186 19.302 2 18.655 2 16.872V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 011.512-1.512C4.698 2.186 5.345 2 7.128 2zm.564 2H6.564c-.892 0-1.215.093-1.54.267-.327.174-.583.43-.757.756-.174.326-.267.65-.267 1.54v10.873c0 .892.093 1.215.267 1.54.174.327.43.583.756.757.326.174.65.267 1.54.267h10.873c.892 0 1.215-.093 1.54-.267.327-.174.583-.43.757-.756.174-.326.267-.65.267-1.54V6.563c0-.892-.093-1.215-.267-1.54a1.817 1.817 0 00-.756-.757c-.326-.174-.65-.267-1.54-.267z" fill="currentColor" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24CheckBoxOff = function Icon24CheckBoxOff(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24CheckBoxOff.mountIcon = mountIcon;
var _default = Icon24CheckBoxOff;
exports.default = _default;

});

var Icon24CheckboxOff = /*@__PURE__*/getDefaultExportFromCjs(check_box_off$1);

var Checkbox = function Checkbox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      getRef = _ref.getRef,
      top = _ref.top,
      bottom = _ref.bottom,
      sizeY = _ref.sizeY,
      restProps = objectWithoutProperties(_ref, ["children", "className", "style", "getRootRef", "getRef", "top", "bottom", "sizeY"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Tappable$1, {
    Component: "label",
    className: classNames(getClassname('Checkbox', platform), className, "Checkbox--sizeY-".concat(sizeY)),
    style: style,
    disabled: restProps.disabled,
    activeEffectDelay: platform === IOS ? 100 : ACTIVE_EFFECT_DELAY,
    getRootRef: getRootRef
  }, /*#__PURE__*/react.createElement("input", _extends_1({}, restProps, {
    type: "checkbox",
    className: "Checkbox__input",
    ref: getRef
  })), /*#__PURE__*/react.createElement("div", {
    className: "Checkbox__container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Checkbox__icon Checkbox__iconOn"
  }, sizeY === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Icon20CheckboxOn, null) : /*#__PURE__*/react.createElement(Icon24CheckboxOn, null)), /*#__PURE__*/react.createElement("div", {
    className: "Checkbox__icon Checkbox__iconOff"
  }, sizeY === SizeType.COMPACT ? /*#__PURE__*/react.createElement(Icon20CheckboxOff, null) : /*#__PURE__*/react.createElement(Icon24CheckboxOff, null)), /*#__PURE__*/react.createElement("div", {
    className: "Checkbox__content"
  }, children)));
};
var Checkbox$1 = withAdaptivity(Checkbox, {
  sizeY: true
});

var chevron_back = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 20 28';
var id = 'chevron_back_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 28" id="chevron_back_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v28H0z" /><path d="M4.56 12.94L13 4.5a1.414 1.414 0 012 2L7.5 14l7.5 7.5a1.414 1.414 0 01-2 2l-8.44-8.44a1.5 1.5 0 010-2.12z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon28ChevronBack = function Icon28ChevronBack(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28ChevronBack.mountIcon = mountIcon;
var _default = Icon28ChevronBack;
exports.default = _default;

});

var Icon28ChevronBack = /*@__PURE__*/getDefaultExportFromCjs(chevron_back);

var arrow_left_outline = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 28 28';
var id = 'arrow_left_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="arrow_left_outline_28"><g fill="none" fill-rule="evenodd"><path d="M28 0H0v28h28z" /><path d="M12.293 6.293a1 1 0 011.414 1.414L8.414 13H22a1 1 0 01.993.883L23 14a1 1 0 01-1 1H8.414l5.293 5.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0l-7-7-.073-.082A1.005 1.005 0 015 14l.004.09A1.006 1.006 0 015 14.02V14a1.02 1.02 0 01.125-.484.878.878 0 01.071-.111.999.999 0 01.097-.112l-.08.09c.025-.031.051-.062.08-.09z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon28ArrowLeftOutline = function Icon28ArrowLeftOutline(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28ArrowLeftOutline.mountIcon = mountIcon;
var _default = Icon28ArrowLeftOutline;
exports.default = _default;

});

var Icon28ArrowLeftOutline = /*@__PURE__*/getDefaultExportFromCjs(arrow_left_outline);

var PanelHeaderBack = function PanelHeaderBack(props) {
  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(PanelHeaderButton, props, platform === ANDROID ? /*#__PURE__*/react.createElement(Icon28ArrowLeftOutline, null) : /*#__PURE__*/react.createElement(Icon28ChevronBack, null));
};

var PanelHeaderBack$1 = /*#__PURE__*/react.memo(PanelHeaderBack);

export { ActionSheet$1 as ActionSheet, ActionSheetItem, Avatar, Button$1 as Button, Caption, Card, CardGrid, Cell$1 as Cell, CellButton$1 as CellButton, Checkbox$1 as Checkbox, Div, File, FixedLayout$1 as FixedLayout, FormLayout, Group$1 as Group, Header, Headline, IOS, Input$1 as Input, Link, List, Panel$1 as Panel, PanelHeader$1 as PanelHeader, PanelHeaderBack$1 as PanelHeaderBack, Placeholder, Progress, Root$1 as Root, Search$1 as Search, Separator$1 as Separator, SimpleCell$1 as SimpleCell, Spinner$1 as Spinner, Tappable$1 as Tappable, Text, Textarea$1 as Textarea, View$1 as View, classNames, getClassname as getClassName, platform, withPlatform };
//# sourceMappingURL=vkui.js.map
