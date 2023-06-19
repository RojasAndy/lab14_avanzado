import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { VerProductoComponent } from './pages/productos/ver-producto/ver-producto.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { CrearAvionesComponent } from './pages/aviones/crear-aviones/crear-aviones.component';
import { EditarAvionesComponent } from './pages/aviones/editar-aviones/editar-aviones.component';
import { ListarAvionesComponent } from './pages/aviones/listar-aviones/listar-aviones.component';
import { VerAvionComponent } from './pages/aviones/ver-avion/ver-avion.component';
import { CrearBasesregresosComponent } from './pages/basesregresos/crear-basesregresos/crear-basesregresos.component';
import { EditarBasesregresosComponent } from './pages/basesregresos/editar-basesregresos/editar-basesregresos.component';
import { ListarBasesregresosComponent } from './pages/basesregresos/listar-basesregresos/listar-basesregresos.component';
import { VerBaseregresoComponent } from './pages/basesregresos/ver-baseregreso/ver-baseregreso.component';
import { CrearPilotosComponent } from './pages/pilotos/crear-pilotos/crear-pilotos.component';
import { EditarPilotosComponent } from './pages/pilotos/editar-pilotos/editar-pilotos.component';
import { ListarPilotosComponent } from './pages/pilotos/listar-pilotos/listar-pilotos.component';
import { VerPilotoComponent } from './pages/pilotos/ver-piloto/ver-piloto.component';
import { CrearTripulantesComponent } from './pages/tripulantes/crear-tripulantes/crear-tripulantes.component';
import { EditarTripulantesComponent } from './pages/tripulantes/editar-tripulantes/editar-tripulantes.component';
import { ListarTripulantesComponent } from './pages/tripulantes/listar-tripulantes/listar-tripulantes.component';
import { VerTripulanteComponent } from './pages/tripulantes/ver-tripulante/ver-tripulante.component';
import { CrearVuelosComponent } from './pages/vuelos/crear-vuelos/crear-vuelos.component';
import { EditarVuelosComponent } from './pages/vuelos/editar-vuelos/editar-vuelos.component';
import { ListarVuelosComponent } from './pages/vuelos/listar-vuelos/listar-vuelos.component';
import { VerVueloComponent } from './pages/vuelos/ver-vuelo/ver-vuelo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ListarProductosComponent,
    CrearProductosComponent,
    NavbarComponent,
    VerProductoComponent,
    EditarProductosComponent,
    CrearAvionesComponent,
    EditarAvionesComponent,
    ListarAvionesComponent,
    VerAvionComponent,
    CrearBasesregresosComponent,
    EditarBasesregresosComponent,
    ListarBasesregresosComponent,
    VerBaseregresoComponent,
    CrearPilotosComponent,
    EditarPilotosComponent,
    ListarPilotosComponent,
    VerPilotoComponent,
    CrearTripulantesComponent,
    EditarTripulantesComponent,
    ListarTripulantesComponent,
    VerTripulanteComponent,
    CrearVuelosComponent,
    EditarVuelosComponent,
    ListarVuelosComponent,
    VerVueloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
