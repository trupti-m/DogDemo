import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from './Dog'

@Injectable({
  providedIn: 'root'
})
export class DogDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    
    return this.http.get('https://dog.ceo/api/breeds/list/all');
  }
  getDataByBreed(breedName:string): Observable<any> {
    let url ='https://dog.ceo/api/breed/' + breedName + '/images/random';
    // console.log("getDataByBreed: "+url);
    return this.http.get(url);
  }

}
