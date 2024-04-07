 import { ComponentFixture, TestBed, async } from '@angular/core/testing'
 import { HeaderComponent } from './header.component'

 describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [HeaderComponent],
     }).compileComponents()
       }))

   beforeEach(() => {
     fixture = TestBed.createComponent(HeaderComponent)
     component = fixture.componentInstance
   })

   it('debería crear el componente Header', () => {
     expect(component).toBeTruthy()

    
   })

   it('deberia mostrar el título de la aplicacion correctamente', () => {
     const titleElement = fixture.nativeElement.querySelector('.header__icon h1')
     expect(titleElement.textContent).toContain('WorldCApp')
   })

   it('deberia tener 4 elementos en el menu', () => {
    const menuItems = fixture.nativeElement.querySelectorAll('.header__menu')
     expect(menuItems.length).toBe(4)
   })

  
   it('deberia mostrar el texto de la opcion "Figuritas" correctamente', () => {
     const menuElement1 = fixture.nativeElement.querySelectorAll('.header__menu')[0] 
    expect(menuElement1.textContent).toContain('Figuritas')
   })
  
   it('deberia mostrar el texto de la opcion "Perfil" correctamente', () => {
     const menuElement2 = fixture.nativeElement.querySelectorAll('.header__menu')[1] 
     expect(menuElement2.textContent).toContain('Perfil')
   })
  
   it('deberia mostrar el texto de la opcion "Sobres" correctamente', () => {
     const menuElement3 = fixture.nativeElement.querySelectorAll('.header__menu')[2]
     expect(menuElement3.textContent).toContain('Sobres')
   })
  
 })