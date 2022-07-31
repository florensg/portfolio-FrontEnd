import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  cambio = new EventEmitter<boolean>()
  
  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/all`);
  }

  public addEducacion(educacion: Educacion):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/educacion/add`, educacion);
  }

  public updateEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/update`, educacion);
  }

  public deleteEducacion(educacionId: number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/educacion/delete/${educacionId}`);
  }

}
