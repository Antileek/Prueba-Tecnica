import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sensor } from 'src/app/Models/sensor.model';
import { SensorService } from 'src/app/Services/sensor.service';

@Component({
  selector: 'app-registrar-sensor',
  templateUrl: './registrar-sensor.component.html',
  styleUrls: ['./registrar-sensor.component.css']
})
export class RegistrarSensorComponent implements OnInit {
  sensor : Sensor = {
  }
  

  constructor(private sensorService : SensorService,private activatedRoute : ActivatedRoute, private router : Router ) { }

  ngOnInit(): void {
  }
  
  registrar()
  {
    const params = this.activatedRoute.snapshot.params;
    delete this.sensor.IdCria;
    console.log('a',this.sensor);
    if(this.sensor)
    {
      if(this.sensor.Temperatura! > 39.5 || this.sensor.FreCardiaca! < 70
         || this.sensor.FreCardiaca! > 80 || this.sensor.FreRespiratoria! < 15 
         || this.sensor.FreRespiratoria! > 20 || this.sensor.PreSanguinea! > 10)
      {
        
          this.sensorService.editarEstadoSalud(params['id'],{"EstadoSalud":"En cuarentena"}).subscribe();
      }
      else
      {
        this.sensorService.editarEstadoSalud(params['id'],{"EstadoSalud":"Saludable"}).subscribe();
      }
    }

    this.sensorService.registrarSensor(this.sensor,params['id']).subscribe();
    this.router.navigate(['/crias']);
  }
}
