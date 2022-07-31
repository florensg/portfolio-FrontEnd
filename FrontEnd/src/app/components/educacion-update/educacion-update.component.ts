import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-educacion-update',
  templateUrl: './educacion-update.component.html',
  styleUrls: ['./educacion-update.component.css']
})
export class EducacionUpdateComponent implements OnInit {
  formu:FormGroup;
  id:any;

  constructor(
    public formulario:FormBuilder,
    private educacionServicio:EducacionService,
    private activeRoute:ActivatedRoute,
    private ruteador:Router
  ) { 
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.formu=this.formulario.group({
      idEdu: [this.id],
      tituloEdu: [''],
      fechaEdu: [0],
      descripcionEdu: [''],
      imagenEdu: ['']
    })

  }

  ngOnInit(): void {

  }

  editarDatos():any{
    console.log(this.formu.value);
      this.educacionServicio.updateEducacion(this.formu.value).subscribe();
      this.ruteador.navigateByUrl('');
  }

}
