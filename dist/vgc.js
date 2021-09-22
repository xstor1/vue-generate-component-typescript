#! /usr/bin/env node
"use strict";

var _commandLineArgs = _interopRequireDefault(require("command-line-args"));

var _swig = _interopRequireDefault(require("swig"));

var _path = _interopRequireDefault(require("path"));

var _TemplateFactory = _interopRequireDefault(require("./TemplateFactory"));

var _fs = _interopRequireDefault(require("fs"));

var _config = _interopRequireDefault(require("./config/config"));

var _cliOptions = _interopRequireDefault(require("./config/cli-options"));

var _swigFilters = _interopRequireDefault(require("./config/swig-filters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cli = (0, _commandLineArgs["default"])(_cliOptions["default"]);
(0, _swigFilters["default"])(_swig["default"]);
var options = cli.parse().options;
/* ===============
 Ask for help
 =============== */

if (options.help) {
  console.log(cli.getUsage(cli));
}
/* ===============
 Set the file extensions
 =============== */


if (options.html || options.style) {
  var configData = _config["default"].getConfigFile();

  configData.filesType.html = options.html ? options.html : configData.filesType.html;
  configData.filesType.style = options.style ? options.style : configData.filesType.style;

  _config["default"].updateConfigFile(configData);
}

_TemplateFactory["default"].createTemplateFor(options);