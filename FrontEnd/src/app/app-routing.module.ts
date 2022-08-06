import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionAddComponent } from './components/educacion-add/educacion-add.component';
import { EducacionUpdateComponent } from './components/educacion-update/educacion-update.component';
import { ExperienciaAddComponent } from './components/experiencia-add/experiencia-add.component';
import { ExperienciaUpdateComponent } from './components/experiencia-update/experiencia-update.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: '',component:InicioComponent},
  {path:'educacion-add', component:EducacionAddComponent},
  {path:'educacion-update/:id', component:EducacionUpdateComponent},
  {path:'experiencia-add',component:ExperienciaAddComponent},
  {path:'experiencia-update/:id',component:ExperienciaUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
