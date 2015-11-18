System.config({
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
	"github:*": "jspm_packages/github/*",
	"npm:*": "jspm_packages/npm/*"
  },

  map: {
	"@reactivex/rxjs": "npm:@reactivex/rxjs@5.0.0-alpha.7",
	"angular2": "npm:angular2@2.0.0-alpha.46",
	"babel": "npm:babel-core@6.1.21",
	"babel-runtime": "npm:babel-runtime@6.1.18",
	"core-js": "npm:core-js@1.2.6",
	"font-awesome": "npm:font-awesome@4.4.0",
	"lodash": "npm:lodash@3.10.1",
	"normalize.css": "github:necolas/normalize.css@3.0.3",
	"reflect-metadata": "npm:reflect-metadata@0.1.2",
	"traceur": "github:jmcriffey/bower-traceur@0.0.92",
	"traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
	"zone.js": "npm:zone.js@0.5.8",
	"github:jspm/nodelibs-assert@0.1.0": {
	  "assert": "npm:assert@1.3.0"
	},
	"github:jspm/nodelibs-buffer@0.1.0": {
	  "buffer": "npm:buffer@3.5.2"
	},
	"github:jspm/nodelibs-constants@0.1.0": {
	  "constants-browserify": "npm:constants-browserify@0.0.1"
	},
	"github:jspm/nodelibs-crypto@0.1.0": {
	  "crypto-browserify": "npm:crypto-browserify@3.11.0"
	},
	"github:jspm/nodelibs-events@0.1.1": {
	  "events": "npm:events@1.0.2"
	},
	"github:jspm/nodelibs-http@1.7.1": {
	  "Base64": "npm:Base64@0.2.1",
	  "events": "github:jspm/nodelibs-events@0.1.1",
	  "inherits": "npm:inherits@2.0.1",
	  "stream": "github:jspm/nodelibs-stream@0.1.0",
	  "url": "github:jspm/nodelibs-url@0.1.0",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"github:jspm/nodelibs-net@0.1.2": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "http": "github:jspm/nodelibs-http@1.7.1",
	  "net": "github:jspm/nodelibs-net@0.1.2",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "stream": "github:jspm/nodelibs-stream@0.1.0",
	  "timers": "github:jspm/nodelibs-timers@0.1.0",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"github:jspm/nodelibs-path@0.1.0": {
	  "path-browserify": "npm:path-browserify@0.0.0"
	},
	"github:jspm/nodelibs-process@0.1.2": {
	  "process": "npm:process@0.11.2"
	},
	"github:jspm/nodelibs-querystring@0.1.0": {
	  "querystring": "npm:querystring@0.2.0"
	},
	"github:jspm/nodelibs-stream@0.1.0": {
	  "stream-browserify": "npm:stream-browserify@1.0.0"
	},
	"github:jspm/nodelibs-string_decoder@0.1.0": {
	  "string_decoder": "npm:string_decoder@0.10.31"
	},
	"github:jspm/nodelibs-timers@0.1.0": {
	  "timers-browserify": "npm:timers-browserify@1.4.1"
	},
	"github:jspm/nodelibs-tty@0.1.0": {
	  "tty-browserify": "npm:tty-browserify@0.0.0"
	},
	"github:jspm/nodelibs-url@0.1.0": {
	  "url": "npm:url@0.10.3"
	},
	"github:jspm/nodelibs-util@0.1.0": {
	  "util": "npm:util@0.10.3"
	},
	"github:jspm/nodelibs-vm@0.1.0": {
	  "vm-browserify": "npm:vm-browserify@0.0.4"
	},
	"github:necolas/normalize.css@3.0.3": {
	  "css": "github:systemjs/plugin-css@0.1.19"
	},
	"npm:@reactivex/rxjs@5.0.0-alpha.7": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:acorn@1.2.2": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "stream": "github:jspm/nodelibs-stream@0.1.0"
	},
	"npm:align-text@0.1.3": {
	  "kind-of": "npm:kind-of@2.0.1",
	  "longest": "npm:longest@1.0.1",
	  "repeat-string": "npm:repeat-string@1.5.2"
	},
	"npm:alter@0.2.0": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "stable": "npm:stable@0.1.5"
	},
	"npm:amdefine@1.0.0": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "module": "github:jspm/nodelibs-module@0.1.0",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:angular2@2.0.0-alpha.46": {
	  "@reactivex/rxjs": "npm:@reactivex/rxjs@5.0.0-alpha.7",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "reflect-metadata": "npm:reflect-metadata@0.1.2",
	  "zone.js": "npm:zone.js@0.5.8"
	},
	"npm:asn1.js@4.0.0": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "bn.js": "npm:bn.js@4.1.1",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "inherits": "npm:inherits@2.0.1",
	  "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
	  "vm": "github:jspm/nodelibs-vm@0.1.0"
	},
	"npm:assert@1.3.0": {
	  "util": "npm:util@0.10.3"
	},
	"npm:ast-traverse@0.1.1": {
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:ast-types@0.8.5": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"npm:babel-code-frame@6.1.18": {
	  "babel-runtime": "npm:babel-runtime@5.8.34",
	  "chalk": "npm:chalk@1.1.1",
	  "esutils": "npm:esutils@2.0.2",
	  "js-tokens": "npm:js-tokens@1.0.2",
	  "line-numbers": "npm:line-numbers@0.2.0",
	  "repeating": "npm:repeating@1.1.3"
	},
	"npm:babel-core@6.1.21": {
	  "babel-code-frame": "npm:babel-code-frame@6.1.18",
	  "babel-generator": "npm:babel-generator@6.1.20",
	  "babel-helpers": "npm:babel-helpers@6.1.20",
	  "babel-messages": "npm:babel-messages@6.1.18",
	  "babel-register": "npm:babel-register@6.1.18",
	  "babel-runtime": "npm:babel-runtime@5.8.34",
	  "babel-template": "npm:babel-template@6.1.18",
	  "babel-traverse": "npm:babel-traverse@6.1.20",
	  "babel-types": "npm:babel-types@6.1.18",
	  "babylon": "npm:babylon@6.1.21",
	  "convert-source-map": "npm:convert-source-map@1.1.2",
	  "debug": "npm:debug@2.2.0",
	  "esutils": "npm:esutils@2.0.2",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "home-or-tmp": "npm:home-or-tmp@1.0.0",
	  "json5": "npm:json5@0.4.0",
	  "lodash": "npm:lodash@3.10.1",
	  "minimatch": "npm:minimatch@2.0.10",
	  "module": "github:jspm/nodelibs-module@0.1.0",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "path-exists": "npm:path-exists@1.0.0",
	  "path-is-absolute": "npm:path-is-absolute@1.0.0",
	  "private": "npm:private@0.1.6",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "regenerator": "npm:regenerator@0.8.35",
	  "shebang-regex": "npm:shebang-regex@1.0.0",
	  "slash": "npm:slash@1.0.0",
	  "source-map": "npm:source-map@0.5.3",
	  "source-map-support": "npm:source-map-support@0.2.10",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"npm:babel-generator@6.1.20": {
	  "babel-messages": "npm:babel-messages@6.1.18",
	  "babel-runtime": "npm:babel-runtime@5.8.34",
	  "babel-types": "npm:babel-types@6.1.18",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "detect-indent": "npm:detect-indent@3.0.1",
	  "is-integer": "npm:is-integer@1.0.6",
	  "lodash": "npm:lodash@3.10.1",
	  "repeating": "npm:repeating@1.1.3",
	  "source-map": "npm:source-map@0.5.3",
	  "trim-right": "npm:trim-right@1.0.1"
	},
	"npm:babel-helpers@6.1.20": {
	  "babel-runtime": "npm:babel-runtime@5.8.34",
	  "babel-template": "npm:babel-template@6.1.18"
	},
	"npm:babel-messages@6.1.18": {
	  "babel-runtime": "npm:babel-runtime@5.8.34",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"npm:babel-register@6.1.18": {
	  "babel-core": "npm:babel-core@6.1.21",
	  "babel-runtime": "npm:babel-runtime@5.8.34",
	  "core-js": "npm:core-js@1.2.6",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "home-or-tmp": "npm:home-or-tmp@1.0.0",
	  "lodash": "npm:lodash@3.10.1",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "path-exists": "npm:path-exists@1.0.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "source-map-support": "npm:source-map-support@0.2.10"
	},
	"npm:babel-runtime@5.8.34": {
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:babel-runtime@6.1.18": {
	  "core-js": "npm:core-js@1.2.6",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:babel-template@6.1.18": {
	  "babel-runtime": "npm:babel-runtime@5.8.34",
	  "babel-traverse": "npm:babel-traverse@6.1.20",
	  "babel-types": "npm:babel-types@6.1.18",
	  "babylon": "npm:babylon@6.1.21",
	  "lodash": "npm:lodash@3.10.1"
	},
	"npm:babel-traverse@6.1.20": {
	  "babel-code-frame": "npm:babel-code-frame@6.1.18",
	  "babel-messages": "npm:babel-messages@6.1.18",
	  "babel-runtime": "npm:babel-runtime@5.8.34",
	  "babel-types": "npm:babel-types@6.1.18",
	  "babylon": "npm:babylon@6.1.21",
	  "debug": "npm:debug@2.2.0",
	  "globals": "npm:globals@8.12.0",
	  "invariant": "npm:invariant@2.2.0",
	  "lodash": "npm:lodash@3.10.1",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "repeating": "npm:repeating@1.1.3"
	},
	"npm:babel-types@6.1.18": {
	  "babel-runtime": "npm:babel-runtime@5.8.34",
	  "babel-traverse": "npm:babel-traverse@6.1.20",
	  "esutils": "npm:esutils@2.0.2",
	  "lodash": "npm:lodash@3.10.1",
	  "to-fast-properties": "npm:to-fast-properties@1.0.1"
	},
	"npm:babylon@6.1.21": {
	  "babel-runtime": "npm:babel-runtime@5.8.34",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:brace-expansion@1.1.1": {
	  "balanced-match": "npm:balanced-match@0.2.1",
	  "concat-map": "npm:concat-map@0.0.1"
	},
	"npm:browserify-aes@1.0.5": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "buffer-xor": "npm:buffer-xor@1.0.3",
	  "cipher-base": "npm:cipher-base@1.0.2",
	  "create-hash": "npm:create-hash@1.1.2",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "inherits": "npm:inherits@2.0.1",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:browserify-cipher@1.0.0": {
	  "browserify-aes": "npm:browserify-aes@1.0.5",
	  "browserify-des": "npm:browserify-des@1.0.0",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
	},
	"npm:browserify-des@1.0.0": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "cipher-base": "npm:cipher-base@1.0.2",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "des.js": "npm:des.js@1.0.0",
	  "inherits": "npm:inherits@2.0.1"
	},
	"npm:browserify-rsa@4.0.0": {
	  "bn.js": "npm:bn.js@4.1.1",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "constants": "github:jspm/nodelibs-constants@0.1.0",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "randombytes": "npm:randombytes@2.0.1"
	},
	"npm:browserify-sign@4.0.0": {
	  "bn.js": "npm:bn.js@4.1.1",
	  "browserify-rsa": "npm:browserify-rsa@4.0.0",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "create-hash": "npm:create-hash@1.1.2",
	  "create-hmac": "npm:create-hmac@1.1.4",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "elliptic": "npm:elliptic@6.0.2",
	  "inherits": "npm:inherits@2.0.1",
	  "parse-asn1": "npm:parse-asn1@5.0.0",
	  "stream": "github:jspm/nodelibs-stream@0.1.0"
	},
	"npm:buffer-xor@1.0.3": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:buffer@3.5.2": {
	  "base64-js": "npm:base64-js@0.0.8",
	  "ieee754": "npm:ieee754@1.1.6",
	  "is-array": "npm:is-array@1.0.1"
	},
	"npm:center-align@0.1.2": {
	  "align-text": "npm:align-text@0.1.3",
	  "lazy-cache": "npm:lazy-cache@0.2.4"
	},
	"npm:chalk@1.1.1": {
	  "ansi-styles": "npm:ansi-styles@2.1.0",
	  "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
	  "has-ansi": "npm:has-ansi@2.0.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "strip-ansi": "npm:strip-ansi@3.0.0",
	  "supports-color": "npm:supports-color@2.0.0"
	},
	"npm:cipher-base@1.0.2": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "inherits": "npm:inherits@2.0.1",
	  "stream": "github:jspm/nodelibs-stream@0.1.0",
	  "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
	},
	"npm:cliui@2.1.0": {
	  "center-align": "npm:center-align@0.1.2",
	  "right-align": "npm:right-align@0.1.3",
	  "wordwrap": "npm:wordwrap@0.0.2"
	},
	"npm:commander@2.9.0": {
	  "child_process": "github:jspm/nodelibs-child_process@0.1.0",
	  "events": "github:jspm/nodelibs-events@0.1.1",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "graceful-readlink": "npm:graceful-readlink@1.0.1",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:commoner@0.10.4": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "child_process": "github:jspm/nodelibs-child_process@0.1.0",
	  "commander": "npm:commander@2.9.0",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "detective": "npm:detective@4.3.1",
	  "events": "github:jspm/nodelibs-events@0.1.1",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "glob": "npm:glob@5.0.15",
	  "graceful-fs": "npm:graceful-fs@4.1.2",
	  "iconv-lite": "npm:iconv-lite@0.4.13",
	  "mkdirp": "npm:mkdirp@0.5.1",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "private": "npm:private@0.1.6",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "q": "npm:q@1.4.1",
	  "recast": "npm:recast@0.10.24",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:constants-browserify@0.0.1": {
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:convert-source-map@1.1.2": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "path": "github:jspm/nodelibs-path@0.1.0"
	},
	"npm:core-js@1.2.6": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:core-util-is@1.0.1": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0"
	},
	"npm:create-ecdh@4.0.0": {
	  "bn.js": "npm:bn.js@4.1.1",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "elliptic": "npm:elliptic@6.0.2"
	},
	"npm:create-hash@1.1.2": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "cipher-base": "npm:cipher-base@1.0.2",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "inherits": "npm:inherits@2.0.1",
	  "ripemd160": "npm:ripemd160@1.0.1",
	  "sha.js": "npm:sha.js@2.4.4"
	},
	"npm:create-hmac@1.1.4": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "create-hash": "npm:create-hash@1.1.2",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "inherits": "npm:inherits@2.0.1",
	  "stream": "github:jspm/nodelibs-stream@0.1.0"
	},
	"npm:crypto-browserify@3.11.0": {
	  "browserify-cipher": "npm:browserify-cipher@1.0.0",
	  "browserify-sign": "npm:browserify-sign@4.0.0",
	  "create-ecdh": "npm:create-ecdh@4.0.0",
	  "create-hash": "npm:create-hash@1.1.2",
	  "create-hmac": "npm:create-hmac@1.1.4",
	  "diffie-hellman": "npm:diffie-hellman@5.0.0",
	  "inherits": "npm:inherits@2.0.1",
	  "pbkdf2": "npm:pbkdf2@3.0.4",
	  "public-encrypt": "npm:public-encrypt@4.0.0",
	  "randombytes": "npm:randombytes@2.0.1"
	},
	"npm:debug@2.2.0": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "ms": "npm:ms@0.7.1",
	  "net": "github:jspm/nodelibs-net@0.1.2",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "tty": "github:jspm/nodelibs-tty@0.1.0",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"npm:defs@1.1.1": {
	  "alter": "npm:alter@0.2.0",
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "ast-traverse": "npm:ast-traverse@0.1.1",
	  "breakable": "npm:breakable@1.0.0",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "child_process": "github:jspm/nodelibs-child_process@0.1.0",
	  "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "simple-fmt": "npm:simple-fmt@0.1.0",
	  "simple-is": "npm:simple-is@0.2.0",
	  "stringmap": "npm:stringmap@0.2.2",
	  "stringset": "npm:stringset@0.2.1",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0",
	  "tryor": "npm:tryor@0.1.2",
	  "yargs": "npm:yargs@3.27.0"
	},
	"npm:des.js@1.0.0": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "inherits": "npm:inherits@2.0.1",
	  "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
	},
	"npm:detect-indent@3.0.1": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "get-stdin": "npm:get-stdin@4.0.1",
	  "minimist": "npm:minimist@1.2.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "repeating": "npm:repeating@1.1.3",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:detective@4.3.1": {
	  "acorn": "npm:acorn@1.2.2",
	  "defined": "npm:defined@1.0.0",
	  "fs": "github:jspm/nodelibs-fs@0.1.2"
	},
	"npm:diffie-hellman@5.0.0": {
	  "bn.js": "npm:bn.js@4.1.1",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "miller-rabin": "npm:miller-rabin@4.0.0",
	  "randombytes": "npm:randombytes@2.0.1",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:elliptic@6.0.2": {
	  "bn.js": "npm:bn.js@4.1.1",
	  "brorand": "npm:brorand@1.0.5",
	  "hash.js": "npm:hash.js@1.0.3",
	  "inherits": "npm:inherits@2.0.1",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:es6-promise@3.0.2": {
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:esprima-fb@15001.1.0-dev-harmony-fb": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:evp_bytestokey@1.0.0": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "create-hash": "npm:create-hash@1.1.2",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0"
	},
	"npm:font-awesome@4.4.0": {
	  "css": "github:systemjs/plugin-css@0.1.19"
	},
	"npm:get-stdin@4.0.1": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:glob@5.0.15": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "events": "github:jspm/nodelibs-events@0.1.1",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "inflight": "npm:inflight@1.0.4",
	  "inherits": "npm:inherits@2.0.1",
	  "minimatch": "npm:minimatch@3.0.0",
	  "once": "npm:once@1.3.2",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "path-is-absolute": "npm:path-is-absolute@1.0.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"npm:globals@8.12.0": {
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:graceful-fs@4.1.2": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "constants": "github:jspm/nodelibs-constants@0.1.0",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "stream": "github:jspm/nodelibs-stream@0.1.0",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"npm:graceful-readlink@1.0.1": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2"
	},
	"npm:has-ansi@2.0.0": {
	  "ansi-regex": "npm:ansi-regex@2.0.0"
	},
	"npm:hash.js@1.0.3": {
	  "inherits": "npm:inherits@2.0.1"
	},
	"npm:home-or-tmp@1.0.0": {
	  "os-tmpdir": "npm:os-tmpdir@1.0.1",
	  "user-home": "npm:user-home@1.1.1"
	},
	"npm:iconv-lite@0.4.13": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "stream": "github:jspm/nodelibs-stream@0.1.0",
	  "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:inflight@1.0.4": {
	  "once": "npm:once@1.3.2",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "wrappy": "npm:wrappy@1.0.1"
	},
	"npm:inherits@2.0.1": {
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"npm:invariant@2.2.0": {
	  "loose-envify": "npm:loose-envify@1.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:is-buffer@1.1.0": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0"
	},
	"npm:is-finite@1.0.1": {
	  "number-is-nan": "npm:number-is-nan@1.0.0"
	},
	"npm:is-integer@1.0.6": {
	  "is-finite": "npm:is-finite@1.0.1"
	},
	"npm:json5@0.4.0": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:kind-of@2.0.1": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "is-buffer": "npm:is-buffer@1.1.0"
	},
	"npm:lcid@1.0.0": {
	  "invert-kv": "npm:invert-kv@1.0.0",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:line-numbers@0.2.0": {
	  "left-pad": "npm:left-pad@0.0.3"
	},
	"npm:lodash@3.10.1": {
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:loose-envify@1.1.0": {
	  "js-tokens": "npm:js-tokens@1.0.2",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "stream": "github:jspm/nodelibs-stream@0.1.0",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"npm:miller-rabin@4.0.0": {
	  "bn.js": "npm:bn.js@4.1.1",
	  "brorand": "npm:brorand@1.0.5"
	},
	"npm:minimatch@2.0.10": {
	  "brace-expansion": "npm:brace-expansion@1.1.1",
	  "path": "github:jspm/nodelibs-path@0.1.0"
	},
	"npm:minimatch@3.0.0": {
	  "brace-expansion": "npm:brace-expansion@1.1.1",
	  "path": "github:jspm/nodelibs-path@0.1.0"
	},
	"npm:mkdirp@0.5.1": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "minimist": "npm:minimist@0.0.8",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:once@1.3.2": {
	  "wrappy": "npm:wrappy@1.0.1"
	},
	"npm:os-locale@1.4.0": {
	  "child_process": "github:jspm/nodelibs-child_process@0.1.0",
	  "lcid": "npm:lcid@1.0.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:os-tmpdir@1.0.1": {
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:parse-asn1@5.0.0": {
	  "asn1.js": "npm:asn1.js@4.0.0",
	  "browserify-aes": "npm:browserify-aes@1.0.5",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "create-hash": "npm:create-hash@1.1.2",
	  "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
	  "pbkdf2": "npm:pbkdf2@3.0.4",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:path-browserify@0.0.0": {
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:path-exists@1.0.0": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2"
	},
	"npm:path-is-absolute@1.0.0": {
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:pbkdf2@3.0.4": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "child_process": "github:jspm/nodelibs-child_process@0.1.0",
	  "create-hmac": "npm:create-hmac@1.1.4",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:process@0.11.2": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0"
	},
	"npm:public-encrypt@4.0.0": {
	  "bn.js": "npm:bn.js@4.1.1",
	  "browserify-rsa": "npm:browserify-rsa@4.0.0",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "create-hash": "npm:create-hash@1.1.2",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "parse-asn1": "npm:parse-asn1@5.0.0",
	  "randombytes": "npm:randombytes@2.0.1"
	},
	"npm:punycode@1.3.2": {
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:q@1.4.1": {
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:randombytes@2.0.1": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:readable-stream@1.1.13": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "core-util-is": "npm:core-util-is@1.0.1",
	  "events": "github:jspm/nodelibs-events@0.1.1",
	  "inherits": "npm:inherits@2.0.1",
	  "isarray": "npm:isarray@0.0.1",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "stream-browserify": "npm:stream-browserify@1.0.0",
	  "string_decoder": "npm:string_decoder@0.10.31"
	},
	"npm:recast@0.10.24": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "ast-types": "npm:ast-types@0.8.5",
	  "esprima-fb": "npm:esprima-fb@15001.1.0-dev-harmony-fb",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "private": "npm:private@0.1.6",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "source-map": "npm:source-map@0.4.4"
	},
	"npm:reflect-metadata@0.1.2": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:regenerator@0.8.35": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "commoner": "npm:commoner@0.10.4",
	  "defs": "npm:defs@1.1.1",
	  "esprima-fb": "npm:esprima-fb@15001.1.0-dev-harmony-fb",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "private": "npm:private@0.1.6",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "recast": "npm:recast@0.10.24",
	  "through": "npm:through@2.3.8",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"npm:repeating@1.1.3": {
	  "is-finite": "npm:is-finite@1.0.1",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:right-align@0.1.3": {
	  "align-text": "npm:align-text@0.1.3"
	},
	"npm:ripemd160@1.0.1": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:sha.js@2.4.4": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "inherits": "npm:inherits@2.0.1",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:source-map-support@0.2.10": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0",
	  "child_process": "github:jspm/nodelibs-child_process@0.1.0",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "http": "github:jspm/nodelibs-http@1.7.1",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "querystring": "github:jspm/nodelibs-querystring@0.1.0",
	  "source-map": "npm:source-map@0.1.32"
	},
	"npm:source-map@0.1.32": {
	  "amdefine": "npm:amdefine@1.0.0",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:source-map@0.4.4": {
	  "amdefine": "npm:amdefine@1.0.0",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:source-map@0.5.3": {
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:stream-browserify@1.0.0": {
	  "events": "github:jspm/nodelibs-events@0.1.1",
	  "inherits": "npm:inherits@2.0.1",
	  "readable-stream": "npm:readable-stream@1.1.13"
	},
	"npm:string_decoder@0.10.31": {
	  "buffer": "github:jspm/nodelibs-buffer@0.1.0"
	},
	"npm:strip-ansi@3.0.0": {
	  "ansi-regex": "npm:ansi-regex@2.0.0"
	},
	"npm:supports-color@2.0.0": {
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:through@2.3.8": {
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "stream": "github:jspm/nodelibs-stream@0.1.0"
	},
	"npm:timers-browserify@1.4.1": {
	  "process": "npm:process@0.11.2"
	},
	"npm:url@0.10.3": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "punycode": "npm:punycode@1.3.2",
	  "querystring": "npm:querystring@0.2.0",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"npm:user-home@1.1.1": {
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "systemjs-json": "github:systemjs/plugin-json@0.1.0"
	},
	"npm:util@0.10.3": {
	  "inherits": "npm:inherits@2.0.1",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	},
	"npm:vm-browserify@0.0.4": {
	  "indexof": "npm:indexof@0.0.1"
	},
	"npm:window-size@0.1.4": {
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "tty": "github:jspm/nodelibs-tty@0.1.0"
	},
	"npm:y18n@3.2.0": {
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "util": "github:jspm/nodelibs-util@0.1.0"
	},
	"npm:yargs@3.27.0": {
	  "assert": "github:jspm/nodelibs-assert@0.1.0",
	  "camelcase": "npm:camelcase@1.2.1",
	  "cliui": "npm:cliui@2.1.0",
	  "decamelize": "npm:decamelize@1.1.1",
	  "fs": "github:jspm/nodelibs-fs@0.1.2",
	  "os-locale": "npm:os-locale@1.4.0",
	  "path": "github:jspm/nodelibs-path@0.1.0",
	  "process": "github:jspm/nodelibs-process@0.1.2",
	  "window-size": "npm:window-size@0.1.4",
	  "y18n": "npm:y18n@3.2.0"
	},
	"npm:zone.js@0.5.8": {
	  "es6-promise": "npm:es6-promise@3.0.2",
	  "process": "github:jspm/nodelibs-process@0.1.2"
	}
  }
});
