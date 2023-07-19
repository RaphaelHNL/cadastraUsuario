import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {path: 'lista', component: ListaComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: '', redirectTo: 'lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
