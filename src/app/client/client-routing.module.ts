import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from '../app.module';

const routes: Routes = [{ path: 'appmodule', component: AppModule }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
