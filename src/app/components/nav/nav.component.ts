import { Component, EventEmitter, Output } from '@angular/core'
import { FiguritaService } from 'src/app/services/figurita.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  nombreABuscar = ""
  @Output() stringToSearch = new EventEmitter<string>()

  constructor(private figuritaService: FiguritaService) {}

  async realizarBusqueda() {
    this.stringToSearch.emit(this.nombreABuscar)
  }

}
