import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../Cart/dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  @Input() dogs : Dog[];

  _boughtDogs : Dog[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  buyDog(dog : Dog) {
    this._boughtDogs.push(dog);
  }

  get boughtDogs() {
    return this._boughtDogs;
  }

}
