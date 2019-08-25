import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'products', component: ProductsComponent, children: [
    {path: 'new', component: FormComponent},
    {path: 'edit/:productId', component: EditComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
