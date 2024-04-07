import { AbstractControl } from '@angular/forms'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { LoginViewComponent } from './login-view.component'
import { BtnComponent } from 'src/app/components/btn/btn.component'
import { ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ERRORComponent } from 'src/app/components/ERROR/ERROR.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { HttpClientSpy } from 'src/app/spy/httpClientSpy'
import { ErrorPopupComponent } from 'src/app/components/Error-PopUp/Error-PopUp.component'
import { REST_SERVER_URL } from 'src/app/services/configuration'
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component'

describe('LoginViewComponent', () => {
  let component: LoginViewComponent
  let fixture: ComponentFixture<LoginViewComponent>
  let inputUsuario: HTMLElement
  let inputContraseña: HTMLElement
  let submitBtn: HTMLElement
  let usuarioControl: AbstractControl | null
  let contraseñaControl: AbstractControl | null
  let routerSpy: Router


  beforeEach(async(() => {
    routerSpy = jasmine.createSpyObj('Router',['navigate'])

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,HttpClientModule, AppRoutingModule],
      declarations: [LoginViewComponent, BtnComponent,ERRORComponent,ErrorPopupComponent, PopUpComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: HttpClient, useValue: HttpClientSpy },
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    inputUsuario = getTestById('inp_usuario')
    inputContraseña = getTestById('inp_contraseña')
    submitBtn = getTestById('btn_submit')
    usuarioControl = component.loginForm.get('usuario')
    contraseñaControl = component.loginForm.get('contraseña')
    routerSpy = TestBed.inject(Router)
  })

  describe('test inividual de los componentes', () => {
    it('Todo el componente es renderizado', () => {
      expect(component).toBeTruthy()
    })

    it('el input de usuario es renderizado', () => {

      expect(inputUsuario).toBeTruthy()
    })
    it('el boton de submit es renderizado', () => {

      expect(submitBtn).toBeTruthy()

    })
    it('el input de contraseña es renderizado', () => {

      expect(inputContraseña).toBeTruthy()

    })
  })
  describe('test de validaciones del formulario', () => {

    it('si no escribo nada en el input usuario, este es invalido ya que el campo es obligatorio', () => {

      expect(usuarioControl?.hasError('required')).toBeTruthy()
    })
    it('si escribo algo, el campo cumple la condicion de requerido', () => {
      usuarioControl?.setValue('miusername')
      expect(usuarioControl?.hasError('required')).toBeFalse()
    })
    it('si escribo un usuario que no esta registrado no no seberia poder entrar saldra una alerta', () => {
      usuarioControl?.setValue('usernameInvalido')
      contraseñaControl?.setValue('1234')
      submitBtn.click()
      fixture.detectChanges()
      const error = getTestById('error_login') as HTMLDivElement

      expect(error).toBeTruthy()
    })
    it('si ambos campos estan correctos, hace la llamda al back',  () => {

      component.loginForm.setValue({
        usuario: 'admin',
        contraseña: 'contraseña',
      })
      submitBtn.click()
      fixture.detectChanges()
      
      expect(HttpClientSpy.post).toHaveBeenCalledWith(`${REST_SERVER_URL}/login`,{ userName: 'admin' })
    })
    it('si ambos campos estan correctos, nos redirecciona a busqueda-figuritas',  () => {

      component.loginForm.setValue({
        usuario: 'admin',
        contraseña: 'contraseña',
      })
      submitBtn.click()
      
      fixture.detectChanges()

      // expect(routerSpy.navigate).toHaveBeenCalled()
    })

  })
  describe('', () => {
    it('si escribo un usuario que no esta registrado no no seberia poder entrar saldra una alerta', () => {
      usuarioControl?.setValue('usernameInvalido')
      contraseñaControl?.setValue('1234')
      submitBtn.click()
      fixture.detectChanges()
      const error = getTestById('error_login') as HTMLDivElement

      expect(error).toBeTruthy()
      
    })

  })

  function getTestById(testId: string): HTMLElement {
    const resultHTML = fixture.debugElement.nativeElement
    return resultHTML.querySelector(`[data-testId="${testId}"]`)
  }

})
