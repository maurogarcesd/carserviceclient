import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
public API = 'https://thawing-chamber-47973.herokuapp.com/owners';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.API);
  }

  createOwner(owner){
    // const owner = {
    //   dni:'05',
    //   name:'Luke Skywalker',
    //   profession:'Jedi'
    // }
    this.http.post(this.API, owner).subscribe( response =>{
      console.log('POST', response);      
    })
  }

  deleteOwner(href){
    this.http.delete(href).subscribe( response =>{
      console.log('POST', response);      
    })
  }

  updateOwner(href, owner){
    // const body = {
    //   dni:'05',
    //   name:'Luke Skywalker',
    //   profession:'Nothing'
    // }
    this.http.put(href, owner).subscribe( response =>{
      console.log('POST', response);      
    })
  }
}
