import { Component, OnInit } from '@angular/core';
import { Cria } from 'src/app/Models/cria.model';
import { Router } from '@angular/router';
import { CriaService } from 'src/app/Services/cria.service';
@Component({
  selector: 'app-crias',
  templateUrl: './crias.component.html',
  styleUrls: ['./crias.component.css']
})
export class CriasComponent implements OnInit {


  public crias : Cria[] = []

  constructor(private criaService:CriaService, private router : Router) { }

  ngOnInit(): void {
    this.listaCrias();
  }

  listaCrias()
  {
    this.criaService.obtenerCrias().subscribe(
      res=> {
        console.log(res)
        this.crias =res;
      },
      err => console.log(err)
    );
  }

  eliminarCria(id?:number)
  {
    this.criaService.eliminarCrias(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listaCrias();
      },
      err=> console.log(err)
      );
  }

  editarCria(id?:number)
  {
    this.router.navigate(['crias/'+id+'/editar'])
  }

  registrarSensor(id?:number)
  {
    this.router.navigate(['crias/'+id+'/sensores'])
  }
}
