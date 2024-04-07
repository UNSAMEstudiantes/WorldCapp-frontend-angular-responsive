/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TipoDeUsuario } from 'src/app/domain/TipoDeUsuario'
import { Usuario } from 'src/app/domain/Usuario'
import { handleError } from 'src/app/services/configuration'
import { UsuarioService } from 'src/app/services/usuario.service'
@Component({
  selector: 'app-perfil-info-view',
  templateUrl: './perfil-info-view.component.html',
  styleUrls: ['./perfil-info-view.component.css']
})
export class PerfilInfoViewComponent implements OnInit {

  errorMessage: string | null = null
  messageNotificacion: string = ""
  resultadoOperacion: string = ""
  usuarioForm!: FormGroup
  usuarioData !: Usuario
  provincias: string[] = [
    'Buenos Aires',
    'Córdoba',
    'Santa Fe',
    'Mendoza',
    'Tucumán',
    'Entre Ríos',
    'Salta',
    'Chaco',
    'Corrientes',
    'Misiones'
  ]
  localidades:
    string[] = [
      'Córdoba', 'La Plata', 'San Martin', 'Villa María', 'Río Cuarto', 'Carlos Paz', 'Jesús María', 'Rosario', 'Santa Fe', 'Rosario', 'Venado Tuerto', 'Rafaela', 'Corrientes', 'Goya', 'Mercedes', 'Curuzú Cuatiá', 'Bella Vista'
    ]
  tiposDeUsuario = Object.values(TipoDeUsuario)

  constructor(private fb: FormBuilder, private us: UsuarioService) {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fechaDeNacimiento: [new Date(), [Validators.required]],
      direccion: this.fb.group({
        provincia: ['', [Validators.required]],
        localidad: ['', [Validators.required]],
        calle: ['', [Validators.required]],
        altura: [0, [Validators.required, Validators.min(1)]],
        ubiGeografica: this.fb.group({
          x: [0, [Validators.required]],
          y: [0, [Validators.required]]
        })
      }),
      distanciaMaxima: [0, [Validators.required, Validators.min(1)]],
      tipo: ['', [Validators.required]]
    })
  }

  async ngOnInit() {
    try{
      this.usuarioData = await this.us.getUsuario()
      this.usuarioForm.patchValue(this.usuarioData)
    }catch(err){
      this.errorMessage = handleError(err)
    }
  }

  mostrarErrores(): void {
    Object.values(this.usuarioForm.controls).forEach(control => {
      control.markAsTouched()
      control.markAsDirty()
    })
    const direccionFormGroup = this.usuarioForm.get('direccion') as FormGroup

    Object.values(direccionFormGroup.controls).forEach(control => {
      control.markAsTouched()
      control.markAsDirty()
    })
    const ubiGeoFormGroup = this.usuarioForm.get('direccion')?.get('ubiGeografica') as FormGroup
    Object.values(ubiGeoFormGroup.controls).forEach(control => {
      control.markAsTouched()
      control.markAsDirty()
    })
  }


  async onSubmit() {
    if (this.usuarioForm.valid) {
      const nuevosDatos = this.usuarioForm.value
      this.usuarioData = { ...this.usuarioData, ...nuevosDatos }
      try {
        await this.us.actualizarUsuario(this.usuarioData)
        this.mostrarNotificacionSuccess()
      }
      catch (error: any) {
        const errorMessage = handleError(error)
        this.mostrarNotificacionFailure(errorMessage)
      }
    } else {
      this.mostrarErrores()
    }
  }

  mostrarNotificacionFailure(errorMessage: string){
    this.resultadoOperacion = "failure"
    this.messageNotificacion = `No se pudieron guardar los cambios, motivo: ${errorMessage}`
    this.cerrarNotificacion()
  }

  mostrarNotificacionSuccess(){
    this.resultadoOperacion = "success"
    this.messageNotificacion = "Se guardaron los cambios"
    this.cerrarNotificacion()
  }

  cerrarNotificacion(){
    setTimeout(() => {
      this.resultadoOperacion = ""
      this.messageNotificacion = ""
    }, 3000)
  }

  closePopup() {
    this.errorMessage = null
  }
}
