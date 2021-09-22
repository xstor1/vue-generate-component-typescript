"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _swig = _interopRequireDefault(require("swig"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _config = _interopRequireDefault(require("./config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * TemplateGenerator
 */
var TemplateGenerator = /*#__PURE__*/function () {
  /**
   * Todo: Inject swig, fs and config to mock them in the future tests
   * @param options
   */
  function TemplateGenerator(options) {
    _classCallCheck(this, TemplateGenerator);

    this.TEMPLATES_DIR = "".concat(__dirname, "/blueprints");

    this._create(options);
  }
  /**
   *
   * @param options
   * @private
   */


  _createClass(TemplateGenerator, [{
    key: "_create",
    value: function _create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var name = options.name,
          type = options.type,
          actions = options.actions;

      var filesType = _config["default"].getConfigFile().filesType;

      if (options.isDir) {
        this._createDirectory(this._getDirPath(type), {
          name: name,
          actions: actions,
          filesType: filesType
        }, filesType);
      } else {
        var tpl = this._compileTpl(this._getSingleTpl(type), {
          name: name,
          actions: actions,
          filesType: filesType
        });

        this._createFile(name, type, filesType.script, tpl);
      }
    }
    /**
     *
     * @param file
     * @param data
     * @returns {*}
     * @private
     */

  }, {
    key: "_compileTpl",
    value: function _compileTpl(file, _ref) {
      var name = _ref.name,
          actions = _ref.actions,
          filesType = _ref.filesType;

      var compiled = _swig["default"].compileFile(file);

      return compiled({
        name: name,
        actions: actions,
        filesType: filesType
      });
    }
    /**
     *
     * @param name
     * @param fileType
     * @param type
     * @param tpl
     * @private
     */

  }, {
    key: "_createFile",
    value: function _createFile(name, type, fileType, tpl) {
      _fsExtra["default"].outputFile(this._createFilePath(name, type, fileType), tpl, function (err) {
        if (err) console.log(err);
      });
    }
    /**
     *
     * @param dirPath
     * @param fileType
     * @param data
     * @private
     */

  }, {
    key: "_createDirectory",
    value: function _createDirectory(dirPath, data, fileTypes) {
      var _this = this;

      _fsExtra["default"].readdir(dirPath, function (err, dir) {
        var name = data.name;

        var folder = _path["default"].join(process.cwd(), name);

        name = name.split('/')[name.split('/').length - 1];
        var filePath;
        dir.forEach(function (tempFile) {
          var compiled = _this._compileTpl("".concat(dirPath, "/").concat(tempFile), data);

          var fileName = _this._createFileName(tempFile, name, fileTypes);

          filePath = _path["default"].join(folder, fileName);

          _fsExtra["default"].outputFile(filePath, compiled, function (err) {
            if (err) console.log(err);
          });
        });
      });
    }
    /**
     *
     * @param tempFile
     * @param name
     * @param fileTypes
     * @returns {*}
     * @private
     */

  }, {
    key: "_createFileName",
    value: function _createFileName(tempFile, name, fileTypes) {
      var newName = tempFile.replace(/temp/, name);

      if (newName.indexOf('tpl') > -1) {
        newName = newName.replace(/tpl/, 'component').replace(/extension/, fileTypes.html);
      }

      if (newName.indexOf('sty') > -1) {
        newName = newName.replace(/sty/, 'component').replace(/extension/, fileTypes.style);
      }

      if (newName.indexOf('script') > -1) {
        newName = newName.replace(/script/, 'component').replace(/extension/, fileTypes.script);
      }

      if (newName.indexOf('spec') > -1) {
        newName = newName.replace(/extension/, fileTypes.spec);
      }

      return newName;
    }
    /**
     *
     * @param type
     * @param extension
     * @returns {*}
     * @private
     */

  }, {
    key: "_getSingleTpl",
    value: function _getSingleTpl(type) {
      var extension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ts';
      type = type.toLowerCase();

      if (type === 'single') {
        return "".concat(this.TEMPLATES_DIR, "/").concat(type, "/temp.vue");
      }

      return "".concat(this.TEMPLATES_DIR, "/").concat(type, "/temp.").concat(type, ".").concat(extension);
    }
    /**
     *
     * @param type
     * @returns {*}
     * @private
     */

  }, {
    key: "_getDirPath",
    value: function _getDirPath(type) {
      return "".concat(this.TEMPLATES_DIR, "/").concat(type);
    }
    /**
     *
     * @param name
     * @param type
     * @param fileType
     * @returns {*}
     * @private
     */

  }, {
    key: "_createFilePath",
    value: function _createFilePath(name, type) {
      var fileType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ts";
      type = type.toLowerCase();

      if (type === 'single') {
        return _path["default"].join(process.cwd(), "".concat(name, ".vue"));
      }

      return _path["default"].join(process.cwd(), "".concat(name, ".").concat(type, ".").concat(fileType));
    }
  }]);

  return TemplateGenerator;
}();

var _default = TemplateGenerator;
exports["default"] = _default;