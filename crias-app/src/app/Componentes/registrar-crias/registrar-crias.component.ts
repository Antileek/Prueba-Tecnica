import { Cria } from 'src/app/Models/cria.model';
import { CriaService } from 'src/app/Services/cria.service';
import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Models/proveedor.model';
import { ProveedorService } from '../../Services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-crias',
  templateUrl: './registrar-crias.component.html',
  styleUrls: ['./registrar-crias.component.css']
})
export class RegistrarCriasComponent implements OnInit {
  public proveedores : Proveedor[] = [];
  public cria : Cria = {}; 
  constructor(private proveedorServicio:ProveedorService, private router : Router, private criaService : CriaService) { }
  
  ngOnInit(): void {
    this.listaProveedores();
  }

  listaProveedores()
  {
    this.proveedorServicio.obtenerProveedores().subscribe(
      res=> {
        console.log(res)
        this.proveedores =<any>res;
      },
      err => console.log(err)
    );
  }

  registrar()
  {
    delete this.cria.ID;
    if(this.cria.ColorMusculo! < 3 || this.cria.ColorMusculo! > 5 ||
      this.cria.Peso! < 15 || this.cria.Peso! > 25 ||
      this.cria.CalidadMarmoleo! > 2)
      {
        this.cria.GrasaTipo = 'Grasa Tipo 2';
      }
      else
      this.cria.GrasaTipo = 'Grasa Tipo 1';
    this.criaService.registrarCrias(this.cria).subscribe();
    this.router.navigate(['/crias']);
  }
  
}

