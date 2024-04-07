import { OrdenPuntosDeVenta, PuntoDeVenta } from './../domain/puntodeventa'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PuntoDeVentaService {

constructor(private httpClient: HttpClient) { }

async getPuntoDeVentaOrdenado(Orden: OrdenPuntosDeVenta) : Promise<PuntoDeVenta[]>{
  const PuntoDeVenta$ = this.httpClient.get<PuntoDeVenta[]>(Orden.serializar()) 
  const PuntoDeVentaJSON = await lastValueFrom(PuntoDeVenta$)
  return PuntoDeVentaJSON.map(PuntoDeVentaJSON => PuntoDeVenta.fromJSON(PuntoDeVentaJSON))
}

}

