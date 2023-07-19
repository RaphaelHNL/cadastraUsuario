import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  transform(value: any){

    // Ignora caso venham sem valores
    if(value == null || value == undefined){
        return
    }
    
    // Remove caracteres especiais
    value = value.toString().replace(/\D/g,"")

    if (value.length < 14) { //CPF

        //Coloca um ponto entre o terceiro e o quarto dígitos
        value = value.toString().replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        value = value.toString().replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um hífen entre o terceiro e o quarto dígitos
        value = value.toString().replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        return value;
    } 
  }

}
