import { Injectable } from '@angular/core';
import {Cliente} from './cliente';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable(
)
export class ClienteService {

  private url:string = "http://localhost:8080/api/clientes";

  private headers = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  create(cliente:Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente, {headers: this.headers});
  }

  getCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  updateCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`, cliente, {headers:this.headers});
  }

  deleteCliente(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.url}/${id}`, {headers:this.headers});
  }

}
