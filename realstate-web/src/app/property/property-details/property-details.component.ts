import { Property } from './../../model/property';
import { HousingService } from 'src/app/services/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId: number;
  property = new Property();

  // for kolkov ngx gallery
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit() {
    // this.propertyId = Number(this.route.snapshot.params['id']);
    // or
     this.propertyId = +this.route.snapshot.params.id;

    //  this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params.id ; // + mean convert to number
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       }
    //     );
    //   }
    // );

    // using Resolver
     this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp'];
      }
    );

    // configur image gallery
     this.galleryOptions = [
      {
        width: '100%',
        height: '470px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // // max-width 800
      // {
      //   breakpoint: 800,
      //   width: '100%',
      //   height: '600px',
      //   imagePercent: 80,
      //   thumbnailsPercent: 20,
      //   thumbnailsMargin: 20,
      //   thumbnailMargin: 20
      // },
      // // max-width 400
      // {
      //   breakpoint: 400,
      //   preview: false
      // }
    ];

     this.galleryImages = [
      {
        small: 'assets/images/house-1.jpg',
        medium: 'assets/images/house-1.jpg',
        big: 'assets/images/house-1.jpg'
      },
      {
        small: 'assets/images/house-2.jpg',
        medium: 'assets/images/house-2.jpg',
        big: 'assets/images/house-2.jpg'
      },
      {
        small: 'assets/images/house-3.jpg',
        medium: 'assets/images/house-3.jpg',
        big: 'assets/images/house-3.jpg'
      },
      {
        small: 'assets/images/house-4.jpg',
        medium: 'assets/images/house-4.jpg',
        big: 'assets/images/house-4.jpg'
      },
      {
        small: 'assets/images/house-5.jpg',
        medium: 'assets/images/house-5.jpg',
        big: 'assets/images/house-5.jpg'
      }
    ];




  }










  // onSelectNext(){
  //   this.propertyId += 1;
  //   this.router.navigate(['property-details', this.propertyId]);
  //   // using navigate the default path type is absolute
  //   // if we want relative path here use
  //   // this.router.navigate(['property-details',this.propertId],{relativeTo:this.route});
  // }
}
