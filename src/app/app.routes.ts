import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home }, 
  { 
    path: 'usuarios', 
    loadChildren: () => import('./usuarios/usuarios.routes').then(m => m.USUARIOS_ROUTES) 
  },
  { 
    path: 'productos', 
    loadChildren: () => import('./productos/productos.routes').then(m => m.PRODUCTOS_ROUTES) 
  },
  { path: '**', redirectTo: '' } 
];
