import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
const urlBase = 'http://localhost:3004';

export interface Users {
  id: number
  nome: string,
  email: string,
  cpf: string,
  endereco: string,
  estado: string,
  cep: number,
  cidade: string,
  nomeCartao: string,
  mesCartao: number,
  anoCartao: number,
  numeroCartao: number,
  dataCadastro: string,
  codigoSeguranca:number,
}
@Injectable({
  providedIn: 'root'
})


export class UsersService {

  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get<Users[]>(`${urlBase}/users`)
  }

  postUsers(body: Users){
    return this.http.post<Users[]>(`${urlBase}/users`, body)
  }

  deleteUsers(id: any){

    return this.http.delete<Users[]>(`${urlBase}/users/`+ id)
  }
}
