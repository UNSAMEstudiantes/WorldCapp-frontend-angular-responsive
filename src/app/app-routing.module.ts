import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutPerfilViewComponent } from './views/layout-perfil-view/layout-perfil-view.component'
import { PerfilInfoViewComponent } from './views/perfil-info-view/perfil-info-view.component'
import { LoginViewComponent } from './views/login-view/login-view.component'
import { BusquedaFiguritasViewComponent } from './views/busqueda-figuritas-view/busqueda-figuritas-view.component'
import { PerfilFiguritasComponent } from './views/perfil-figuritas/perfil-figuritas.component'
import { GeneralViewComponent } from './views/General-View/General-View.component'
import { BusquedaSobresViewComponent } from './views/busqueda-sobres-view/busqueda-sobres-view.component'
import { MainBusquedaFiguritasViewComponent } from './views/main-busqueda-figuritas-view/main-busqueda-figuritas-view.component'
import { DetailsViewComponent } from './views/details-view/details-view.component'
import { UsuarioService } from './services/usuario.service'
import { FiguritaService } from './services/figurita.service'
import { Filtros } from './domain/Filtros'


export const routes: Routes = [
  {
    path: '', component: LoginViewComponent
  },
  {
    path: '', component: GeneralViewComponent, children: [
      {
        path: 'perfil', component: LayoutPerfilViewComponent, children: [
          {
            path: '', component: PerfilInfoViewComponent
          },
          {
            path: 'figuritas/faltantes', component: PerfilFiguritasComponent, data: {
              lista: (us: UsuarioService) => us.getFiguritasFaltantes(),
              borrar: (us: UsuarioService) => us.removeFiguritaFaltante,
              goTo: 'faltantes'
            }
          },
          {
            path: 'figuritas/repetidas', component: PerfilFiguritasComponent, data: {
              lista: (us: UsuarioService) => us.getFiguritasRepetidas(),
              borrar: (us: UsuarioService) => us.removeFiguritaRepetida,
              goTo: 'repetidas'
            }
          },
        ]
      },
      {
        path: 'busqueda-figuritas', component: BusquedaFiguritasViewComponent, data: {
          lista: (fs: FiguritaService, filtros: Filtros) => fs.getFiguritasBack(filtros),
          onClick:() => null,
        }
      },
      {
        path: 'busqueda-figuritas/repetidas', component: BusquedaFiguritasViewComponent, data: {
          lista: (fs: FiguritaService, filtros: Filtros) => fs.getFiguritasBack(filtros),
          onClick: (us: UsuarioService) => us.addFiguritaRepetida,
        }
      },
      {
        path: 'busqueda-figuritas/faltantes', component: BusquedaFiguritasViewComponent, data: {
          lista: (fs: FiguritaService, filtros: Filtros) => fs.getFiguritasBack(filtros),
          onClick: (us: UsuarioService) => us.addFiguritaFaltante,
        }
      },
      
      {
        path: 'busqueda-sobres', component: BusquedaSobresViewComponent
      },
      {
        path: 'main-busqueda-figuritas', component: MainBusquedaFiguritasViewComponent
        , data: {
          lista: (fs: FiguritaService, filtros: Filtros) => fs.getFiguritasMainBack(filtros),
          onClick:() => null,
        }
      },
      {
       
        path: 'details/:id', component: DetailsViewComponent      },

    ]
  },
  { path: '**', redirectTo: 'perfil' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

  constructor(private us: UsuarioService) { }


  public a = this.us.getFiguritasRepetidas()

}

