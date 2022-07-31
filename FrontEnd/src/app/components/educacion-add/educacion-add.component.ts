import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-add',
  templateUrl: './educacion-add.component.html',
  styleUrls: ['./educacion-add.component.css']
})
export class EducacionAddComponent implements OnInit {
  formularioDatos:FormGroup;


  constructor(
    public formulario:FormBuilder, 
    private educacionService:EducacionService,
    private ruteador:Router
    ) {
    this.formularioDatos=this.formulario.group({
      idEdu: [0],
      tituloEdu: [''],
      fechaEdu: [0],
      descripcionEdu: [''],
      imagenEdu: ['']
    })
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.formularioDatos.value);
      this.educacionService.addEducacion(this.formularioDatos.value).subscribe();
      this.ruteador.navigateByUrl('');
  }

}
