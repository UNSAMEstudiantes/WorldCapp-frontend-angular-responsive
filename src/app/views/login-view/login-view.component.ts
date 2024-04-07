import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { handleError } from 'src/app/services/configuration'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  loginForm!: FormGroup
  errorMessage: string | null = null

  constructor(private us: UsuarioService, private fb: FormBuilder, private router: Router, private cdr :ChangeDetectorRef) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
    })
  }

  ngOnInit() {
  }
  mostrarErrores(): void {
    Object.values(this.loginForm.controls).forEach(control => {
      control.markAsTouched()
      control.markAsDirty()
    })
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const userName = this.loginForm.value.usuario
      try {
        await this.us.validarUsuario(userName)
        this.router.navigate(['/main-busqueda-figuritas'])
      } catch (err) {
        setTimeout(() => {
          this.errorMessage = handleError(err)
        })
      }
    } else {
      this.mostrarErrores()
    }
  }

  closePopup() {
    this.errorMessage = null
  }
}
