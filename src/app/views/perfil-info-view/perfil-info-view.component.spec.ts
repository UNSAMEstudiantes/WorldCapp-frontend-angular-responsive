import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing'
import { PerfilInfoViewComponent } from './perfil-info-view.component'
import { BtnComponent } from 'src/app/components/btn/btn.component'
import { LayoutPerfilViewComponent } from '../layout-perfil-view/layout-perfil-view.component'
import { ReactiveFormsModule } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'
import { convertToParamMap } from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { HttpClientSpy } from 'src/app/spy/httpClientSpy'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { ERRORComponent } from 'src/app/components/ERROR/ERROR.component'
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component'
import { ErrorPopupComponent } from 'src/app/components/Error-PopUp/Error-PopUp.component'

describe('PerfilInfoViewComponent', () => {
  let component: PerfilInfoViewComponent
  let fixture: ComponentFixture<PerfilInfoViewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, AppRoutingModule],
      declarations: [LayoutPerfilViewComponent, PerfilInfoViewComponent, BtnComponent, ERRORComponent, PopUpComponent, ErrorPopupComponent],
      providers: [
        { provide: HttpClient, useValue: HttpClientSpy }]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilInfoViewComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create ', () => {
    expect(component).toBeTruthy()
  })
  describe('todos los datos de mi usuario logeado se cargan al cargar el componente', () => {
    it('la distancia maxima del usuario se carga correctamente', fakeAsync(() => {
      setTest()
      const distancia = getTestById('distanciaMaxima') as HTMLInputElement
      expect(distancia.value).toBe('500')
    }))
    it('el nombre del usuasio se carga correctamente', fakeAsync(() => {
      setTest()
      const nombre = getTestById('nombre') as HTMLInputElement
      expect(nombre.value).toBe('Nombre')
    }))
    it('apellido del usuasio se carga correctamente', fakeAsync(() => {
      setTest()
      const apellido = getTestById('apellido') as HTMLInputElement
      expect(apellido.value).toBe('Apellido')
    }))
    it('el criterio del usuario se carga correctamente', fakeAsync(() => {
      setTest()
      const criterio = getTestById('criterio') as HTMLInputElement
      expect(criterio.value).toBe('Par')
    }))
    it('la posx del usuario se carga correctamente', fakeAsync(() => {
      setTest()
      const posx = getTestById('posx') as HTMLInputElement
      expect(posx.value).toBe('40.7128')
    }))
    it('la posy  del usuario se carga correctamente', fakeAsync(() => {
      setTest()
      const posy = getTestById('posy') as HTMLInputElement
      expect(posy.value).toBe('-74.006')
    }))
    it('la provincia del usuario se carga correctamente', fakeAsync(() => {
      setTest()
      const prov = getTestById('prov') as HTMLInputElement
      expect(prov.value).toBe('Buenos Aires')
    }))
    it('la localidad del usuasrio se carga correctamente', fakeAsync(() => {
      setTest()
      const loc = getTestById('loc') as HTMLInputElement
      expect(loc.value).toBe('La Plata')
    }))
    it('la calle del usuario se carga correctamente', fakeAsync(() => {
      setTest()
      const calle = getTestById('calle') as HTMLInputElement
      expect(calle.value).toBe('Calle Principal')
    }))
    it('el mail  del usuario se carga correctamente', fakeAsync(() => {
      setTest()
      const mail = getTestById('mail') as HTMLInputElement
      expect(mail.value).toBe('correo@example.com')
    }))
  })
  describe('los campos vacios son invalidos  ', () => {
    it('si el mail esta vacio es invalido', () => {
      const einputControl = component.usuarioForm.get('mail')
      einputControl?.setValue('')
      expect(einputControl?.valid).toBeFalsy()
    })
    it('si el nombre esta vacio es invalido', () => {
      const inputControl = component.usuarioForm.get('nombre')
      inputControl?.setValue('')
      expect(inputControl?.valid).toBeFalsy()
    })
    it('si el apellido esta vacio es invalido', () => {
      const inputControl = component.usuarioForm.get('apellido')
      inputControl?.setValue('')
      expect(inputControl?.valid).toBeFalsy()
    })
    it('si la pos x esta vacio es invalido', () => {
      const inputControl = component.usuarioForm.get('direccion')?.get('ubiGeografica')?.get('posx')
      inputControl?.setValue('')
      expect(inputControl?.valid).toBeFalsy()
    })
    

  })
  describe('si los campos son invalidos se muestra un mensaje de error',()=>{
    it('se muestra el mensaje de error en el campo mail', () => {
      const inputControl = component.usuarioForm.get('mail')
      inputControl?.markAsDirty()
      inputControl?.setErrors({ required: true })

      fixture.detectChanges()

      const errorMsj = getTestById('mail_error') as HTMLDivElement
      expect(errorMsj).toBeTruthy()
    })
    it('se muestra el mensaje de error en el campo nombre', () => {
      const inputControl = component.usuarioForm.get('nombre')
      inputControl?.markAsDirty()
      inputControl?.setErrors({ required: true })

      fixture.detectChanges()
      
      const errorMsj = getTestById('nombre_error') as HTMLDivElement
      expect(errorMsj).toBeTruthy()
    })
    it('se muestra el mensaje de error en el campo apellido', () => {
      const inputControl = component.usuarioForm.get('apellido')
      inputControl?.markAsDirty()
      inputControl?.setErrors({ required: true })

      fixture.detectChanges()
      
      const errorMsj = getTestById('apellido_error') as HTMLDivElement
      expect(errorMsj).toBeTruthy()
    })
    it('se muestra el mensaje de error en el campo posx', () => {
      const inputControl = component.usuarioForm.get('direccion')?.get('ubiGeografica')?.get('x')
      inputControl?.markAsDirty()
      inputControl?.setErrors({ required: true })

      fixture.detectChanges()
      
      const errorMsj = getTestById('posx_error') as HTMLDivElement
      expect(errorMsj).toBeTruthy()
    })
    it('se muestra el mensaje de error en el campo posy', () => {
      const inputControl = component.usuarioForm.get('direccion')?.get('ubiGeografica')?.get('y')
      inputControl?.markAsDirty()
      inputControl?.setErrors({ required: true })

      fixture.detectChanges()
      
      const errorMsj = getTestById('posy_error') as HTMLDivElement
      expect(errorMsj).toBeTruthy()
    })
    it('se muestra el mensaje de error en el campo provincia', () => {
      const inputControl = component.usuarioForm.get('direccion')?.get('provincia')
      inputControl?.markAsTouched()
      inputControl?.setErrors({ required: true })

      fixture.detectChanges()
      
      const errorMsj = getTestById('prov_error') as HTMLDivElement
      expect(errorMsj).toBeTruthy()
    })
    it('se muestra el mensaje de error en el campo localidad', () => {
      const inputControl = component.usuarioForm.get('direccion')?.get('localidad')
      inputControl?.markAsTouched()
      inputControl?.setErrors({ required: true })

      fixture.detectChanges()
      
      const errorMsj = getTestById('loc_error') as HTMLDivElement
      expect(errorMsj).toBeTruthy()
    })
    it('se muestra el mensaje de error en el campo calle', () => {
      const inputControl = component.usuarioForm.get('direccion')?.get('calle')
      inputControl?.markAsTouched()
      inputControl?.setErrors({ required: true })

      fixture.detectChanges()
      
      const errorMsj = getTestById('calle_error') as HTMLDivElement
      expect(errorMsj).toBeTruthy()
    })
    it('se muestra el mensaje de error en el campo altura', () => {
      const inputControl = component.usuarioForm.get('direccion')?.get('altura')
      inputControl?.markAsDirty()
      inputControl?.setErrors({ required: true })

      fixture.detectChanges()
      
      const errorMsj = getTestById('altura_error') as HTMLDivElement
      expect(errorMsj).toBeTruthy()
    })
  })

function setTest(){
  component.ngOnInit()
  tick(1000)
  fixture.detectChanges()
}


function getTestById(testId: string): HTMLElement {
    const resultHTML = fixture.debugElement.nativeElement
    return resultHTML.querySelector(`[data-testId="${testId}"]`)
  }
})

export class MockActivatedRoute {
  private subject = new BehaviorSubject(convertToParamMap({}))
  paramMap = this.subject.asObservable()

  setParamMap(params: never) {
    this.subject.next(convertToParamMap(params))
  }
}

