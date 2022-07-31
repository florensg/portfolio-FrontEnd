import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-add',
  templateUrl: './educacion-add.component.html',
  styleUrls: ['./educacion-add.component.css']
})
export class EducacionAddComponent implements OnInit {
  formularioDatos:FormGroup;
  public educaciones: Educacion[]=[];


  constructor(
    public formulario:FormBuilder, 
    private educacionService:EducacionService,
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
      this.formularioDatos.reset();
      this.educaciones.push();
  }

}
