import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 public active : boolean = false

  constructor() { }
   ngOnInit() { }


   setActive(): void {
    this.active = !this.active
   
  }
  
 }