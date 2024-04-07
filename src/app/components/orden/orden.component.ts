import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { tiposDeOrden } from 'src/app/domain/puntodeventa'


@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  filtro = tiposDeOrden

  @Output() radioValueChanged = new EventEmitter<tiposDeOrden>()
  
  constructor() { }
  ngOnInit() {
  }
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRadioChange(event: any) {
    const selectedValue = event.target.value
    const enumValue: tiposDeOrden = tiposDeOrden[selectedValue as keyof typeof tiposDeOrden]
    this.radioValueChanged.emit(enumValue)
}

}
