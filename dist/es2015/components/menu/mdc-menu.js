var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { bindable, customElement, inject, DOM } from 'aurelia-framework';

import { menu as mdcMenu } from 'material-components-web/dist/material-components-web';
const { MDCMenu, MDCMenuFoundation } = mdcMenu;

export let MdcMenu = (_dec = customElement('mdc-menu'), _dec2 = inject(Element), _dec(_class = _dec2(_class = (_class2 = class MdcMenu {

	constructor(element) {
		_initDefineProp(this, 'label', _descriptor, this);

		_initDefineProp(this, 'icon', _descriptor2, this);

		_initDefineProp(this, 'menuElement', _descriptor3, this);

		this.element = element;
	}

	toggleMenu() {
		this.myMdcMenu.open = !this.myMdcMenu.open;
	}

	bind() {
		this.myMdcMenu = new MDCMenu(this.menuElement);
	}

	detached() {
		this.myMdcMenu.destroy();
	}
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
	enumerable: true,
	initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [bindable], {
	enumerable: true,
	initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'menuElement', [bindable], {
	enumerable: true,
	initializer: null
})), _class2)) || _class) || _class);