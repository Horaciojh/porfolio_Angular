import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ModalLoguinComponent } from './modal-loguin/modal-loguin.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  
  // {phat: 'dashboard', component:DashboardComponent},
  // {path:'',redirectTo:'/', pathMatch:'full'},
  // {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
