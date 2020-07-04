import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../property/IProperty';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

getAllProperties(sellRent: number): Observable<IProperty[]>{
  return this.http.get('data/properties.json').pipe(
    map(data => {
      const PropertiesListArray: Array<IProperty> = [];
      for (const id in data){
        if (data.hasOwnProperty(id) && data[id].SellRent === sellRent){
          PropertiesListArray.push(data[id]);
        }
      }
      return PropertiesListArray;
    })
  );
}

}
