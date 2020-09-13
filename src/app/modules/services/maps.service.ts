import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Adress } from './../models/adress';

@Injectable({providedIn: 'root'})

export class MapsService {
  constructor(private http: HttpClient) { }

  public getAdress(zipCode: string): Observable<Adress>{
    return this.http.get<Adress>(`https://viacep.com.br/ws/${zipCode}/json`);
  }

}
