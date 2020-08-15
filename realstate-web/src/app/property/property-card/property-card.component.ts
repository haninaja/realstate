import { IPropertyBase } from './../../model/IPropertyBase';
import { Component,  Input } from '@angular/core';
// import { IProperty } from '../../model/IProperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent{
  @Input() property: IPropertyBase ;
  @Input() hideIcons: boolean;

}
