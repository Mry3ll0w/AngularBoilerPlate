
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  @Input() aCategory: BookCategory[];

  constructor(){
    this.aCategory = [
      {
        name : 'Adultos y Juveniles',
        description : 'Para clientes con cierta edad, recomendamos estos libros para adolescentes y adultos.',
        ID: 1,
        imgUrl: 'https://static9.depositphotos.com/1107016/1165/v/600/depositphotos_11654521-stock-illustration-jumping.jpg'
      },
      {
        name : 'Niños',
        description : 'Para los mas peques, con estos libros podran iniciarse en el mundo de la lectura, ayudando a su desarrollo mental.',
        ID: 1,
        imgUrl: 'https://educacion30.b-cdn.net/wp-content/uploads/2019/09/educacion-infantil-978x652.jpg'
      }
    ]
  }

}



export interface BookCategory {

  name: string;
  imgUrl ?: string;
  description?: string;
  ID: number;

}
