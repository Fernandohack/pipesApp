import { Component, OnInit } from '@angular/core';
import {Color, Heroe} from "../../interfaces/sales.interface";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public inMayus: boolean = true;
  orderBy: string = '';
  heores: Heroe[] = [
    {
      name: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      name: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      name: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      name: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      name: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  changeValueMayus() {
    this.inMayus = !this.inMayus;
  }

  changeOrder(value: string): void {
    this.orderBy = value;
  }
}
