/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FiguritaService } from 'src/app/services/figurita.service'
import { UsuarioService } from 'src/app/services/usuario.service'
import { Router } from '@angular/router'
import { Figurita } from 'src/app/domain/Figurita'
import { Filtros } from 'src/app/domain/Filtros'
import { handleError } from 'src/app/services/configuration'


@Component({
  selector: 'app-busqueda-figuritas-view',
  templateUrl: './busqueda-figuritas-view.component.html',
  styleUrls: ['./busqueda-figuritas-view.component.css']
})
export class BusquedaFiguritasViewComponent implements OnInit {
  listaFiguritas : Figurita[] = []
  @Input() comingFromMain = false
  tipoCard = "Figurita"
  filtros: Filtros = new Filtros ()
  errorMessage: string | null = null
  messageNotificacion: string = ""
  resultadoOperacion: string = ""
  constructor(private figuritaService: FiguritaService, private route: ActivatedRoute, private us:UsuarioService, private router: Router) {

  }

  async ngOnInit() {
    this.filtros = new Filtros()
    try{
      this.listaFiguritas = await this.route.snapshot.data['lista'](this.figuritaService, this.filtros)
    }catch(e){
      this.errorMessage = handleError(e)
    }
  }

  async filtrarFiguritas(filtros: any){
    try{
      this.filtros.desdeValor = filtros.desdeValor
      this.filtros.hastaValor = filtros.hastaValor
      this.filtros.onFire = filtros.onFire
      this.filtros.esPromesa = filtros.esPromesa
      this.listaFiguritas = await this.route.snapshot.data['lista'](this.figuritaService, this.filtros)
    }catch(e){
      this.errorMessage = handleError(e)
    } 
  }

  async filtrarPorNombre(nombreABuscar: string){
    try{
      this.filtros.nombre = nombreABuscar
      this.listaFiguritas = await this.route.snapshot.data['lista'](this.figuritaService, this.filtros)
    }catch(e){
      this.errorMessage = handleError(e)
    }
  }

  async recibirFigurita(jugador: Figurita) {
    const idJugador = jugador.id
    if(idJugador){
      const onClick = await this.route.snapshot.data['onClick'](this.us)
      this.mostrarNotificacionSuccess()
      if (onClick){
        onClick(idJugador)}
      else{
        this.router.navigate(['/details', idJugador])
      }
    }else{
      this.mostrarNotificacionFailure()
    }
  }

  closePopup() {
    this.errorMessage = null
  }

  mostrarNotificacionSuccess(){
      this.resultadoOperacion = "success"
      this.messageNotificacion = "La figurita se añadio correctamente"
      this.cerrarNotificacion()
  }

  mostrarNotificacionFailure(){
    this.resultadoOperacion = "failure"
    this.messageNotificacion = "Ocurrio un error al intentar añadir la figurita"
    this.cerrarNotificacion()
  }

  cerrarNotificacion(){
    setTimeout(() => {
      this.resultadoOperacion = ""
      this.messageNotificacion = ""
    }, 2000)
  }
}
