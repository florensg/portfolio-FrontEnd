import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionAddComponent } from './components/educacion-add/educacion-add.component';
import { EducacionUpdateComponent } from './components/educacion-update/educacion-update.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: '',component:InicioComponent},
  {path:'educacion-add', component:EducacionAddComponent},
  {path:'educacion-update/:id', component:EducacionUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
