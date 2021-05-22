import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

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
  private apiUrl: string = 'https://pokeapi.co/api/v2/';
  constructor(private http:HttpClient) { }

  getAll(): Promise<Pokemon[]> {
    return new Promise((resolve,reject)=>{
      this.http.get(this.apiUrl+'pokemon?limit=20').toPromise().then((data:any)=>{
        const toWait = data.results.map((result:any)=>{
          return this.http.get(result.url).toPromise();
        })
        Promise.all(toWait).then((something:any)=>{
          console.log('something',something)
          resolve(something)
        })
        
      })

    })

  }

  getOne(id: number): Promise<Pokemon> {
    return new Promise((resolve,reject)=>{
      this.http.get(`${this.apiUrl}pokemon/${id}`)
      .toPromise()
      .then((data:any)=>{
        console.log('data',data)
        resolve(data)
      })
      .catch(err=>{
        console.log(err)
      })
    })
  }
}
