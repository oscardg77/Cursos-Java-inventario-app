import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProductoListaComponent } from "./producto-lista/producto-lista.component";
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductoListaComponent,
    AgregarProductoComponent,
    EditarProductoComponent
  ],
  imports: [
     BrowserModule,
     RouterModule,
     HttpClientModule,
     AppRoutingModule,
     FormsModule
    
   ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
