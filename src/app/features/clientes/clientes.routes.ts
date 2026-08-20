import { Routes } from "@angular/router";
import { ClienteDetallePage } from "./pages/cliente-detalle-page/cliente-detalle-page";
import { ClientesPage } from "./pages/clientes-page/clientes-page";

export const routes: Routes = [
    { path: '', component: ClientesPage },
    { path: ':id', component: ClienteDetallePage },
];
