import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiServiceService, Pokemon} from '../api-service.service'

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {
  pokemon: Pokemon;
  constructor(
    private route: ActivatedRoute,
    private api: ApiServiceService
    ) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null){
      let id = parseInt(idString)
      this.api.getOne(id).then(pokemon=>{
        this.pokemon = pokemon;
      });
    }
  }

}
