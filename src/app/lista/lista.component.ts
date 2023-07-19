import { Component, OnInit } from '@angular/core';
import { Users, UsersService } from '../services/users.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  listUsers: Users[] = [];
  allUsers: Users[] = [];
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.listUsers().subscribe((users) => {
  
      this.listUsers = users;
      this.allUsers = users;
    })
  }

  filterTable(event: any) {
    console.log(event.target.value)
    let filterValueLower = event.target.value.toLowerCase();
    if(event === '' ) {
        this.listUsers = this.allUsers;
    } 
    else {
      this.listUsers = this.allUsers.filter((user) => user.nome.includes(filterValueLower))
    }

 }

  editarUsuario(item: any){
    console.log('editou',item)
  }

  
  deletarUsuario(item: any){

    this.userService.deleteUsers(item).subscribe((item) => {
      console.log('deletou')
      location.reload()
    })
  }

  adicionarUsuario(){
    this.router.navigate(['/cadastro'])
  }

}
