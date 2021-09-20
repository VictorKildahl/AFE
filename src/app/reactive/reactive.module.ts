import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveComponent } from './reactive/reactive.component';
import { PasswordDirective } from './password.directive';

@NgModule({
  declarations: [ReactiveComponent, PasswordDirective],
  imports: [CommonModule, ReactiveRoutingModule, ReactiveFormsModule],
})
export class ReactiveModule {}
