import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionUpdateComponent } from './components/educacion-update/educacion-update.component';
import { EducacionAddComponent } from './components/educacion-add/educacion-add.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ExperienciaAddComponent } from './components/experiencia-add/experiencia-add.component';
import { ExperienciaUpdateComponent } from './components/experiencia-update/experiencia-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    EducacionUpdateComponent,
    EducacionAddComponent,
    InicioComponent,
    ExperienciaAddComponent,
    ExperienciaUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
