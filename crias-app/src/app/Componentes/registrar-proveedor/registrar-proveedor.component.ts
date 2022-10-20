import { Component, OnInit } from '@angular/core';
import {ProveedorService} from '../../Services/proveedor.service';
import { Proveedor } from '../../Models/proveedor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-proveedor',
  templateUrl: './registrar-proveedor.component.html',
  styleUrls: ['./registrar-proveedor.component.css']
})
export class RegistrarProveedorComponent implements OnInit {

  proveedor: Proveedor={
    ID : 0,
    Nombre : ''
  }
  
  constructor(private proveedorServicio : ProveedorService, private router:Router) { }

  ngOnInit(): void {
  }

  registrar()
  {
    delete this.proveedor.ID;
    this.proveedorServicio.registrarProveedor(this.proveedor).subscribe();
    this.router.navigate(['/proveedores']);
  }

}
