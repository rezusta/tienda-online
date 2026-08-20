import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/pages/login-page/login-page';
import { ProductosPage } from './features/productos/pages/productos-page/productos-page';
import { ClientesPage } from './features/clientes/pages/clientes-page/clientes-page';
import { ProductoDetallePage } from './features/productos/pages/producto-detalle-page/producto-detalle-page';
import { ClienteDetallePage } from './features/clientes/pages/cliente-detalle-page/cliente-detalle-page';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    { path: 'productos', component: ProductosPage },
    { path: 'productos/:id', component: ProductoDetallePage },
    { path: 'clientes', component: ClientesPage },
    { path: 'clientes/:id', component: ClienteDetallePage },
];
