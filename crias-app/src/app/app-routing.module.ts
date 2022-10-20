import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProveedorComponent } from './Componentes/editar-proveedor/editar-proveedor.component';
import { HomeComponent } from './Componentes/inicio/home.component';
import { RegistrarProveedorComponent } from './Componentes/registrar-proveedor/registrar-proveedor.component';
import { ProveedoresComponent } from './Componentes/proveedores/proveedores.component';

import { CriasComponent } from './Componentes/crias/crias.component';
import { RegistrarCriasComponent } from './Componentes/registrar-crias/registrar-crias.component';
import { EditarCriasComponent } from './Componentes/editar-crias/editar-crias.component';
import { RegistrarSensorComponent } from './Componentes/registrar-sensor/registrar-sensor.component';
import { SensoresComponent } from './Componentes/sensores/sensores.component';

const routes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch:'full' },
  { path: 'inicio', component:HomeComponent },
  { path: 'proveedores', component:ProveedoresComponent },
  { path: 'proveedores/registrar', component:RegistrarProveedorComponent },
  { path: 'proveedores/editar/:id', component:EditarProveedorComponent },

  { path: 'crias', component:CriasComponent },
  { path: 'crias/registrar', component:RegistrarCriasComponent },
  { path: 'crias/:id/editar', component:EditarCriasComponent },
  { path: 'crias/:id/sensores', component:SensoresComponent },
  { path: 'crias/:id/sensores/registrar', component:RegistrarSensorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
