import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () => import('../user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('../client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'reactive',
    loadChildren: () =>
      import('../reactive/reactive.module').then((m) => m.ReactiveModule),
  },
  {
    path: 'template',
    loadChildren: () =>
      import('../template/template.module').then((m) => m.TemplateModule),
  },
  { path: '**', component: PageNotFoundComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
