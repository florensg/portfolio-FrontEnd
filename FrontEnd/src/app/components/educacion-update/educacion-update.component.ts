import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-update',
  templateUrl: './educacion-update.component.html',
  styleUrls: ['./educacion-update.component.css']
})
export class EducacionUpdateComponent implements OnInit {
  Educacion:any;

  constructor(
    private educacionServicio:EducacionService
  ) { }

  ngOnInit(): void {

  }

}
