import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/pages/login-page/login-page';
import { ProductosPage } from './features/productos/pages/productos-page/productos-page';
import { ProductoDetallePage } from './features/productos/pages/producto-detalle-page/producto-detalle-page';
import { NotFoundPage } from './core/layout/not-found-page/not-found-page';
import { ProductoCrearPage } from './features/productos/pages/producto-crear-page/producto-crear-page';
import { authGuardGuard } from './core/guards/auth-guard-guard';
import { roleGuardGuard } from './core/guards/role-guard-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'productos',
        component: ProductosPage,
        canActivate: [authGuardGuard]
    },
    {
        path: 'productos/nuevo',
        component: ProductoCrearPage,
        canActivate: [authGuardGuard]   
    },
    {
        path: 'productos/:id',
        component: ProductoDetallePage,
        canActivate: [authGuardGuard, roleGuardGuard]
    },
    {
        path: 'clientes',
        loadChildren: () => import('./features/clientes/clientes.routes').then(m => m.routes),
        canActivate: [authGuardGuard, roleGuardGuard]
    },
    {
        path: '**',
        component: NotFoundPage
    }
];
