import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sensor } from 'src/app/Models/sensor.model';
import { SensorService } from 'src/app/Services/sensor.service';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.css']
})
export class SensoresComponent implements OnInit {
  public sensores : Sensor[] = []
  constructor(private sensorService : SensorService,private router : Router,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.listaSensores();
  }

  listaSensores()
  {
    const params = this.activatedRoute.snapshot.params;
    this.sensorService.obtenerSensores(params['id']).subscribe(
      res=> {
        console.log(res)
        this.sensores = res;
      },
      err => console.log(err)
    );
  }

  registrarSensor()
  {
    const params = this.activatedRoute.snapshot.params;
    this.router.navigate(['crias/'+params['id']+'/sensores/registrar'])
  }
}
