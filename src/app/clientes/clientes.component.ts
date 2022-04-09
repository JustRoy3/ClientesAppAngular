import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[] = [
    {id:1, nombre: 'Andrés', apellido:'Guzmán', createdAt:'2022-01-01', email:'sdgfsda'},
    {id:2, nombre: 'Andrés', apellido:'Guzmán', createdAt:'2022-01-01', email:'sdgfsda'},
    {id:3, nombre: 'Andrés', apellido:'Guzmán', createdAt:'2022-01-01', email:'sdgfsda'},
    {id:4, nombre: 'Andrés', apellido:'Guzmán', createdAt:'2022-01-01', email:'sdgfsda'},
    {id:5, nombre: 'Andrés', apellido:'Guzmán', createdAt:'2022-01-01', email:'sdgfsda'},
    {id:6, nombre: 'Andrés', apellido:'Guzmán', createdAt:'2022-01-01', email:'sdgfsda'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
