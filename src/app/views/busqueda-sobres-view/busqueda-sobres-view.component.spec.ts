import { FormsModule } from '@angular/forms'
import { ErrorPopupComponent } from './../../components/Error-PopUp/Error-PopUp.component'
import { OrdenComponent } from './../../components/orden/orden.component'
import { PuntodeventaComponent } from './../../components/puntodeventa/puntodeventa.component'
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing'
import { BusquedaSobresViewComponent } from './busqueda-sobres-view.component'
import { RouterModule } from '@angular/router'
import { CardsContainerComponent } from 'src/app/components/cards-container/cards-container.component'
import { NavComponent } from 'src/app/components/nav/nav.component'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { HttpClientSpy } from 'src/app/spy/httpClientSpy'
import { tiposDeOrden } from 'src/app/domain/puntodeventa'

describe('BusquedaSobresViewComponent', () => {
  let component: BusquedaSobresViewComponent
  let fixture: ComponentFixture<BusquedaSobresViewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [BusquedaSobresViewComponent, NavComponent, CardsContainerComponent, PuntodeventaComponent, OrdenComponent ,ErrorPopupComponent],
        imports: [RouterModule, HttpClientModule, FormsModule],
        providers:[
            { provide : HttpClient, useValue : HttpClientSpy}
        ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaSobresViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("se reciben los puntos de venta existentes", fakeAsync(() => {
        component.ngOnInit()
        tick()
        expect(3).toBe(component.listaDePuntosDeVenta.length)
  }))
  
  it("se pueden filtrar por punto de venta", fakeAsync(() => {

    setupComponentAndFilterAndOrder("xen", tiposDeOrden.NADA)
  
    const puntoBuscado = getTestById("puntoNombre")
    expect(puntoBuscado.textContent).toBe("Kiosko Xeneize")
  }))
  
  it("se pueden ordenar por mas sobres", fakeAsync(() => {

    setupComponentAndFilterAndOrder("", tiposDeOrden.MASSOBRES)
  
    const puntosBuscado = getAllByTestId(fixture, "puntoNombre")
    expect(puntosBuscado.length).toBe(3)
    expect(puntosBuscado[0].textContent).toBe("Libreria Pepe")
    expect(puntosBuscado[1].textContent).toBe("Kiosko Xeneize")
    expect(puntosBuscado[2].textContent).toBe("Supermercado Dia")
  }))
  
  it("se pueden ordenar por menor distancia", fakeAsync(() => {

    setupComponentAndFilterAndOrder("", tiposDeOrden.MENORDISTANCIA)
  
    const puntosBuscado = getAllByTestId(fixture, "puntoNombre")
    expect(puntosBuscado.length).toBe(3)
    expect(puntosBuscado[0].textContent).toBe("Kiosko Xeneize")
    expect(puntosBuscado[1].textContent).toBe("Supermercado Dia")
    expect(puntosBuscado[2].textContent).toBe("Libreria Pepe")
  }))
  
  it("se pueden ordenar por mas baratos", fakeAsync(() => {

    setupComponentAndFilterAndOrder("", tiposDeOrden.MASBARATOS)
  
    const puntosBuscado = getAllByTestId(fixture, "puntoNombre")
    expect(puntosBuscado.length).toBe(3)
    expect(puntosBuscado[0].textContent).toBe("Supermercado Dia")
    expect(puntosBuscado[1].textContent).toBe("Kiosko Xeneize")
    expect(puntosBuscado[2].textContent).toBe("Libreria Pepe")
  }))

  function setupComponentAndFilterAndOrder(filterValue: string, orderType: tiposDeOrden) {
    component.ngOnInit()
    component.actualizarNombreABuscar(filterValue)
    component.actualizarTipoOrden(orderType)
    fixture.detectChanges()
    tick(1000)
    fixture.detectChanges()
  }

function getTestById(testId: string): HTMLElement {
  const resultHTML = fixture.debugElement.nativeElement
  return resultHTML.querySelector(`[data-testId="${testId}"]`)
}
const getAllByTestId = (fixture: ComponentFixture<BusquedaSobresViewComponent>, testId: string) => {
  const compiled = fixture.debugElement.nativeElement
  return compiled.querySelectorAll(`[data-testid="${testId}"]`)
}



})

