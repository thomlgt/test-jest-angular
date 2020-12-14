import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Dog } from '../Cart/dog';
import { DogComponent } from '../dog/dog.component';

import { DogsComponent } from './dogs.component';

describe('DogsComponent', () => {
  let component: DogsComponent;
  let fixture: ComponentFixture<DogsComponent>;

  const dog1 = new Dog("Milo", "Border Collie");
  const dog2 = new Dog("Lylas", "Berger de brie");

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsComponent , DogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test le bon fonctionnement de la liste de chiens
  it('should have list', () => {
    component.dogs = [dog1, dog2];

    expect(component.dogs).toEqual([dog1, dog2]);
  });

  //Vérifie l'affichage du nom du chien 
  // it('should display dogs names', () => {
  //   component.dogs = [dog1, dog2];
  //   fixture.detectChanges();

  //   const nameElements = fixture.debugElement.queryAll(By.css('[data-role="dog-name"]'))
  //   const names = nameElements.map(element => element.nativeElement.textContent)

  //   expect(names).toEqual(["Milo", "Lylas"]);
  // });

  //Vérifie l'achat d'un chien après le click d'un bouton
  it('should buy dog', () => {
    component.dogs = [dog1, dog2];
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('[data-role="buy-button"]'))
    buttons[0].triggerEventHandler('click', {});

    expect(component.boughtDogs).toEqual([dog1]);
  });
});
