import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import { Observable } from 'rxjs';
import { Address } from '@modules/models/address';

import { AddressMap } from '@modules/models/address-map';


@Injectable({providedIn: 'root'})

export class MapsService {
  constructor(private http: HttpClient) { }

  public getAdress(zipCode: string): Observable<Address>{
    return this.http.get<Address>(`https://viacep.com.br/ws/${zipCode}/json`);
  }

  public getLatitudeLongitude(address: string): Observable<AddressMap>{
    return this.http.get<AddressMap>(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${environment.REACT_APP_TOKEN_MAPS}`);
  }

}
