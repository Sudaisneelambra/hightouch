import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/singleProducts/product.component';
import { Notfound } from './pages/notFount/notfound.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'products/:name',
    component:ProductComponent
  },
  { path: '404', component: Notfound },
  { path: '**', redirectTo: '/404' },
 
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // 👈 this tells Angular to remember scroll position
  anchorScrolling: 'enabled'            // optional: for #fragment scrolling
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
