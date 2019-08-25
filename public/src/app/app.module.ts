import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductsComponent,
    FormComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
