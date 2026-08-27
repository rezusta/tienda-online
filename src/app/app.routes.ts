import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/pages/login-page/login-page';
import { ProductosPage } from './features/productos/pages/productos-page/productos-page';
import { ProductoDetallePage } from './features/productos/pages/producto-detalle-page/producto-detalle-page';
import { NotFoundPage } from './core/layout/not-found-page/not-found-page';
import { ProductoCrearPage } from './features/productos/pages/producto-crear-page/producto-crear-page';

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
        component: ProductosPage
    },
    {
        path: 'productos/:id',
        component: ProductoDetallePage
    },
    {
        path: 'producto/nuevo',
        component: ProductoCrearPage
    },
    {
        path: 'clientes',
        loadChildren: () => import('./features/clientes/clientes.routes').then(m => m.routes)
    },
    {
        path: '**',
        component: NotFoundPage
    }
];
