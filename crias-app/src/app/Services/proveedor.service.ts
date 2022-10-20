import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../Models/proveedor.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  url = 'api/proveedor';
  constructor(private http: HttpClient) { }

  obtenerProveedores()
  {
    return this.http.get(this.url);
  }
  obtenerProveedorById(id:string)
  {
    return this.http.get<Proveedor[]>(this.url+'/'+id);
  }
  eliminarProveedor(id?:number)
  {
    return this.http.delete<Proveedor[]>(this.url+'/'+id);
  }
  registrarProveedor(proveedor:Proveedor)
  {
    return  this.http.post(this.url,proveedor);
  }
  editarProveedor(id: number | undefined,proveedor:Proveedor) : Observable<Proveedor>
  {
    console.log("desde servicio");
    return  this.http.put(this.url+'/'+proveedor.ID,proveedor);
  }

}


