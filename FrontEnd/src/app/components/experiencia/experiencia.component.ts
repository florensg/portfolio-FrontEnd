import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias: Experiencia[]=[];
  
  constructor(
    private experienciaService: ExperienciaService
    ) { }

  ngOnInit(): void {
    this.getExperiencia();
    
  }

    public getExperiencia():void{
    this.experienciaService.getExperiencia().subscribe({
      next:(Response: Experiencia[]) => {
        this.experiencias=Response;
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  borrarExperiencia(idEdu:number,iControl:any){
    console.log(idEdu);
    if(window.confirm("¿Desea borrar esta informacion?")){
      this.experienciaService.deleteExperiencia(idEdu).subscribe((resp)=>{
        this.experiencias.splice(iControl,1)
      });
    }
    
  }

}
