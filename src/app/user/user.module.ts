import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent, UserListItemComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
