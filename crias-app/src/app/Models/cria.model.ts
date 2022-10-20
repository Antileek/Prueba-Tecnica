import { formatDate } from "@angular/common";
import { Proveedor } from "./proveedor.model";

export interface Cria {
    ID? : number,
    IdProveedor? : number,
    Fecha? : Date ,
    Peso? : number,
    Costo? : number,
    Nombre? : string,
    Descripcion? : string,
    EstadoSalud? : string,
    ColorMusculo? : number,
    CalidadMarmoleo? : number,
    GrasaTipo? : string
}
