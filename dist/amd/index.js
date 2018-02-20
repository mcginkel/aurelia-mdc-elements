define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.configure = configure;
	function configure(config) {
		var components = [_aureliaFramework.PLATFORM.moduleName('./components/checkbox/mdc-checkbox'), _aureliaFramework.PLATFORM.moduleName('./components/details/details'), _aureliaFramework.PLATFORM.moduleName('./components/menu/mdc-menu'), _aureliaFramework.PLATFORM.moduleName('./components/progress/mdc-progress'), _aureliaFramework.PLATFORM.moduleName('./components/select/mdc-select'), _aureliaFramework.PLATFORM.moduleName('./components/snackbar/mdc-snackbar'), _aureliaFramework.PLATFORM.moduleName('./components/switch/mdc-switch'), _aureliaFramework.PLATFORM.moduleName('./components/textfield/mdc-text-field'), _aureliaFramework.PLATFORM.moduleName('./components/radio/mdc-radio'), _aureliaFramework.PLATFORM.moduleName('./components/textarea/mdc-textarea')];
		config.globalResources(components);
	}
});