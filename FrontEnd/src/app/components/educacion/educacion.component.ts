import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  public educaciones: Educacion[]=[];
  
  constructor(
    private educacionService: EducacionService
    ) { }

  ngOnInit(): void {
    this.getEducacion();
    
  }

    public getEducacion():void{
    this.educacionService.getEducacion().subscribe({
      next:(Response: Educacion[]) => {
        this.educaciones=Response;
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  borrarEducacion(idEdu:number,iControl:any){
    console.log(idEdu);
    if(window.confirm("¿Desea borrar esta informacion?")){
      this.educacionService.deleteEducacion(idEdu).subscribe((resp)=>{
        this.educaciones.splice(iControl,1)
      });
    }
    
  }

}
