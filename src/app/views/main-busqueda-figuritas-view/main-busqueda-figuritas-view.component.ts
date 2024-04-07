import { Component, OnInit} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Figurita } from 'src/app/domain/Figurita'
import { FiguritaService } from 'src/app/services/figurita.service'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-main-busqueda-figuritas-view',
  templateUrl: './main-busqueda-figuritas-view.component.html',
  styleUrls: ['./main-busqueda-figuritas-view.component.css']
})
export class MainBusquedaFiguritasViewComponent implements OnInit{
  figuritasCedidas !: Figurita[]

    constructor(private figuritaService: FiguritaService, private route: ActivatedRoute, private us:UsuarioService, private router: Router) {

    }

  async ngOnInit() {

  }
}
