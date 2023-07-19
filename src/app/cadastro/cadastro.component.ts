import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users, UsersService } from '../services/users.service';
import { get } from 'http';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;
  date: any = new Date();
  mesSelected = ""
  cidadeSelected = "";
  estadoSelected = "";
  anoSelected = "";
  estados = ['Acre (AC)',
  'Alagoas (AL)',
  'Amapá (AP)',
  'Amazonas (AM)',
  'Bahia (BA)',
  'Ceará (CE)',
  'Distrito Federal (DF)',
  'Espírito Santo (ES)',
  'Goiás (GO)',
  'Maranhão (MA)',
  'Mato Grosso (MT)',
  'Mato Grosso do Sul (MS)',
  'Minas Gerais (MG)',
  'Pará (PA)',
  'Paraíba (PB)',
  'Paraná (PR)',
  'Pernambuco (PE)',
  'Piauí (PI)',
  'Rio de Janeiro (RJ)',
  'Rio Grande do Norte (RN)',
  'Rio Grande do Sul (RS)',
  'Rondônia (RO)',
  'Roraima (RR)',
  'Santa Catarina (SC)',
  'São Paulo (SP)',
  'Sergipe (SE)',
  'Tocantins (TO)',]

  cidades = [
    "São paulo",
    "Embu guaçu",
    "Embu das artes",
    "Itapecerica"
  ]
  mesExpiracao = [
   "01","02","03","04","05","06","07","08","09","10","11","12",
  ]
  anoExpiracao = [
    "2025", "2026","2027", "2028","2029", "2030","2031", "2032",
  ]

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private userService: UsersService) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cpf: [null, [Validators.required,Validators.maxLength(11)]],
      endereco: [null, Validators.required],
      estado: [null, Validators.required],
      cep: [null, [Validators.required, Validators.maxLength(8)]],
      cidade: [null, Validators.required],
      nomeCartao: [null, Validators.required],
      mesCartao: [null, Validators.required],
      anoCartao: [null, Validators.required],
      numeroCartao: [null, [Validators.required, Validators.maxLength(16)]],
      codigoSeguranca: [null, [Validators.required, Validators.minLength(3),  Validators.maxLength(3)]],
    })
  }

  cadastrarUsuario() {
    console.log(this.formulario)
    let bodyUsers: Users = this.formulario.value;
    bodyUsers.id = +bodyUsers.cpf;
    bodyUsers.dataCadastro = formatDate(this.date, 'dd-MM-yyyy', 'pt')
    this.userService.postUsers(bodyUsers).subscribe( {
      next: (users) => {
        this.resetar();
      },
      error: (error) => {
        this.openSnackBar();
      },
    });

  }

  resetar(){
    this.formulario.reset();
  }


  openSnackBar() {
    this._snackBar.open('Ocorreu um erro ao realizar cadastramento', 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  verificaTouched(campo: any){
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
  }

  aplicaErroCss(campo:any){
    return {
      'tem-erro': this.verificaTouched(campo),
      'tem-retorno': this.verificaTouched(campo),
    }
  }


}
