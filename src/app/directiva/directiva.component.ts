import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso:string[] = ['TypeScript', 'JavaScript', 'JavaSE', 'C#', 'PHP'];

  habilitar:boolean = true;

  constructor() { }

  mostrar(){
    this.habilitar = (this.habilitar==true) ? false : true;
  }

}
