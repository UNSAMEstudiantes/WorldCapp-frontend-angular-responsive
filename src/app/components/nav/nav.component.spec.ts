/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'

import { NavComponent } from './nav.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { of } from 'rxjs'

describe('NavComponent', () => {
  let component: NavComponent
  let fixture: ComponentFixture<NavComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [FormsModule, HttpClientModule],
      declarations: [NavComponent]
    })
    fixture = TestBed.createComponent(NavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('el valor del input esta bindeado a la variable nombreABuscar', fakeAsync(() => {
    const searchBar = fixture.debugElement.nativeElement.querySelector(`[data-testId="inputNombre"]`)
    expect(component.nombreABuscar).toBe("")
    component.nombreABuscar = "messi"
    fixture.detectChanges()
    tick()
    expect(searchBar.value).toBe("messi")
  }))


    function getTestById(testId: string): HTMLElement {
        const resultHTML = fixture.debugElement.nativeElement
        return resultHTML.querySelector(`[data-testId="${testId}"]`)
    }
})
