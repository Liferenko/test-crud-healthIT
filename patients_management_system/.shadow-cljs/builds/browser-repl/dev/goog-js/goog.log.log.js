["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/log/log.js"],"~:js","goog.provide(\"goog.log\");\ngoog.provide(\"goog.log.Level\");\ngoog.provide(\"goog.log.LogRecord\");\ngoog.provide(\"goog.log.Logger\");\ngoog.require(\"goog.debug\");\ngoog.require(\"goog.debug.LogManager\");\ngoog.require(\"goog.debug.LogRecord\");\ngoog.require(\"goog.debug.Logger\");\ngoog.log.ENABLED = goog.define(\"goog.log.ENABLED\", goog.debug.LOGGING_ENABLED);\ngoog.log.ROOT_LOGGER_NAME = goog.debug.Logger.ROOT_LOGGER_NAME;\ngoog.log.Logger = goog.debug.Logger;\ngoog.log.Level = goog.debug.Logger.Level;\ngoog.log.LogRecord = goog.debug.LogRecord;\ngoog.log.getLogger = function(name, opt_level) {\n  if (goog.log.ENABLED) {\n    var logger = goog.debug.LogManager.getLogger(name);\n    if (opt_level && logger) {\n      logger.setLevel(opt_level);\n    }\n    return logger;\n  } else {\n    return null;\n  }\n};\ngoog.log.addHandler = function(logger, handler) {\n  if (goog.log.ENABLED && logger) {\n    logger.addHandler(handler);\n  }\n};\ngoog.log.removeHandler = function(logger, handler) {\n  if (goog.log.ENABLED && logger) {\n    return logger.removeHandler(handler);\n  } else {\n    return false;\n  }\n};\ngoog.log.log = function(logger, level, msg, opt_exception) {\n  if (goog.log.ENABLED && logger) {\n    logger.log(level, msg, opt_exception);\n  }\n};\ngoog.log.error = function(logger, msg, opt_exception) {\n  if (goog.log.ENABLED && logger) {\n    logger.severe(msg, opt_exception);\n  }\n};\ngoog.log.warning = function(logger, msg, opt_exception) {\n  if (goog.log.ENABLED && logger) {\n    logger.warning(msg, opt_exception);\n  }\n};\ngoog.log.info = function(logger, msg, opt_exception) {\n  if (goog.log.ENABLED && logger) {\n    logger.info(msg, opt_exception);\n  }\n};\ngoog.log.fine = function(logger, msg, opt_exception) {\n  if (goog.log.ENABLED && logger) {\n    logger.fine(msg, opt_exception);\n  }\n};\n","~:source","// Copyright 2013 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Basic strippable logging definitions.\n * @see http://go/closurelogging\n *\n * @author johnlenz@google.com (John Lenz)\n */\n\ngoog.provide('goog.log');\ngoog.provide('goog.log.Level');\ngoog.provide('goog.log.LogRecord');\ngoog.provide('goog.log.Logger');\n\ngoog.require('goog.debug');\ngoog.require('goog.debug.LogManager');\ngoog.require('goog.debug.LogRecord');\ngoog.require('goog.debug.Logger');\n\n\n/** @define {boolean} Whether logging is enabled. */\ngoog.log.ENABLED = goog.define('goog.log.ENABLED', goog.debug.LOGGING_ENABLED);\n\n\n/** @const {string} */\ngoog.log.ROOT_LOGGER_NAME = goog.debug.Logger.ROOT_LOGGER_NAME;\n\n\n\n/**\n * @constructor\n * @final\n */\ngoog.log.Logger = goog.debug.Logger;\n\n\n\n/**\n * @constructor\n * @final\n */\ngoog.log.Level = goog.debug.Logger.Level;\n\n\n\n/**\n * @constructor\n * @final\n */\ngoog.log.LogRecord = goog.debug.LogRecord;\n\n\n/**\n * Finds or creates a logger for a named subsystem. If a logger has already been\n * created with the given name it is returned. Otherwise a new logger is\n * created. If a new logger is created its log level will be configured based\n * on the goog.debug.LogManager configuration and it will configured to also\n * send logging output to its parent's handlers.\n * @see goog.debug.LogManager\n *\n * @param {string} name A name for the logger. This should be a dot-separated\n *     name and should normally be based on the package name or class name of\n *     the subsystem, such as goog.net.BrowserChannel.\n * @param {goog.log.Level=} opt_level If provided, override the\n *     default logging level with the provided level.\n * @return {goog.log.Logger} The named logger or null if logging is disabled.\n */\ngoog.log.getLogger = function(name, opt_level) {\n  if (goog.log.ENABLED) {\n    var logger = goog.debug.LogManager.getLogger(name);\n    if (opt_level && logger) {\n      logger.setLevel(opt_level);\n    }\n    return logger;\n  } else {\n    return null;\n  }\n};\n\n\n// TODO(johnlenz): try to tighten the types to these functions.\n/**\n * Adds a handler to the logger. This doesn't use the event system because\n * we want to be able to add logging to the event system.\n * @param {goog.log.Logger} logger\n * @param {Function} handler Handler function to add.\n */\ngoog.log.addHandler = function(logger, handler) {\n  if (goog.log.ENABLED && logger) {\n    logger.addHandler(handler);\n  }\n};\n\n\n/**\n * Removes a handler from the logger. This doesn't use the event system because\n * we want to be able to add logging to the event system.\n * @param {goog.log.Logger} logger\n * @param {Function} handler Handler function to remove.\n * @return {boolean} Whether the handler was removed.\n */\ngoog.log.removeHandler = function(logger, handler) {\n  if (goog.log.ENABLED && logger) {\n    return logger.removeHandler(handler);\n  } else {\n    return false;\n  }\n};\n\n\n/**\n * Logs a message. If the logger is currently enabled for the\n * given message level then the given message is forwarded to all the\n * registered output Handler objects.\n * @param {goog.log.Logger} logger\n * @param {goog.log.Level} level One of the level identifiers.\n * @param {goog.debug.Loggable} msg The message to log.\n * @param {Error|Object=} opt_exception An exception associated with the\n *     message.\n */\ngoog.log.log = function(logger, level, msg, opt_exception) {\n  if (goog.log.ENABLED && logger) {\n    logger.log(level, msg, opt_exception);\n  }\n};\n\n\n/**\n * Logs a message at the Level.SEVERE level.\n * If the logger is currently enabled for the given message level then the\n * given message is forwarded to all the registered output Handler objects.\n * @param {goog.log.Logger} logger\n * @param {goog.debug.Loggable} msg The message to log.\n * @param {Error=} opt_exception An exception associated with the message.\n */\ngoog.log.error = function(logger, msg, opt_exception) {\n  if (goog.log.ENABLED && logger) {\n    logger.severe(msg, opt_exception);\n  }\n};\n\n\n/**\n * Logs a message at the Level.WARNING level.\n * If the logger is currently enabled for the given message level then the\n * given message is forwarded to all the registered output Handler objects.\n * @param {goog.log.Logger} logger\n * @param {goog.debug.Loggable} msg The message to log.\n * @param {Error=} opt_exception An exception associated with the message.\n */\ngoog.log.warning = function(logger, msg, opt_exception) {\n  if (goog.log.ENABLED && logger) {\n    logger.warning(msg, opt_exception);\n  }\n};\n\n\n/**\n * Logs a message at the Level.INFO level.\n * If the logger is currently enabled for the given message level then the\n * given message is forwarded to all the registered output Handler objects.\n * @param {goog.log.Logger} logger\n * @param {goog.debug.Loggable} msg The message to log.\n * @param {Error=} opt_exception An exception associated with the message.\n */\ngoog.log.info = function(logger, msg, opt_exception) {\n  if (goog.log.ENABLED && logger) {\n    logger.info(msg, opt_exception);\n  }\n};\n\n\n/**\n * Logs a message at the Level.Fine level.\n * If the logger is currently enabled for the given message level then the\n * given message is forwarded to all the registered output Handler objects.\n * @param {goog.log.Logger} logger\n * @param {goog.debug.Loggable} msg The message to log.\n * @param {Error=} opt_exception An exception associated with the message.\n */\ngoog.log.fine = function(logger, msg, opt_exception) {\n  if (goog.log.ENABLED && logger) {\n    logger.fine(msg, opt_exception);\n  }\n};\n","~:compiled-at",1604243297037,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.log.log.js\",\n\"lineCount\":62,\n\"mappings\":\"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\",\n\"sources\":[\"goog/log/log.js\"],\n\"sourcesContent\":[\"// Copyright 2013 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Basic strippable logging definitions.\\n * @see http://go/closurelogging\\n *\\n * @author johnlenz@google.com (John Lenz)\\n */\\n\\ngoog.provide('goog.log');\\ngoog.provide('goog.log.Level');\\ngoog.provide('goog.log.LogRecord');\\ngoog.provide('goog.log.Logger');\\n\\ngoog.require('goog.debug');\\ngoog.require('goog.debug.LogManager');\\ngoog.require('goog.debug.LogRecord');\\ngoog.require('goog.debug.Logger');\\n\\n\\n/** @define {boolean} Whether logging is enabled. */\\ngoog.log.ENABLED = goog.define('goog.log.ENABLED', goog.debug.LOGGING_ENABLED);\\n\\n\\n/** @const {string} */\\ngoog.log.ROOT_LOGGER_NAME = goog.debug.Logger.ROOT_LOGGER_NAME;\\n\\n\\n\\n/**\\n * @constructor\\n * @final\\n */\\ngoog.log.Logger = goog.debug.Logger;\\n\\n\\n\\n/**\\n * @constructor\\n * @final\\n */\\ngoog.log.Level = goog.debug.Logger.Level;\\n\\n\\n\\n/**\\n * @constructor\\n * @final\\n */\\ngoog.log.LogRecord = goog.debug.LogRecord;\\n\\n\\n/**\\n * Finds or creates a logger for a named subsystem. If a logger has already been\\n * created with the given name it is returned. Otherwise a new logger is\\n * created. If a new logger is created its log level will be configured based\\n * on the goog.debug.LogManager configuration and it will configured to also\\n * send logging output to its parent's handlers.\\n * @see goog.debug.LogManager\\n *\\n * @param {string} name A name for the logger. This should be a dot-separated\\n *     name and should normally be based on the package name or class name of\\n *     the subsystem, such as goog.net.BrowserChannel.\\n * @param {goog.log.Level=} opt_level If provided, override the\\n *     default logging level with the provided level.\\n * @return {goog.log.Logger} The named logger or null if logging is disabled.\\n */\\ngoog.log.getLogger = function(name, opt_level) {\\n  if (goog.log.ENABLED) {\\n    var logger = goog.debug.LogManager.getLogger(name);\\n    if (opt_level && logger) {\\n      logger.setLevel(opt_level);\\n    }\\n    return logger;\\n  } else {\\n    return null;\\n  }\\n};\\n\\n\\n// TODO(johnlenz): try to tighten the types to these functions.\\n/**\\n * Adds a handler to the logger. This doesn't use the event system because\\n * we want to be able to add logging to the event system.\\n * @param {goog.log.Logger} logger\\n * @param {Function} handler Handler function to add.\\n */\\ngoog.log.addHandler = function(logger, handler) {\\n  if (goog.log.ENABLED && logger) {\\n    logger.addHandler(handler);\\n  }\\n};\\n\\n\\n/**\\n * Removes a handler from the logger. This doesn't use the event system because\\n * we want to be able to add logging to the event system.\\n * @param {goog.log.Logger} logger\\n * @param {Function} handler Handler function to remove.\\n * @return {boolean} Whether the handler was removed.\\n */\\ngoog.log.removeHandler = function(logger, handler) {\\n  if (goog.log.ENABLED && logger) {\\n    return logger.removeHandler(handler);\\n  } else {\\n    return false;\\n  }\\n};\\n\\n\\n/**\\n * Logs a message. If the logger is currently enabled for the\\n * given message level then the given message is forwarded to all the\\n * registered output Handler objects.\\n * @param {goog.log.Logger} logger\\n * @param {goog.log.Level} level One of the level identifiers.\\n * @param {goog.debug.Loggable} msg The message to log.\\n * @param {Error|Object=} opt_exception An exception associated with the\\n *     message.\\n */\\ngoog.log.log = function(logger, level, msg, opt_exception) {\\n  if (goog.log.ENABLED && logger) {\\n    logger.log(level, msg, opt_exception);\\n  }\\n};\\n\\n\\n/**\\n * Logs a message at the Level.SEVERE level.\\n * If the logger is currently enabled for the given message level then the\\n * given message is forwarded to all the registered output Handler objects.\\n * @param {goog.log.Logger} logger\\n * @param {goog.debug.Loggable} msg The message to log.\\n * @param {Error=} opt_exception An exception associated with the message.\\n */\\ngoog.log.error = function(logger, msg, opt_exception) {\\n  if (goog.log.ENABLED && logger) {\\n    logger.severe(msg, opt_exception);\\n  }\\n};\\n\\n\\n/**\\n * Logs a message at the Level.WARNING level.\\n * If the logger is currently enabled for the given message level then the\\n * given message is forwarded to all the registered output Handler objects.\\n * @param {goog.log.Logger} logger\\n * @param {goog.debug.Loggable} msg The message to log.\\n * @param {Error=} opt_exception An exception associated with the message.\\n */\\ngoog.log.warning = function(logger, msg, opt_exception) {\\n  if (goog.log.ENABLED && logger) {\\n    logger.warning(msg, opt_exception);\\n  }\\n};\\n\\n\\n/**\\n * Logs a message at the Level.INFO level.\\n * If the logger is currently enabled for the given message level then the\\n * given message is forwarded to all the registered output Handler objects.\\n * @param {goog.log.Logger} logger\\n * @param {goog.debug.Loggable} msg The message to log.\\n * @param {Error=} opt_exception An exception associated with the message.\\n */\\ngoog.log.info = function(logger, msg, opt_exception) {\\n  if (goog.log.ENABLED && logger) {\\n    logger.info(msg, opt_exception);\\n  }\\n};\\n\\n\\n/**\\n * Logs a message at the Level.Fine level.\\n * If the logger is currently enabled for the given message level then the\\n * given message is forwarded to all the registered output Handler objects.\\n * @param {goog.log.Logger} logger\\n * @param {goog.debug.Loggable} msg The message to log.\\n * @param {Error=} opt_exception An exception associated with the message.\\n */\\ngoog.log.fine = function(logger, msg, opt_exception) {\\n  if (goog.log.ENABLED && logger) {\\n    logger.fine(msg, opt_exception);\\n  }\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"log\",\"ENABLED\",\"define\",\"debug\",\"LOGGING_ENABLED\",\"ROOT_LOGGER_NAME\",\"Logger\",\"Level\",\"LogRecord\",\"getLogger\",\"goog.log.getLogger\",\"name\",\"opt_level\",\"logger\",\"LogManager\",\"setLevel\",\"addHandler\",\"goog.log.addHandler\",\"handler\",\"removeHandler\",\"goog.log.removeHandler\",\"goog.log.log\",\"level\",\"msg\",\"opt_exception\",\"error\",\"goog.log.error\",\"severe\",\"warning\",\"goog.log.warning\",\"info\",\"goog.log.info\",\"fine\",\"goog.log.fine\"]\n}\n"]