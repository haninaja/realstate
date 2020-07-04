import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public propertId: number;

  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = true;

  slides = [
    {image: 'assets/images/house-1.jpg'},
    {image: 'assets/images/house-2.jpg'},
    {image: 'assets/images/house-3.jpg'},
    {image: 'assets/images/house-4.jpg'},
    {image: 'assets/images/house-5.jpg'}
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.propertId=Number(this.route.snapshot.params['id']);
    // or
    this.propertId = +this.route.snapshot.params.id;

    this.route.params.subscribe(
      (params) => this.propertId = +params.id
    );
  }

  onSelectNext(){
    this.propertId += 1;
    this.router.navigate(['property-details', this.propertId]);
    // using navigate the default path type is absolute
    // if we want relative path here use
    // this.router.navigate(['property-details',this.propertId],{relativeTo:this.route});
  }
}
