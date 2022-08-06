import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia-add',
  templateUrl: './experiencia-add.component.html',
  styleUrls: ['./experiencia-add.component.css']
})
export class ExperienciaAddComponent implements OnInit {
  formuDatos:FormGroup;


  constructor(
    public formulario:FormBuilder, 
    private experienciaService:ExperienciaService,
    private ruteador:Router
    ) {
    this.formuDatos=this.formulario.group({
      idExp: [0],
      tituloExp: [''],
      fechaExp: [0],
      descripcionExp: [''],
      imagenExp: ['']
    })


  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.formuDatos.value);
      this.experienciaService.addExperiencia(this.formuDatos.value).subscribe();
      this.ruteador.navigateByUrl('');
  }
}
