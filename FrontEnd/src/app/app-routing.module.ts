import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionAddComponent } from './components/educacion-add/educacion-add.component';
import { EducacionDeleteComponent } from './components/educacion-delete/educacion-delete.component';
import { EducacionUpdateComponent } from './components/educacion-update/educacion-update.component';

const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'inicio'},
  {path:'educacion-add', component:EducacionAddComponent},
  {path:'educacion-delete', component:EducacionDeleteComponent},
  {path:'educacion-update/:id', component:EducacionUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
