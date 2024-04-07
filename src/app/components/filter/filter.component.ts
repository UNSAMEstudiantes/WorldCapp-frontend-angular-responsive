
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Filtros } from 'src/app/domain/Filtros'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css', './filter-figuritas.component.css']
})
export class FilterComponent implements OnInit {
  
  desdeValor?: number
  hastaValor?: number
  onFire = false
  esPromesa = false
  error = ""
  esValido = ""
  @Input() figuritasFilter = false
  @Output() filtersFigurita = new EventEmitter<object>()
  constructor() { }

  ngOnInit() {
  }

  enviarFiltros(){
    const filtros = this.crearFiltrosFigurita()
    try{
      filtros.validarValoraciones()
      this.filtersFigurita.emit(filtros)
    }catch(e: any){
      this.esValido = "invalido"
      this.error = e.message
      setTimeout(() => this.error = "", 2000)
    }
  }

  crearFiltrosFigurita(): Filtros{
    const filtros = new Filtros(
      "",
      this.desdeValor,
      this.hastaValor,
      String(this.onFire),
      String(this.esPromesa)
    )

    return filtros
  }

  removerBorde(){
    this.esValido = ""
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}
