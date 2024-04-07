import { handleError } from 'src/app/services/configuration'
import { PuntoDeVentaService } from './../../services/puntodeventa.service'
import { OrdenPuntosDeVenta, PuntoDeVenta, tiposDeOrden } from './../../domain/puntodeventa'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-busqueda-sobres-view',
  templateUrl: './busqueda-sobres-view.component.html',
  styleUrls: ['./busqueda-sobres-view.component.css']
})
export class BusquedaSobresViewComponent implements OnInit {

  errorMessage : string | null = null

  tipo = 'PuntoDeVenta'
  listaDePuntosDeVenta !: PuntoDeVenta[]

  Orden = new OrdenPuntosDeVenta(
  tiposDeOrden.NADA,
  ''
  )
  constructor(private PuntoDeVentaService : PuntoDeVentaService) { }

  async ngOnInit() {
      this.ordenarPuntosDeVenta()
  }

  async ordenarPuntosDeVenta(){
    try {
      this.listaDePuntosDeVenta = await this.PuntoDeVentaService.getPuntoDeVentaOrdenado(this.Orden)
    }  
    catch(e){
      this.errorMessage = handleError(e)
      }
  }
  actualizarTipoOrden(valor: tiposDeOrden) {
    this.Orden.tipoOrden = valor
    this.ordenarPuntosDeVenta()

  }

  actualizarNombreABuscar(valor: string) {
    this.Orden.nombreABuscar = valor
    this.ordenarPuntosDeVenta()
  }

  closePopup() {
    this.errorMessage = null
  }

}
