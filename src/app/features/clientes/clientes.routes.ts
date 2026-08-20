import { Routes } from "@angular/router";
import { ClientesPage } from "./pages/clientes-page/clientes-page";
import { ClienteDetallePage } from "./pages/cliente-detalle-page/cliente-detalle-page";

export const routes: Routes = [ 
    {
        path: '',
        component: ClientesPage
    },
    {
        path: ':id',
        component: ClienteDetallePage
    }
]