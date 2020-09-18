import { c as createCommonjsModule } from './_commonjsHelpers-6f5dde0d.js';
import { r as react } from './index-df564204.js';
import { b as browserSprite } from './browser-sprite-1d803565.js';

var sprite = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSpriteSymbol = addSpriteSymbol;
exports.useIsomorphicLayoutEffect = void 0;

var _browserSprite = _interopRequireDefault(browserSprite);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var browserSprite$1;

if (canUseDOM) {
  var spriteId = '__SVG_SPRITE_NODE__';
  browserSprite$1 = new _browserSprite.default({
    attrs: {
      id: spriteId
    }
  });

  var mount = function mount() {
    var spriteNode = document.getElementById(spriteId);

    if (spriteNode) {
      browserSprite$1.attach(spriteNode);
    } else {
      browserSprite$1.mount();
    }
  };

  if (document.querySelector('body')) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
} else {
  browserSprite$1 = null;
}

function addSpriteSymbol(symbol) {
  if (browserSprite$1) {
    browserSprite$1.add(symbol);
  }
}

var useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;

});

export { sprite as s };
//# sourceMappingURL=sprite-16ff1c17.js.map
