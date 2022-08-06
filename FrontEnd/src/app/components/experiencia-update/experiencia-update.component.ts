import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia-update',
  templateUrl: './experiencia-update.component.html',
  styleUrls: ['./experiencia-update.component.css']
})
export class ExperienciaUpdateComponent implements OnInit {
  formu:FormGroup;
  id:any;

  constructor(
    public formulario:FormBuilder,
    private experienciaServicio:ExperienciaService,
    private activeRoute:ActivatedRoute,
    private ruteador:Router
  ) { 
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.formu=this.formulario.group({
      idExp: [this.id],
      tituloExp: [''],
      fechaExp: [0],
      descripcionExp: [''],
      imagenExp: ['']
    })

  }

  ngOnInit(): void {

  }

  editarDatos():any{
    console.log(this.formu.value);
      this.experienciaServicio.updateExperiencia(this.formu.value).subscribe();
      this.ruteador.navigateByUrl('');
  }

}
