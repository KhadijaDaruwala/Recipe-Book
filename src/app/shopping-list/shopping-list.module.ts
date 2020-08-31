import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'shopping-list', component: ShoppingListComponent }
    ]),
    RouterModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ShoppingListComponent,
    ShoppingEditComponent
  ]
})
export class ShoppingListModule { }
