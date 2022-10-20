import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Models/proveedor.model';
import { ProveedorService } from '../../Services/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {
  
  public proveedor: Proveedor = {
    ID : 0,
    Nombre : ''
  }
  
  constructor(private proveedorServicio : ProveedorService, private router:Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['id'])
    {
      this.proveedorServicio.obtenerProveedorById(params['id']).subscribe(
        res=> {
         this.proveedor  = res[0];
        console.log(this.proveedor);
      },
      err => console.log(err)
    );
      
    }
  }

  editar()
  {
    console.log("desde editar provedor")
    console.log(this.proveedor.ID)
    console.log(this.proveedor.Nombre)
    this.proveedorServicio.editarProveedor(this.proveedor.ID,this.proveedor).subscribe(
      res=> {
        console.log(res)
        this.router.navigate(['/proveedores'])
      },
      err => console.log(err)
    );
    
  }
}
