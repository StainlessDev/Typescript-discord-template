import { CmdOptions } from "@structures/cmdoptions";


export class Command {
    constructor(commandOptions: CmdOptions) {
        Object.assign(this, commandOptions);
    }
}

