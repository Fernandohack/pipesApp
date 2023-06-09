import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CommonComponent} from "./sales/pages/common/common.component";
import {NumbersComponent} from "./sales/pages/numbers/numbers.component";
import {UncommonComponent} from "./sales/pages/uncommon/uncommon.component";
import {OrderComponent} from "./sales/pages/order/order.component";

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'uncommon',
    component: UncommonComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
