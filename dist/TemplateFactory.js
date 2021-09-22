"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ComponentTpl = _interopRequireDefault(require("./templates/ComponentTpl"));

var _SingleTpl = _interopRequireDefault(require("./templates/SingleTpl"));

var _TemplateGenerator = _interopRequireDefault(require("./TemplateGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * TemplateFactory
 */
var TemplateFactory = /*#__PURE__*/function () {
  function TemplateFactory() {
    _classCallCheck(this, TemplateFactory);
  }

  _createClass(TemplateFactory, null, [{
    key: "createTemplateFor",
    value:
    /**
     * Factory to generate the templates
     * @param cli options
     */
    function createTemplateFor(cli) {
      /**
       * Generate Vue 3 component
       */
      if (cli.component) {
        return new _TemplateGenerator["default"](new _ComponentTpl["default"](cli.component));
      }
      /**
       * Generate Vue 3 single file component
       */


      if (cli.single) {
        return new _TemplateGenerator["default"](new _SingleTpl["default"](cli.single, cli.folder));
      }
    }
  }]);

  return TemplateFactory;
}();

var _default = TemplateFactory;
exports["default"] = _default;