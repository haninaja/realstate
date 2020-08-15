import { Property } from './../model/property';
import { IPropertyBase } from './../model/IPropertyBase';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from './../model/IProperty';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

getProperty(id: number){
  return this.getAllProperties().pipe(
    map(propertiesArray => {
      // throw new Error('some error');  // to test the resolver
      return propertiesArray.find(p => p.Id === id);
    })
  );
}

getAllProperties(sellRent?: number): Observable<Property[]>{
  // to use the data folder we should add its path to the assets in anguler.json file ("src/data")
  // and we have to restart the app to take effect.
  // the request URL will pe http://localhost:4200/data/properties.json
  return this.http.get('data/properties.json').pipe(
    map(data => {
      // console.log(data);
      const PropertiesListArray: Array<Property> = [];
      for (const id in data){
        if (sellRent){
          if (data.hasOwnProperty(id) && data[id].SellRent === sellRent){
            PropertiesListArray.push(data[id]);
          }
        }else{
          PropertiesListArray.push(data[id]);
        }
      }

      // read the local stored property
      const localProperties = JSON.parse(localStorage.getItem('newProp'));
      if (localProperties){
        for (const id in localProperties){
          if (sellRent){
            if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === sellRent){
              PropertiesListArray.push(localProperties[id]);
            }
          }else{
            PropertiesListArray.push(localProperties[id]);
          }
        }
      }
      return PropertiesListArray;
    })
  );
 // return this.http.get<Property[]>('data/properties.json');
}


addProperty(property: Property) {
  let newProp = [property];
  const props = localStorage.getItem('newProp');
  if (props){
    newProp = [property, ...JSON.parse(props)];
  }
  localStorage.setItem('newProp', JSON.stringify(newProp));
}

newPropId(){
  if (localStorage.getItem('PID')){
    return +localStorage.getItem('PID') + 1;
  }else{
    localStorage.setItem('PID', '101');
    return 101;
  }
}

}
