/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed, async, fakeAsync, flush, tick } from '@angular/core/testing'
import { BusquedaFiguritasViewComponent } from './busqueda-figuritas-view.component'
import { NavComponent } from 'src/app/components/nav/nav.component'
import { CardsContainerComponent } from 'src/app/components/cards-container/cards-container.component'
import { FiguritaComponent } from 'src/app/components/figurita/figurita.component'
import { ActivatedRoute, RouterModule, convertToParamMap } from '@angular/router'
import { of } from 'rxjs'
import { FiguritaService } from 'src/app/services/figurita.service'
import { UsuarioService } from 'src/app/services/usuario.service'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { HttpClientSpy } from 'src/app/spy/httpClientSpy'
import { FilterComponent } from 'src/app/components/filter/filter.component'
import { FormsModule } from '@angular/forms'
import { Figurita } from 'src/app/domain/Figurita'
import { createComponent } from '@angular/core'
import { Filtros } from 'src/app/domain/Filtros'
import { ErrorPopupComponent } from 'src/app/components/Error-PopUp/Error-PopUp.component'
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component'


describe('BusquedaFiguritasViewComponent', () => {
  let component: BusquedaFiguritasViewComponent
  let fixture: ComponentFixture<BusquedaFiguritasViewComponent>
  const mockActivatedRoute = {
    params: {
      subscribe: jasmine.createSpy(),
    },
  }
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule, FormsModule],
      declarations: [BusquedaFiguritasViewComponent, NavComponent, CardsContainerComponent, FiguritaComponent, FilterComponent, ErrorPopupComponent, PopUpComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {
            snapshot: {
              data: {
                lista: (fs: FiguritaService, filtros: Filtros) => fs.getFiguritasBack(filtros),
                onClick: 'MARCE O MARY HAGAN QUE VAYA A DETALLES DE LA FIGURITA!!'
        }
            }
          } },
        { provide: HttpClient, useValue: HttpClientSpy }],
        

    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaFiguritasViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe("al cargar la pagina, se reciben todas las figuritas disponibles", () => {
    it("se reciben todas las figuritas existentes", fakeAsync(() => {
        component.ngOnInit()
        tick()
        expect(2).toBe(component.listaFiguritas.length)
    }))
  })

  describe("se pueden filtrar figuritas", () => {
    it("se pueden filtrar por apellido del jugador", fakeAsync(() => {
        component.ngOnInit()
        component.filtrarPorNombre("messi")

        fixture.detectChanges()
        tick(1000)
        fixture.detectChanges()

        const figuritaBuscada = getTestById("figuritaNombre")
        expect(figuritaBuscada.innerHTML).toBe("Lionel Messi")
    }))

    it("se pueden filtrar por nombre del jugador", fakeAsync(() => {
        component.ngOnInit()
        component.filtrarPorNombre("lionel")

        fixture.detectChanges()
        tick(1000)
        fixture.detectChanges()

        const figuritaBuscada = getTestById("figuritaNombre")
        expect(figuritaBuscada.innerHTML).toBe("Lionel Messi")
    }))

    it("se pueden filtrar por seleccion del jugador", fakeAsync(() => {
        component.ngOnInit()
        component.filtrarPorNombre("argentina")

        fixture.detectChanges()
        tick(1000)
        fixture.detectChanges()

        const figuritaBuscada = getTestById("figuritaNombre")
        expect(figuritaBuscada.innerHTML).toBe("Lionel Messi")
    }))

    it("se pueden filtrar por numero de figurita del jugador", fakeAsync(() => {
        component.ngOnInit()
        component.filtrarPorNombre("argentina")

        fixture.detectChanges()
        tick(1000)
        fixture.detectChanges()

        const figuritaBuscada = getTestById("figuritaNombre")
        expect(figuritaBuscada.innerHTML).toBe("Lionel Messi")
    }))

    it("se pueden filtrar por si esta onfire", fakeAsync(() => {
        component.ngOnInit()
        const filtros = new Filtros("", undefined, undefined, "true", "false")
        component.filtrarFiguritas(filtros)

        fixture.detectChanges()
        tick(1000)
        fixture.detectChanges()

        const figuritaBuscada = getTestById("figuritaNombre")
        expect(figuritaBuscada.innerHTML).toBe("Lionel Messi")
    }))

    // it("se pueden filtrar por valoracion", fakeAsync(() => {
    //     component.errorMessage = null
    //     const filtros = new Filtros("", 400, 600, "false", "false")
    //     component.filtrarFiguritas(filtros)

    //     fixture.detectChanges()
    //     tick(1000)
    //     fixture.detectChanges()

    //     const figuritasEncontradas = getAllByTestId(fixture, "figuritaNombre")
    //     expect(figuritasEncontradas.length).toBe(2)
    // }))

        it("en caso de no encontrar figuritas con ciertos filtros, se mostrara un error", fakeAsync(() => {
          component.ngOnInit()
          const filtros = new Filtros("", 700, 800, "false", "false")
          component.filtrarFiguritas(filtros)

          fixture.detectChanges()
          tick(1000)
          fixture.detectChanges()

          const errorSinCoincidencias = getTestById("sinCoincidencias")
          expect(errorSinCoincidencias).toBeTruthy()
    }))
  })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    function getTestById(testId: string): HTMLElement {
        const resultHTML = fixture.debugElement.nativeElement
        return resultHTML.querySelector(`[data-testId="${testId}"]`)
    }

    const getAllByTestId = (fixture: ComponentFixture<BusquedaFiguritasViewComponent>, testId: string) => {
        const compiled = fixture.debugElement.nativeElement
        return compiled.querySelectorAll(`[data-testid="${testId}"]`)
    }
})
export class MockActivatedRoute {
  // Puedes personalizar esta función según tus necesidades de prueba
  paramMap = of(convertToParamMap({
  }))

  // Agrega otras propiedades y métodos según sea necesario para tus pruebas
}