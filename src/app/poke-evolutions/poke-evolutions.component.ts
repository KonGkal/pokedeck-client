import { Component, OnInit } from '@angular/core';
import { ApiServiceService, Pokemon } from '../api-service.service'
    
      

@Component({
  selector: 'app-poke-evolutions',
  templateUrl: './poke-evolutions.component.html',
  styleUrls: ['./poke-evolutions.component.scss']
})
export class PokeEvolutionsComponent implements OnInit {
  pokemons: Pokemon[];
  constructor(private api: ApiServiceService) { }

  async ngOnInit(): Promise<void> {
    this.pokemons = await this.api.getEvolutions(1)
  }

}
