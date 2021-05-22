import { Injectable } from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
}

const pokemons: Pokemon[] = [
  {id: 1, name: 'asd'},
  {id: 2, name: 'sdfgd'},
  {id: 3, name: '345g34'},
  {id: 4, name: 'fntyuy'},
]

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  getAll(): Pokemon[] {
    return pokemons;
  }
}
