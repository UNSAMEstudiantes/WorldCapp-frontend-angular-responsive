/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
// import { By } from '@angular/platform-browser'
// import { DebugElement } from '@angular/core'

import { ErrorPopupComponent } from './Error-PopUp.component'

describe('ErrorPopUpComponent', () => {
  let component: ErrorPopupComponent
  let fixture: ComponentFixture<ErrorPopupComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPopupComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPopupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
