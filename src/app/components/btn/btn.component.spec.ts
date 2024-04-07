/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
// import { By } from '@angular/platform-browser'
// import { DebugElement } from '@angular/core'

import { BtnComponent } from './btn.component'

describe('BtnComponent', () => {
  let component: BtnComponent
  let fixture: ComponentFixture<BtnComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
