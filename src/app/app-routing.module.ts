import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listado-partes',
    loadChildren: () => import('./listado-partes/listado-partes.module').then( m => m.ListadoPartesPageModule)
  },
  {
    path: 'gestion-clientes',
    loadChildren: () => import('./gestion-clientes/gestion-clientes.module').then( m => m.GestionClientesPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'nuevo-parte',
    loadChildren: () => import('./nuevo-parte/nuevo-parte.module').then( m => m.NuevoPartePageModule)
  },
  {
    path: 'nuevo-cliente',
    loadChildren: () => import('./nuevo-cliente/nuevo-cliente.module').then( m => m.NuevoClientePageModule)
  },
  {
    path: 'editar-parte',
    loadChildren: () => import('./editar-parte/editar-parte.module').then( m => m.EditarPartePageModule)
  },
  {
    path: 'editar-cliente',
    loadChildren: () => import('./editar-cliente/editar-cliente.module').then( m => m.EditarClientePageModule)
  },  {
    path: 'ver-partes',
    loadChildren: () => import('./ver-partes/ver-partes.module').then( m => m.VerPartesPageModule)
  },
  {
    path: 'ver-clientes',
    loadChildren: () => import('./ver-clientes/ver-clientes.module').then( m => m.VerClientesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
