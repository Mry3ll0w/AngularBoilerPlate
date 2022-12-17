import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalogcard',
  templateUrl: './catalogcard.component.html',
  styleUrls: ['./catalogcard.component.css']
})


export class CatalogcardComponent {


  @Input() name: string;
  @Input() content:string;
  @Input() ImgUrl:string;
  @Input() PDFLink: string;

  constructor(){
    this.PDFLink = String();
    this.name = String();
    this.content = String();
    this.ImgUrl = String(); 
  }
}
