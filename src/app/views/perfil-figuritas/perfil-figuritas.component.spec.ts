/* eslint-disable @typescript-eslint/no-unused-vars */

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing'
import { PerfilFiguritasComponent } from './perfil-figuritas.component'
import { CardsContainerComponent } from 'src/app/components/cards-container/cards-container.component'
import { FiguritaComponent } from 'src/app/components/figurita/figurita.component'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClientSpy } from 'src/app/spy/httpClientSpy'
import { BtnComponent } from 'src/app/components/btn/btn.component'
import { UsuarioService } from 'src/app/services/usuario.service'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component'
import { ErrorPopupComponent } from 'src/app/components/Error-PopUp/Error-PopUp.component'

describe('PerfilFiguritasComponent', () => {
  let component: PerfilFiguritasComponent
  let fixture: ComponentFixture<PerfilFiguritasComponent>
  let router: Router
  beforeEach(async(() => {


    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      declarations: [PerfilFiguritasComponent, CardsContainerComponent, FiguritaComponent, BtnComponent, PopUpComponent, ErrorPopupComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                lista: (us: UsuarioService) => us.getFiguritasFaltantes(),
                borrar: (us: UsuarioService) => us.removeFiguritaFaltante,
                goTo: 'faltantes'
              }
            }
          }
        }
        , { provide: HttpClient, useValue: HttpClientSpy },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) }
      ]
    })
      .compileComponents()
  }))


  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFiguritasComponent)
    component = fixture.componentInstance
    fixture.whenStable()
    fixture.detectChanges()
    router = TestBed.inject(Router)
  })

  it('should create', async () => {
    expect(component).toBeTruthy()
  })

  describe('test de figuritas faltantes', () => {

    it("se reciben todas las figuritas faltantes", fakeAsync(() => {
      component.ngOnInit()
      tick()
      expect(1).toBe(component.listaFiguritas.length)
    }))

    // it("doy click en el boton de agregar figuritas y va a busqueda/faltantes", fakeAsync(() => {
    //   component.ngOnInit()
    //   tick()
    //   console.log(getTestById('tbn_goto'))
    //   getTestById('tbn_goto').click()
    //   fixture.detectChanges()
    //   tick()
    //   expect(router.navigate).toHaveBeenCalledWith(['/busqueda-figuritas/faltantes'])
    // }))

  })
  // describe('test de figuritas repetidas', () => {

  //   it("se reciben todas las figuritas repetidas", fakeAsync(() => {
  //     component.ngOnInit()
  //     tick()
  //     expect(1).toBe(component.listaFiguritas.length)
  //   }))
  //   it("la figurita repetida se carga correctamente", fakeAsync(() => {
  //     component.ngOnInit()
  //     tick()
  //     expect(getTestById('figurita_1')).toBeTruthy
  //   }))

  //   it("doy click en el boton de agregar figuritas y va a busqueda/repetidas", fakeAsync(() => {
  //     component.ngOnInit()
  //     tick()
  //     console.log(getTestById('tbn_goto'))
  //     getTestById('tbn_goto').click()
  //     fixture.detectChanges()
  //     tick()
  //     expect(router.navigate).toHaveBeenCalledWith(['/busqueda-figuritas/repetidas'])
  //   }))

  // })

  function getTestById(testId: string): HTMLElement {
    const resultHTML = fixture.debugElement.nativeElement
    return resultHTML.querySelector(`[data-testId="${testId}"]`)
  }


})