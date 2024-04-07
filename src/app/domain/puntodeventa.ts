import { REST_SERVER_URL, USUARIO_LOGGED_ID } from "../services/configuration"

export class PuntoDeVenta {
    constructor(
      public tipo?: string,
      public nombre?: string,
      public direccion?: string,
      public stockSobres?: number,
      public puntoX?: number,
      public puntoY?: number,
      public pedidosPendientes?: void[],
      public precioPorSobre?: number,
      public distancia?: number
){}

static fromJSON(PuntoDeVentaJSON: PuntoDeVentaJSON): PuntoDeVenta{
  return Object.assign(new PuntoDeVenta(), PuntoDeVentaJSON)
}

toJSON(): PuntoDeVentaJSON {
  return {
    tipo: this.tipo,
    nombre: this.nombre,
    direccion:this.direccion,
    stockSobres: this.stockSobres,
    puntoX: this.puntoX,
    puntoY: this.puntoY,
    pedidosPendientes: this.pedidosPendientes,
    precioPorSobre: this.precioPorSobre,
    distancia: this.distancia
}
}
}

export type PuntoDeVentaJSON = {

      tipo?: string,
      nombre?: string,
      direccion?: string,
      stockSobres?: number,
      puntoX?: number,
      puntoY?: number,
      pedidosPendientes?: void[],
      precioPorSobre?: number,
      distancia?: number
}

export class OrdenPuntosDeVenta{
  constructor(
      public  tipoOrden : tiposDeOrden,
      public  nombreABuscar : string
  ){}
  public serializar(){
    return `${REST_SERVER_URL}/puntosdeventa/${USUARIO_LOGGED_ID}/Ordenado?tipoOrden=${this.tipoOrden}&nombreABuscar=${this.nombreABuscar}`
}
}

export enum tiposDeOrden{
  NADA='',
  MENORDISTANCIA='menordistancia',
  MASBARATOS='masbaratos',
  MASSOBRES='massobres',
  MASCERCANOS='mascercanos'
}



