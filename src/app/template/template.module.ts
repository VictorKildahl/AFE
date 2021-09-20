import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template/template.component';
import { PasswordDirective } from './password.directive';

@NgModule({
  declarations: [TemplateComponent, PasswordDirective],
  imports: [CommonModule, TemplateRoutingModule, FormsModule],
})
export class TemplateModule {}
