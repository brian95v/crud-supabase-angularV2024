import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { PersonasComponent } from './componentes/personas/personas.component';

const rutas: Routes = [
  {path: 'personas', component: PersonasComponent },
  {path: '', redirectTo: '/personas', pathMatch: 'full'},
  {path: '**', component: PersonasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
