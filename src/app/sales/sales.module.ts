import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { CommonComponent } from './pages/common/common.component';
import { OrderComponent } from './pages/order/order.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import {MayusPipe} from "./pipes/mayus.pipe";
import {VuelaPipe} from "./pipes/vuela.pipe";
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    UncommonComponent,
    CommonComponent,
    OrderComponent,
    MayusPipe,
    VuelaPipe,
    OrderPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    UncommonComponent,
    CommonComponent,
    OrderComponent
  ]
})
export class SalesModule { }
