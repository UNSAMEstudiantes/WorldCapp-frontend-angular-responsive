// import { LayoutPerfilViewComponent } from './layout-perfil-view.component'
// import { async, ComponentFixture, TestBed } from '@angular/core/testing'
// import { ActivatedRoute, Router, RouterModule } from '@angular/router'
// import { BtnComponent } from 'src/app/components/btn/btn.component'
// import { PerfilInfoViewComponent } from '../perfil-info-view/perfil-info-view.component'
// import { AppRoutingModule } from 'src/app/app-routing.module'
// import { HttpClient, HttpClientModule } from '@angular/common/http'
// import { HttpClientSpy } from 'src/app/spy/httpClientSpy'

// describe('LayoutPerfilViewComponent', () => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   let component: LayoutPerfilViewComponent
//   let fixture: ComponentFixture<LayoutPerfilViewComponent>
//   let nav_rep: HTMLElement
//   let nav_perf: HTMLElement
//   let nav_falt: HTMLElement
//   let routerSpy: jasmine.SpyObj<Router>
//   let routeSpy: jasmine.SpyObj<ActivatedRoute>



//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterModule, AppRoutingModule, HttpClientModule],
//       declarations: [LayoutPerfilViewComponent, BtnComponent, PerfilInfoViewComponent],
//       providers: [
//         { provide: ActivatedRoute, useValue: routeSpy }, { provide: HttpClient, useValue: HttpClientSpy }, { provide: Router, useValue: routerSpy }]
//     })
//       .compileComponents()
//   }))

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LayoutPerfilViewComponent)
//     component = fixture.componentInstance
//     routerSpy = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'])
//     routeSpy = jasmine.createSpyObj('ActivatedRoute', [])
//     nav_rep = getTestById("nav_rep")
//     nav_perf = getTestById("nav_perf")
//     nav_falt = getTestById("nav_falt")
//     fixture.detectChanges()

//   })

//   describe("Test de clases aplicadas a los Li para cambiar de view", () => {


//     it('al presionar el boton de la vista Repetidas , se agrega la clase marked para avisar al usuario que esta en esa view', () => {


//       fixture.detectChanges()

//       expect(nav_rep.classList.contains('nav__icon--marked'))
//     })
//     it('al presionar el boton de la vista faltantes , se agrega la clase marked para avisar al usuario que esta en esa view', () => {

//       nav_falt.click()

//       fixture.detectChanges()
      
//     })
//     it('al presionar el boton de la vista repetidas y volver a la vista perfil , se le agrega la clase  marked para avisar al usuario en que view esta', () => {

//       nav_rep.click()
//       nav_perf.click()

//       fixture.detectChanges()

//     })



//   })
//   // describe("cuandoo selecciono el li de la vista correspondiente debe mostrar esa view", () => {
//   //   it("al iniciar la app se inicia en la view de informacion", () => {

//   //   })
//   // })

//   describe("cuando doy click en ver figuritas faltantes deberia renderizar la lista de faltantes del usuario", () => {
//     it('hago click en figuritasRepetiidas y se renderiza la lista correspondiente', () => {

//       nav_rep.click()

//       fixture.detectChanges()

//       expect(nav_perf.classList.contains('nav__icon--marked'))
//     })
//   })


//   function getTestById(testId: string): HTMLElement {
//     const resultHTML = fixture.debugElement.nativeElement
//     return resultHTML.querySelector(`[data-testId="${testId}"]`)
//   }
// })


