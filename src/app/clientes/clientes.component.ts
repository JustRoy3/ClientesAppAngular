import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[];

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientesList => this.clientes = clientesList
    );
  }

  deleteCliente(cliente:Cliente):void{
    swal.fire({
      title: 'Estas seguro que quieres eliminar el usuario?',
      text: 'Esta acción es irreversible',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    }).then(result => {
      if(result.isConfirmed){
        this.clienteService.deleteCliente(cliente.id).subscribe(response => {
          this.clientes = this.clientes.filter(cli => cli != cliente);
          swal.fire('Cliente eliminado', `Cliente eliminado con éxito`, 'success');
          this.ngOnInit();
        })
      }
    })
  }
}
