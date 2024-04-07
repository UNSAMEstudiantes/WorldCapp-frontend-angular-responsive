import { Component, OnInit } from '@angular/core'
import { Usuario } from 'src/app/domain/Usuario'
import { handleError } from 'src/app/services/configuration'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-layout-perfil-view',
  templateUrl: './layout-perfil-view.component.html',
  styleUrls: ['./layout-perfil-view.component.css']
})
export class LayoutPerfilViewComponent implements OnInit{
  errorMessage: string | null = null

  usuario !:Usuario
  constructor(private us:UsuarioService) {

  }

  async ngOnInit() {
    try{
      this.usuario = await this.us.getUsuario()
    }catch(err){
      this.errorMessage = handleError(err)
    }
  }
  
  closePopup() {
    this.errorMessage = null
  }
  
}