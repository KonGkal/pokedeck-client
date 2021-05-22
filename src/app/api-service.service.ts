import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Pokemon {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/';
  constructor(private http:HttpClient) { }

  async getAll(): Promise<Pokemon[]> {
    try {
      const requestUrl = this.apiUrl + 'pokemon?limit=20';
      const data: any = await this.http.get(requestUrl).toPromise();
      const toWait = data.results.map((result: any) => this.getOne(result.name));
      return Promise.all(toWait);
    } catch (error) {
      console.log(error);
      throw Error('failed to get pokemons');
    }
  }

  async getOne(id: number | string): Promise<any> {
    return this.http.get(`${this.apiUrl}pokemon/${id}`).toPromise()
  }

  async getEvolution(id: number | string): Promise<any> {
    return this.http.get(`${this.apiUrl}evolution-chain/${id}`).toPromise()
  }

  async getEvolutions(id: number): Promise<any[]>{
    try {
      const evolutionChain = [];
      const {chain} = await this.getEvolution(id);
      let current = chain;
      do {
        evolutionChain.push(current.species.name)
        current = current.evolves_to?.[0];
      } while (current?.evolves_to);
      return Promise.all(evolutionChain.map(name => this.getOne(name)));
    } catch (error) {
      console.log(error);
      throw Error('failed to get evolutions');
    }
  }
}
