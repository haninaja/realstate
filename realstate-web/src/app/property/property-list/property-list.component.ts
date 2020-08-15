import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/model/property';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<Property>;


  // filtering
  city = '';
  selctedCity = '';
  // sorting
  sortByParam = '';
  SortDirection = 'asc';

  constructor(private route: ActivatedRoute , private housingService: HousingService ) {

  }

  ngOnInit() {
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2; // this mean we are at Rent page
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());

      }, error => {
        console.log('something wrong');
      }
    );
  }
  onCityFilter(){
    this.selctedCity = this.city;
  }

  onCityFilterClear(){
    this.city = '';
    this.selctedCity = '';
  }

  changeSortDirection(){
    if (this.SortDirection === 'desc'){
      this.SortDirection = 'asc';
    }else{
      this.SortDirection = 'desc';
    }
  }
}
