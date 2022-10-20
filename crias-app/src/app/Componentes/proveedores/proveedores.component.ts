import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Models/proveedor.model';
import { ProveedorService } from '../../Services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  public proveedores : Proveedor[] = [];
  constructor(private proveedorServicio:ProveedorService, private router : Router) { }

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

  eliminarProveedor(id?:number)
  {
    this.proveedorServicio.eliminarProveedor(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listaProveedores();
      },
      err=> console.log(err)
      );
  }

  editarProveedor(id?:number)
  {
    this.router.navigate(['proveedores/editar/'+id])
  }

}
