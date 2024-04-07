/* eslint-disable @typescript-eslint/no-unused-vars */
/* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ComponentFixture, TestBed, async, fakeAsync, flush, tick } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { FiguritaComponent } from './figurita.component'
import { jugadorFaltante } from 'src/app/spy/httpClientSpy'

describe('FiguritaComponent', () => {
  let component: FiguritaComponent
  let fixture: ComponentFixture<FiguritaComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiguritaComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FiguritaComponent)
    component = fixture.componentInstance

    // Asigna la figurita antes de llamar a fixture.detectChanges()
    component.figurita = jugadorFaltante
    fixture.detectChanges()
  })

  describe("al recibir una figurita, se bindean los datos correspondientes", () => {

    it("el nombre mostrado es el correcto", () => {
      const nombreJugador = getTestById("figuritaNombre")
      expect(nombreJugador.innerHTML).toBe("Lionel Messi")
    })

    it("el numero mostrado es el correcto", () => {
      const nombreJugador = getTestById("figuritaNumero")
      expect(nombreJugador.innerHTML).toBe("11")
    })

    it("la valoracion mostrada es la correcto", () => {
      const nombreJugador = getTestById("figuritaValoracion")
      expect(nombreJugador.innerHTML).toBe("520")
    })

    it("el peso mostrado es el correcto", () => {
      const nombreJugador = getTestById("figuritaPeso")
      expect(nombreJugador.innerHTML).toBe("72")
    })

    it("la altura mostrada es la correcta", () => {
      const nombreJugador = getTestById("figuritaAltura")
      expect(nombreJugador.innerHTML).toBe("170")
    })

    it("el nro de camiseta mostrado es el correcto", () => {
      const nombreJugador = getTestById("figuritaNroCamiseta")
      expect(nombreJugador.innerHTML).toBe("10")
    })

    it("la seleccion es la correcta", () => {
      const nombreJugador = getTestById("figuritaSeleccion")
      expect(nombreJugador.innerHTML).toBe("Argentina")
    })

    it("la posicion es la correcta", () => {
      const nombreJugador = getTestById("figuritaPosicion")
      expect(nombreJugador.innerHTML).toBe("Delantero")
    })

    it("la cotizacion es la correcta", () => {
      const nombreJugador = getTestById("figuritaCotizacion")
      expect(nombreJugador.innerHTML).toBe("100000000")
    })

    function getTestById(testId: string): HTMLElement {
      const resultHTML = fixture.debugElement.nativeElement
      return resultHTML.querySelector(`[data-testId="${testId}"]`)
    }
  })
})