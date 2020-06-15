import { Quirk } from "../Quirk";


export class Polypa extends Quirk {
    constructor() {
        super("Polypa Goezee");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("\\.", " *");
        this.suffix(" *|");
    }
}