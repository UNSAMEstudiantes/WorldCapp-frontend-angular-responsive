import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-Error-PopUp',
  templateUrl: './Error-PopUp.component.html',
  styleUrls: ['./Error-PopUp.component.css']
})
export class ErrorPopupComponent {
  @Input() errorMessage: string | null = null
  @Input() closePopup !: void 

}
