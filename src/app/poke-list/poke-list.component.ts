import { Component, OnInit } from '@angular/core';

const pokemons = [
  {id: 1, name: 'asd'},
  {id: 2, name: 'sdfgd'},
  {id: 3, name: '345g34'},
  {id: 4, name: 'fntyuy'},
]

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
