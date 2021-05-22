import { Component, OnInit } from '@angular/core';
import { ApiServiceService, Pokemon } from '../api-service.service'

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  pokemons: Pokemon[];
  constructor(private api: ApiServiceService) { }

  async ngOnInit(): Promise<void> {
    this.pokemons = await this.api.getAll();
  }

}
