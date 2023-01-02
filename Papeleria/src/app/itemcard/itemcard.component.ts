import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent {

  @Input() sImgUrl :string;
  @Input() sDescription ?:string;
  @Input() sTitle :string;
  @Input() sContent ?:string;
  
  constructor(){
    this.sImgUrl = String();
    this.sTitle = String();
  }

}
