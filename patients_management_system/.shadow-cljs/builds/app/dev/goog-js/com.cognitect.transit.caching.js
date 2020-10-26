["^ ","~:resource-id",["~:shadow.build.classpath/resource","com/cognitect/transit/caching.js"],"~:js","goog.provide(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.delimiters\");\ngoog.scope(function() {\n  var caching = com.cognitect.transit.caching, d = com.cognitect.transit.delimiters;\n  caching.MIN_SIZE_CACHEABLE = 3;\n  caching.BASE_CHAR_IDX = 48;\n  caching.CACHE_CODE_DIGITS = 44;\n  caching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS * caching.CACHE_CODE_DIGITS;\n  caching.MAX_CACHE_SIZE = 4096;\n  caching.isCacheable = function(string, asMapKey) {\n    if (string.length > caching.MIN_SIZE_CACHEABLE) {\n      if (asMapKey) {\n        return true;\n      } else {\n        var c0 = string.charAt(0), c1 = string.charAt(1);\n        if (c0 === d.ESC) {\n          return c1 === \":\" || c1 === \"$\" || c1 === \"#\";\n        } else {\n          return false;\n        }\n      }\n    } else {\n      return false;\n    }\n  };\n  caching.idxToCode = function(idx) {\n    var hi = Math.floor(idx / caching.CACHE_CODE_DIGITS), lo = idx % caching.CACHE_CODE_DIGITS, loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX);\n    if (hi === 0) {\n      return d.SUB + loc;\n    } else {\n      return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;\n    }\n  };\n  caching.WriteCache = function() {\n    this.idx = 0;\n    this.gen = 0;\n    this.cacheSize = 0;\n    this.cache = {};\n  };\n  caching.WriteCache.prototype.write = function(string, asMapKey) {\n    if (caching.isCacheable(string, asMapKey)) {\n      if (this.cacheSize === caching.MAX_CACHE_SIZE) {\n        this.clear();\n        this.gen = 0;\n        this.cache = {};\n      } else {\n        if (this.idx === caching.MAX_CACHE_ENTRIES) {\n          this.clear();\n        }\n      }\n      var entry = this.cache[string];\n      if (entry == null) {\n        this.cache[string] = [caching.idxToCode(this.idx), this.gen];\n        this.idx++;\n        return string;\n      } else {\n        if (entry[1] != this.gen) {\n          entry[1] = this.gen;\n          entry[0] = caching.idxToCode(this.idx);\n          this.idx++;\n          return string;\n        } else {\n          return entry[0];\n        }\n      }\n    } else {\n      return string;\n    }\n  };\n  caching.WriteCache.prototype.clear = function Transit$WriteCache() {\n    this.idx = 0;\n    this.gen++;\n  };\n  caching.writeCache = function() {\n    return new caching.WriteCache;\n  };\n  caching.isCacheCode = function(string) {\n    return string.charAt(0) === d.SUB && string.charAt(1) !== \" \";\n  };\n  caching.codeToIdx = function(code) {\n    if (code.length === 2) {\n      return code.charCodeAt(1) - caching.BASE_CHAR_IDX;\n    } else {\n      var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS, lo = code.charCodeAt(2) - caching.BASE_CHAR_IDX;\n      return hi + lo;\n    }\n  };\n  caching.ReadCache = function Transit$ReadCache() {\n    this.idx = 0;\n    this.cache = [];\n  };\n  caching.ReadCache.prototype.write = function(obj, asMapKey) {\n    if (this.idx == caching.MAX_CACHE_ENTRIES) {\n      this.idx = 0;\n    }\n    this.cache[this.idx] = obj;\n    this.idx++;\n    return obj;\n  };\n  caching.ReadCache.prototype.read = function(string, asMapKey) {\n    return this.cache[caching.codeToIdx(string)];\n  };\n  caching.ReadCache.prototype.clear = function() {\n    this.idx = 0;\n  };\n  caching.readCache = function() {\n    return new caching.ReadCache;\n  };\n});\n","~:source","// Copyright 2014 Cognitect. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.delimiters\");\n\ngoog.scope(function() {\n\nvar caching = com.cognitect.transit.caching,\n    d       = com.cognitect.transit.delimiters;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MIN_SIZE_CACHEABLE = 3;\n\n/**\n * @const\n * @type {number}\n */\ncaching.BASE_CHAR_IDX = 48;\n\n/**\n * @const\n * @type {number}\n */\ncaching.CACHE_CODE_DIGITS = 44;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS*caching.CACHE_CODE_DIGITS;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MAX_CACHE_SIZE = 4096;\n\ncaching.isCacheable = function(string, asMapKey) {\n    if(string.length > caching.MIN_SIZE_CACHEABLE) {\n        if(asMapKey) {\n            return true;\n        } else {\n            var c0 = string.charAt(0),\n                c1 = string.charAt(1);\n            if(c0 === d.ESC) {\n                return c1 === \":\" || c1 === \"$\" || c1 === \"#\";\n            } else {\n                return false;\n            }\n        }\n    } else {\n        return false;\n    }\n};\n\n// =============================================================================\n// WriteCache\n\ncaching.idxToCode = function(idx) {\n    var hi  = Math.floor(idx / caching.CACHE_CODE_DIGITS),\n        lo  = idx % caching.CACHE_CODE_DIGITS,\n        loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX)\n    if(hi === 0) {\n        return d.SUB + loc;\n    } else {\n        return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;\n    }\n};\n\n/**\n * @constructor\n */\ncaching.WriteCache = function() {\n    this.idx = 0;\n    this.gen = 0;\n    this.cacheSize = 0;\n    this.cache = {};\n};\n\ncaching.WriteCache.prototype.write = function(string, asMapKey) {\n    if(caching.isCacheable(string, asMapKey)) {\n        if(this.cacheSize === caching.MAX_CACHE_SIZE) {\n            this.clear();\n            this.gen = 0;\n            this.cache = {};\n        } else if(this.idx === caching.MAX_CACHE_ENTRIES) {\n            this.clear();\n        }\n        var entry = this.cache[string];\n        if(entry == null) {\n            this.cache[string] = [caching.idxToCode(this.idx), this.gen];\n            this.idx++;\n            return string;\n        } else if(entry[1] != this.gen) {\n            entry[1] = this.gen;\n            entry[0] = caching.idxToCode(this.idx);\n            this.idx++;\n            return string;\n        } else {\n            return entry[0];\n        }\n    } else {\n        return string;\n    }\n};\n\ncaching.WriteCache.prototype.clear = function Transit$WriteCache() {\n    this.idx = 0;\n    this.gen++;\n};\n\ncaching.writeCache = function() {\n    return new caching.WriteCache();\n};\n\n// =============================================================================\n// ReadCache\n\ncaching.isCacheCode = function(string) {\n    return (string.charAt(0) === d.SUB) && (string.charAt(1) !== \" \");\n};\n\ncaching.codeToIdx = function(code) {\n    if(code.length === 2) {\n        return code.charCodeAt(1) - caching.BASE_CHAR_IDX;        \n    } else {\n        var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS,\n            lo = (code.charCodeAt(2) - caching.BASE_CHAR_IDX);\n        return hi + lo; \n    }\n};\n\n/**\n * @constructor\n */\ncaching.ReadCache = function Transit$ReadCache() {\n    this.idx = 0;\n    this.cache = [];\n};\n\ncaching.ReadCache.prototype.write = function(obj, asMapKey) {\n    if(this.idx == caching.MAX_CACHE_ENTRIES) {\n        this.idx = 0;\n    }\n    this.cache[this.idx] = obj;\n    this.idx++;\n    return obj;\n};\n\ncaching.ReadCache.prototype.read = function(string, asMapKey) {\n    return this.cache[caching.codeToIdx(string)];\n};\n\ncaching.ReadCache.prototype.clear = function() {\n    this.idx = 0;\n};\n\ncaching.readCache = function() {\n    return new caching.ReadCache();\n};\n\n});    \n","~:compiled-at",1603692188345,"~:source-map-json","{\n\"version\":3,\n\"file\":\"com.cognitect.transit.caching.js\",\n\"lineCount\":110,\n\"mappings\":\"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\",\n\"sources\":[\"com/cognitect/transit/caching.js\"],\n\"sourcesContent\":[\"// Copyright 2014 Cognitect. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide(\\\"com.cognitect.transit.caching\\\");\\ngoog.require(\\\"com.cognitect.transit.delimiters\\\");\\n\\ngoog.scope(function() {\\n\\nvar caching = com.cognitect.transit.caching,\\n    d       = com.cognitect.transit.delimiters;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.MIN_SIZE_CACHEABLE = 3;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.BASE_CHAR_IDX = 48;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.CACHE_CODE_DIGITS = 44;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS*caching.CACHE_CODE_DIGITS;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.MAX_CACHE_SIZE = 4096;\\n\\ncaching.isCacheable = function(string, asMapKey) {\\n    if(string.length > caching.MIN_SIZE_CACHEABLE) {\\n        if(asMapKey) {\\n            return true;\\n        } else {\\n            var c0 = string.charAt(0),\\n                c1 = string.charAt(1);\\n            if(c0 === d.ESC) {\\n                return c1 === \\\":\\\" || c1 === \\\"$\\\" || c1 === \\\"#\\\";\\n            } else {\\n                return false;\\n            }\\n        }\\n    } else {\\n        return false;\\n    }\\n};\\n\\n// =============================================================================\\n// WriteCache\\n\\ncaching.idxToCode = function(idx) {\\n    var hi  = Math.floor(idx / caching.CACHE_CODE_DIGITS),\\n        lo  = idx % caching.CACHE_CODE_DIGITS,\\n        loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX)\\n    if(hi === 0) {\\n        return d.SUB + loc;\\n    } else {\\n        return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;\\n    }\\n};\\n\\n/**\\n * @constructor\\n */\\ncaching.WriteCache = function() {\\n    this.idx = 0;\\n    this.gen = 0;\\n    this.cacheSize = 0;\\n    this.cache = {};\\n};\\n\\ncaching.WriteCache.prototype.write = function(string, asMapKey) {\\n    if(caching.isCacheable(string, asMapKey)) {\\n        if(this.cacheSize === caching.MAX_CACHE_SIZE) {\\n            this.clear();\\n            this.gen = 0;\\n            this.cache = {};\\n        } else if(this.idx === caching.MAX_CACHE_ENTRIES) {\\n            this.clear();\\n        }\\n        var entry = this.cache[string];\\n        if(entry == null) {\\n            this.cache[string] = [caching.idxToCode(this.idx), this.gen];\\n            this.idx++;\\n            return string;\\n        } else if(entry[1] != this.gen) {\\n            entry[1] = this.gen;\\n            entry[0] = caching.idxToCode(this.idx);\\n            this.idx++;\\n            return string;\\n        } else {\\n            return entry[0];\\n        }\\n    } else {\\n        return string;\\n    }\\n};\\n\\ncaching.WriteCache.prototype.clear = function Transit$WriteCache() {\\n    this.idx = 0;\\n    this.gen++;\\n};\\n\\ncaching.writeCache = function() {\\n    return new caching.WriteCache();\\n};\\n\\n// =============================================================================\\n// ReadCache\\n\\ncaching.isCacheCode = function(string) {\\n    return (string.charAt(0) === d.SUB) && (string.charAt(1) !== \\\" \\\");\\n};\\n\\ncaching.codeToIdx = function(code) {\\n    if(code.length === 2) {\\n        return code.charCodeAt(1) - caching.BASE_CHAR_IDX;        \\n    } else {\\n        var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS,\\n            lo = (code.charCodeAt(2) - caching.BASE_CHAR_IDX);\\n        return hi + lo; \\n    }\\n};\\n\\n/**\\n * @constructor\\n */\\ncaching.ReadCache = function Transit$ReadCache() {\\n    this.idx = 0;\\n    this.cache = [];\\n};\\n\\ncaching.ReadCache.prototype.write = function(obj, asMapKey) {\\n    if(this.idx == caching.MAX_CACHE_ENTRIES) {\\n        this.idx = 0;\\n    }\\n    this.cache[this.idx] = obj;\\n    this.idx++;\\n    return obj;\\n};\\n\\ncaching.ReadCache.prototype.read = function(string, asMapKey) {\\n    return this.cache[caching.codeToIdx(string)];\\n};\\n\\ncaching.ReadCache.prototype.clear = function() {\\n    this.idx = 0;\\n};\\n\\ncaching.readCache = function() {\\n    return new caching.ReadCache();\\n};\\n\\n});    \\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"scope\",\"caching\",\"com\",\"cognitect\",\"transit\",\"d\",\"delimiters\",\"MIN_SIZE_CACHEABLE\",\"BASE_CHAR_IDX\",\"CACHE_CODE_DIGITS\",\"MAX_CACHE_ENTRIES\",\"MAX_CACHE_SIZE\",\"isCacheable\",\"caching.isCacheable\",\"string\",\"asMapKey\",\"length\",\"c0\",\"charAt\",\"c1\",\"ESC\",\"idxToCode\",\"caching.idxToCode\",\"idx\",\"hi\",\"Math\",\"floor\",\"lo\",\"loc\",\"String\",\"fromCharCode\",\"SUB\",\"WriteCache\",\"caching.WriteCache\",\"gen\",\"cacheSize\",\"cache\",\"prototype\",\"write\",\"caching.WriteCache.prototype.write\",\"clear\",\"entry\",\"caching.WriteCache.prototype.clear\",\"Transit$WriteCache\",\"writeCache\",\"caching.writeCache\",\"isCacheCode\",\"caching.isCacheCode\",\"codeToIdx\",\"caching.codeToIdx\",\"code\",\"charCodeAt\",\"ReadCache\",\"caching.ReadCache\",\"Transit$ReadCache\",\"caching.ReadCache.prototype.write\",\"obj\",\"read\",\"caching.ReadCache.prototype.read\",\"caching.ReadCache.prototype.clear\",\"readCache\",\"caching.readCache\"]\n}\n"]