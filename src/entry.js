var ReactJSONViewer = require('./JSONViewer.js');
;(function (ReactJSONViewer) {
	// CommonJS
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = ReactJSONViewer;

		// RequireJS
	} else if (typeof define === "function" && define.amd) {
		define(function () {
			return ReactJSONViewer;
		});

		// <script>
	} else {
		var g;
		if (typeof window !== "undefined") {
			g = window;
		} else if (typeof global !== "undefined") {
			g = global;
		} else if (typeof self !== "undefined") {
			g = self;
		} else {
			// works providing we're not in "use strict";
			// needed for Java 8 Nashorn
			// see https://github.com/facebook/react/issues/3037
			g = this;
		}
		g.ReactJSONViewer = ReactJSONViewer;
	}
})(ReactJSONViewer);