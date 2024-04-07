
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { GeneralViewComponent } from './General-View.component'
import { HeaderComponent } from 'src/app/components/header/header.component'
import { ActivatedRoute, convertToParamMap, ParamMap, RouterModule } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

describe('GeneralViewComponent', () => {
  let component: GeneralViewComponent
  let fixture: ComponentFixture<GeneralViewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ GeneralViewComponent ,HeaderComponent],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute }]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

export class MockActivatedRoute {
  private subject = new BehaviorSubject<ParamMap>(convertToParamMap({}))
  paramMap = this.subject.asObservable()
  setParamMap(params: ParamMap) {
    this.subject.next(params)
  }
}
