import { HousingService } from 'src/app/services/housing.service';
import { Property } from './../../model/property';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PropertyDetailResolver implements Resolve<Property> {
  constructor(private housingService: HousingService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property | Observable<Property> {
    const propId = route.params['id'];
    return this.housingService.getProperty(+propId).pipe(
      catchError(error => {
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }


}
