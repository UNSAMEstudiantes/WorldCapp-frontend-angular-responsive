import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FiguritaService } from 'src/app/services/figurita.service'
import { UsuarioService } from 'src/app/services/usuario.service'
import { FiguritaDetails } from 'src/app/domain/FiguritaDetails'
import { USUARIO_LOGGED_ID } from 'src/app/services/configuration'

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {
  figurita: FiguritaDetails = new FiguritaDetails()
  errorMessage: string | null = null
  successMessage: string | null = null
  resultadoOperacion: string = ''
  messageNotificacion: string = ''

  constructor(
    private route: ActivatedRoute,
    private figuritaService: FiguritaService,
    private usuarioService: UsuarioService
  ) {}

  async solicitarFigurita() {
  
    const cedidaPor = this.route.snapshot.params['UsuarioId']
    const figuritaId = this.route.snapshot.params['id']

    try {
      await this.usuarioService.solicitarFigurita(figuritaId, USUARIO_LOGGED_ID, cedidaPor)
      this.successMessage = 'Figurita solicitada correctamente'
      this.errorMessage = null
      this.resultadoOperacion = 'success'
      this.messageNotificacion = 'Figurita solicitada correctamente'
    } catch (e) {
      this.errorMessage = 'Fallo la solicitud'
      this.successMessage = null
      this.resultadoOperacion = 'failure'
      this.messageNotificacion = 'Fallo la solicitud'
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const figuritaId = params['id']
      const cedidaPor = params['UsuarioId']
      this.figuritaService.getFiguritaById(figuritaId, cedidaPor).then(figurita => {
        console.log('Figurita obtenida:', figurita)
        this.figurita = figurita
      })
    })
  }
}
