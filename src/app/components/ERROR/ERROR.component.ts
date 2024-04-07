import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-ERROR',
  templateUrl: './ERROR.component.html',
  styleUrls: ['./ERROR.component.css']
})
export class ERRORComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() errorText !: string
}
