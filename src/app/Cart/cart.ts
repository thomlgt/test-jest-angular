import { Dog } from './dog';

export class Cart {

    private _dogs: Dog[] = [];

    addDog(dog : Dog) {
        this._dogs = [...this._dogs, dog];
    }

    get dogs() {
        return this._dogs;
    }
}