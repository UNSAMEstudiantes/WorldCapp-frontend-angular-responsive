import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Figurita } from 'src/app/domain/Figurita'


@Component({
  selector: 'app-figurita',
  templateUrl: './figurita.component.html',
  styleUrls: ['./figurita.component.css']
})

export class FiguritaComponent implements OnInit {
  @Input() isMain: boolean
  @Input() mostrarBoton :boolean
  @Output() eliminarFiguritaEvent = new EventEmitter<Figurita>()
  @Input() figurita!: Figurita

  constructor() {
    this.mostrarBoton= false
    this.isMain = false
  }

  ngOnInit() {
  }

  onClickBorrar(){
    this.eliminarFiguritaEvent.emit(this.figurita)
  }

  
}
