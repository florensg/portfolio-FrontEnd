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
  idEdu:any;

  constructor(
    private educacionServicio:EducacionService
  ) { 
   }

  ngOnInit(): void {

  }

}
