import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
{
  path : 'login',
  component : LoginComponent
},
{
  path : 'register',
  component : RegisterComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
