export class Dog {
    private _nom: string;
    private _race: string;

    constructor(nom: string, race : string) {
        this._nom = nom;
        this._race = race;
    }

    get nom() {
        return this._nom;
    }
}