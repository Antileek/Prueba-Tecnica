import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cria } from '../Models/cria.model';

@Injectable({
  providedIn: 'root'
})
export class CriaService {

  url = 'api/cria';
  constructor(private http: HttpClient) { }

  obtenerCrias()
  {
    return this.http.get<Cria[]>(this.url);
  }
  obtenerCriasById(id:string)
  {
    return this.http.get<Cria[]>(this.url+'/'+id);
  }
  eliminarCrias(id?:number)
  {
    return this.http.delete<Cria[]>(this.url+'/'+id);
  }
  registrarCrias(cria:Cria)
  {
    return  this.http.post(this.url,cria);
  }
  editarCrias(id: number | undefined,cria:Cria) : Observable<Cria>
  {
    return  this.http.put(this.url+'/'+cria.ID,cria);
  }
}
