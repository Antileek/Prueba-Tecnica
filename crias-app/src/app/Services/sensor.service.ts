import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sensor } from '../Models/sensor.model';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  
  url = 'api/cria';
  constructor(private http: HttpClient) { }

  obtenerSensores(id:string)
  {
    return this.http.get<Sensor[]>(this.url+'/'+ id + '/sensor' );
  }
  obtenerSensorById(id:string)
  {
    return this.http.get<Sensor[]>(this.url+'/'+ id + 'sensor/ultimo');
  }
  registrarSensor(sensor:Sensor,id:string)
  {
    return  this.http.post(this.url+'/'+ id,sensor);
  }

  editarEstadoSalud(id: number | undefined, estadoSalud : object)
  {
    console.log("editarEstadoSalud");
    console.log(id);
    console.log(estadoSalud);
    return  this.http.put(this.url+'/'+id + '/sensor',estadoSalud);
  }

}
