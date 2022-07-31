import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  public usuario : Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  public getUsuario():void{
    this.usuarioService.getUsuario().subscribe({
      next: (response:Usuario) => {
        this.usuario=response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }

  
}
