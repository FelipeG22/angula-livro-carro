import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosComponent } from "./carros/carros.component";
import { CadastroCarroComponent } from "./cadastro-carro/cadastro-carro.component";

//import { Pagina1Component } from './pagina1/pagina1.component';
//import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
{ path: '', redirectTo: '/carros', pathMatch: 'full' },
{ path: 'carros', component: CarrosComponent },
{ path: 'cadastro-carro', component: CadastroCarroComponent }

];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}