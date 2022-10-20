import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/inicio/home.component';
import { RegistrarProveedorComponent } from './Componentes/registrar-proveedor/registrar-proveedor.component';
import { EditarProveedorComponent } from './Componentes/editar-proveedor/editar-proveedor.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ProveedoresComponent } from './Componentes/proveedores/proveedores.component';
import { CriasComponent } from './Componentes/crias/crias.component';
import { EditarCriasComponent } from './Componentes/editar-crias/editar-crias.component';
import { RegistrarCriasComponent } from './Componentes/registrar-crias/registrar-crias.component';
import { RegistrarSensorComponent } from './Componentes/registrar-sensor/registrar-sensor.component';
import { SensoresComponent } from './Componentes/sensores/sensores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrarProveedorComponent,
    EditarProveedorComponent,
    ProveedoresComponent,
    CriasComponent,
    EditarCriasComponent,
    RegistrarCriasComponent,
    RegistrarSensorComponent,
    SensoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
