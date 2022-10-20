import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cria } from 'src/app/Models/cria.model';
import { Proveedor } from 'src/app/Models/proveedor.model';
import { CriaService } from 'src/app/Services/cria.service';
import { ProveedorService } from 'src/app/Services/proveedor.service';

@Component({
  selector: 'app-editar-crias',
  templateUrl: './editar-crias.component.html',
  styleUrls: ['./editar-crias.component.css']
})
export class EditarCriasComponent implements OnInit {
  public cria : Cria = {};
  public proveedores : Proveedor[] = [];
  constructor(private proveedorServicio:ProveedorService,private criaService : CriaService, private router:Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.listaProveedores();
    const params = this.activatedRoute.snapshot.params;
    if(params['id'])
    {
      this.criaService.obtenerCriasById(params['id']).subscribe(
        res=> {
         this.cria  = res[0];
        console.log(this.cria);
      },
      err => console.log(err)
    );
      
    }
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

  editar()
  {
    delete this.cria.Fecha;
    if(this.cria.ColorMusculo! < 3 || this.cria.ColorMusculo! > 5 ||
      this.cria.Peso! < 15 || this.cria.Peso! > 25 ||
      this.cria.CalidadMarmoleo! > 2)
      {
        this.cria.GrasaTipo = 'Grasa Tipo 2';
      }
      else
      this.cria.GrasaTipo = 'Grasa Tipo 1';
    this.criaService.editarCrias(this.cria.ID,this.cria).subscribe(
      res=> {
        console.log(res)
        this.router.navigate(['/crias'])
      },
      err => console.log(err)
    );
    
  }

}
