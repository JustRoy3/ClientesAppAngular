import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal  from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente:Cliente = new Cliente();

  public titulo:string = "Crear cliente";

  constructor(private clienteService:ClienteService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  public create():void{
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      response => {
        this.router.navigate(['clientes']);
        swal.fire('Cliente guardado', `Cliente ${response.nombre} creado con éxito`, 'success');
      })
  }

  public cargarCliente():void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
      }
    })
  }

  public updateCliente():void{
    this.clienteService.updateCliente(this.cliente).subscribe(
      response => {
        this.router.navigate(['clientes']);
        swal.fire('Cliente actualizado', `Cliente ${response.nombre} actualizado con éxito`, 'success');
      })
  }

}
