import { TestBed } from '@angular/core/testing';
import { Cart } from './cart';
import { Dog } from "./dog";

describe("Cart", () => {

    let cart = new Cart();
    
    it("should add cat", () => {

        const dog1 = new Dog("Milo", "Border Collie");
        const dog2 = new Dog("Lylas", "Berger de brie");

        cart.addDog(dog1);
        cart.addDog(dog2);

        const dogList = cart.dogs;

        expect(dogList).toEqual([dog1, dog2]);
        
        // créer un chien
        // ajouter un chien
        // ajouter un deuxieme chien
        // récupérer les chiens
    });
});