import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  @Input() aCatalogs:CatalogCard[];
  constructor(){
    this.aCatalogs=[
      { 
        iID: 1,
        sIMGUrl: '/assets/img/cuadernos.jpeg',
        sTitle: 'Cuadernos y Archivos', 
        sContent: 'Podras encontrar todo lo relacionado con los cuadernos y archivadores.',
        sPDFLink: 'https://papelerialaura.com/wp-content/uploads/2022/09/archivocuadernos.pdf'
      },
      { 
        iID: 2, 
        sIMGUrl: '/assets/img/material_escolar.jpeg',
        sTitle: 'Material Escolar', 
        sContent: 'Busca aquello que necesites para tu oficina o tu vida estudiantil.',
        sPDFLink: 'https://papelerialaura.com/wp-content/uploads/2022/09/Material-Escolar.pdf'
      },
      { 
        iID: 3, 
        sIMGUrl: '/assets/img/boligrafos.jpeg',
        sTitle: 'Escritura y corrección', 
        sContent: 'Encuentra todo lo relacionado con la tinta desde el boli bic hasta tu lado mas artista.',
        sPDFLink: 'https://papelerialaura.com/wp-content/uploads/2022/09/archivocuadernos.pdf'
      }
    ]
  }
}
export interface CatalogCard{
  iID: number,
  sTitle: string,
  sContent: string,
  sPDFLink: string,
  sIMGUrl: string
};

