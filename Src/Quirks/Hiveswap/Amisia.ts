import { Quirk } from "../Quirk";


export class Amisia extends Quirk {
    constructor() {
        super("Amisia Erdehn");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("u", "uu");
    }
}