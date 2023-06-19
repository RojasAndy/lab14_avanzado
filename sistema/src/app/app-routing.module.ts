import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';
//Lo trabajado Pilotos
import { CrearPilotosComponent} from '/pages/pilotos/crear-pilotos/crear-pilotos.component';
import { EditarPilotosComponent} from '/pages/pilotos/editar-pilotos/editar-pilotos.component';
import { ListarPilotosComponent} from '/pages/pilotos/listar-pilotos/listar-pilotos.component';
//Lo trabajado Avion
import { CrearAvionesComponent} from '/pages/aviones/crear-aviones/crear-aviones.component';
import { EditarAvionesComponent} from '/pages/aviones/editar-aviones/editar-aviones.component';
import { ListarAvionesComponent} from '/pages/aviones/listar-aviones/listar-aviones.component';
//Lo trabajado BaseRegresos
import { CrearBaseRegresosComponent} from '/pages/aviones/crear-baseregresos/crear-baseregresos.component';
import { EditarBaseRegresosComponent} from '/pages/aviones/editar-baseregresos/editar-baseregresos.component';
import { ListarBaseRegresosComponent} from '/pages/aviones/listar-baseregresos/listar-baseregresos.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-productos', component: CrearProductosComponent },
  { path: 'editar-producto/:id', component: EditarProductosComponent },
  //Lo trabajado Pilotos
  { path: 'listar-pilotos', component: ListarPilotosComponent },
  { path: 'crear-pilotos', component: CrearPilotosComponent },
  { path: 'editar-piloto/:id', component: EditarPilotosComponent },
  //Lo trabajado Avion
  { path: 'listar-aviones', component: ListarAvionesComponent },
  { path: 'crear-aviones', component: CrearAvionesComponent },
  { path: 'editar-avion/:id', component: EditarAvionesComponent },
  //Lo trabajado BaseRegresos
  { path: 'listar-baseregresos', component: ListarBaseRegresosComponent },
  { path: 'crear-baseregresos', component: CrearBaseRegresosComponent },
  { path: 'editar-baseregreso/:id', component: EditarBaseRegresosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
