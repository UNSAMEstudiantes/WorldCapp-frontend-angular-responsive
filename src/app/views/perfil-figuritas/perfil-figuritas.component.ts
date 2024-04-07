import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { UsuarioService } from 'src/app/services/usuario.service'
import { Figurita } from 'src/app/domain/Figurita'
import { handleError } from 'src/app/services/configuration'

@Component({
  selector: 'app-perfil-figuritas',
  templateUrl: './perfil-figuritas.component.html',
  styleUrls: ['./perfil-figuritas.component.css']
})
export class PerfilFiguritasComponent implements OnInit {
  errorMessage : string | null = null
  listaFiguritas!: Figurita[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  borrar!: any

  constructor(private route: ActivatedRoute, private us: UsuarioService, private router: Router) {
    this.actualizarLista()
    this.borrar=this.route.snapshot.data['borrar'](this.us)
  }


  async ngOnInit() {
    this.actualizarLista()
  }

  manejarBoton() {
    const ruta = this.route.snapshot.data['goTo']
    this.router.navigate([`/busqueda-figuritas/${ruta}`])
  }


  async manejarBorrar(figurita: Figurita) {
    try {
      await this.borrar(figurita.id)
    } catch (errorActualizar) {
      this.errorMessage = handleError(errorActualizar)
    }
    await this.actualizarLista()
  }

  private async actualizarLista() {
    try{
      this.listaFiguritas = await this.route.snapshot.data['lista'](this.us)
    }catch(errorActualizar){
      this.errorMessage = handleError(errorActualizar)
    }
  }

  closePopup() {
    this.errorMessage = null
  }
}