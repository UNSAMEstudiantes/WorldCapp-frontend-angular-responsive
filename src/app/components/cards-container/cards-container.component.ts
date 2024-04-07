import { UsuarioService } from 'src/app/services/usuario.service'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Figurita } from 'src/app/domain/Figurita'
import { TipoPerfil } from 'src/app/domain/tipoPerfil.enum'


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {


  @Input() cards!: any[]
  @Input() mostrarBoton: boolean
  @Input() isMain: boolean
  @Output() manejoFigurita: EventEmitter<Figurita> = new EventEmitter<Figurita>()
  @Output() botonEvent = new EventEmitter<void>()
  @Output() manejarBorrar = new EventEmitter<Figurita>()
  tipoLista !:TipoPerfil
  @Input() cardType = ""

  constructor(private us: UsuarioService) {
    this.mostrarBoton = false
    this.isMain = false
  }

  async ngOnInit() {
  }
  
  onCLickButton(){
    this.botonEvent.emit()
  }

  async onClickFigurita(jugador:Figurita){
    this.manejoFigurita.emit(jugador)
  }

  eliminarFigurita(figurita: Figurita) {
    this.manejarBorrar.emit(figurita)
  }
}
