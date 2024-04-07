import { Component, Input, OnInit } from '@angular/core'
import { PuntoDeVenta } from 'src/app/domain/puntodeventa'

@Component({
  selector: 'app-puntodeventa',
  templateUrl: './puntodeventa.component.html',
  styleUrls: ['./puntodeventa.component.css']
})
export class PuntodeventaComponent implements OnInit {
    
  @Input() puntodeventa!: PuntoDeVenta

  constructor() { }

  ngOnInit() {
  }

}




