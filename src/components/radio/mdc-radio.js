import { inject, bindable, bindingMode, DOM } from 'aurelia-framework';
import { radio as mdcRadio } from 'material-components-web/dist/material-components-web';
const { MDCRadio } = mdcRadio;

@inject(Element)
export class MdcRadio {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;
    @bindable disabled = false;
	@bindable id;
	@bindable label;
	@bindable secondarylabel;
	@bindable name;
	@bindable model;
    mdcRadio;

    constructor( element) {
    	this.element= element;
    }

    bind() {
		this.mdcRadio = new MDCRadio(this.element);
    }

    handleChange(e) {
        // stop propagation so we're able to fire our own event when data-binding changes checked value
        e.stopPropagation();
    }

    checkedChanged(newValue) {
        const event = new CustomEvent('change', { bubbles: true, detail: { value: newValue }});
        this.element.dispatchEvent(event);
    }

    disabledChanged(newValue) {
    	this.mdcRadio.disabled = !!newValue;
    }
}
