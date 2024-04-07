import { OrdenComponent } from './components/orden/orden.component'
import { LoginViewComponent } from './views/login-view/login-view.component'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PuntodeventaComponent } from './components/puntodeventa/puntodeventa.component'
import { FilterComponent } from './components/filter/filter.component'
import { HeaderComponent } from './components/header/header.component'
import { FiguritaComponent } from './components/figurita/figurita.component'
import { FooterComponent } from './components/footer/footer.component'
import { BtnComponent } from './components/btn/btn.component'
import { LayoutPerfilViewComponent } from './views/layout-perfil-view/layout-perfil-view.component'
import { CardsContainerComponent } from './components/cards-container/cards-container.component'
import { PerfilInfoViewComponent } from './views/perfil-info-view/perfil-info-view.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BusquedaFiguritasViewComponent } from './views/busqueda-figuritas-view/busqueda-figuritas-view.component'
import { ERRORComponent } from './components/ERROR/ERROR.component'
import { PerfilFiguritasComponent } from './views/perfil-figuritas/perfil-figuritas.component'
import { GeneralViewComponent } from './views/General-View/General-View.component'
import { UsuarioService } from './services/usuario.service'
import { FiguritaService } from './services/figurita.service'
import { BusquedaSobresViewComponent } from './views/busqueda-sobres-view/busqueda-sobres-view.component'
import { MainBusquedaFiguritasViewComponent } from './views/main-busqueda-figuritas-view/main-busqueda-figuritas-view.component'
import { NavComponent } from './components/nav/nav.component'
import { HttpClientModule } from '@angular/common/http'
import { DetailsViewComponent } from './views/details-view/details-view.component'
import { ErrorPopupComponent } from './components/Error-PopUp/Error-PopUp.component'
import { PopUpComponent } from './components/pop-up/pop-up.component'


@NgModule({
  declarations: [				
    AppComponent,
      PuntodeventaComponent,
      FilterComponent,
      FooterComponent,
      HeaderComponent,
      FiguritaComponent,
      BtnComponent,
      LoginViewComponent,
      LayoutPerfilViewComponent,
      CardsContainerComponent,
      PerfilInfoViewComponent,
      FiguritaComponent,
      BusquedaFiguritasViewComponent,
      ERRORComponent,
      PerfilFiguritasComponent,
      GeneralViewComponent,
      BusquedaSobresViewComponent,
      MainBusquedaFiguritasViewComponent,
      NavComponent,
      DetailsViewComponent,
      FilterComponent,
      ErrorPopupComponent,
      OrdenComponent,
      PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService,FiguritaService],
  bootstrap: [AppComponent]
})
export class AppModule { }



