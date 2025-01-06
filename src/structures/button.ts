import { ButtonOptions } from "@structures/buttonoptions";

export class Button {
    constructor(buttonOptions: ButtonOptions) {
        Object.assign(this, buttonOptions);
    }
}