import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html'
})
export class UncommonComponent{
  /* i18nSelect Pipe */
  public name: string = 'Fernando'
  public genero: string = 'masculino';
  public invitation = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  /* i18nPlural Pipe */
  public clients: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando.'
  }

  public changeClient(): void{
    this.name = 'Melisa';
    this.genero = 'femenino';
  }

  public deleteClient(): void{
    this.clients.pop();
  }

  /* keyvalue pipe */
  public person = {
    name: 'Fernando',
    age: 26,
    address: 'Bolivia'
  }

  /* Json pipe */
  public heroes = [
    {
      name: 'Superman',
      vuela: true
    },
    {
      name: 'Robin',
      vuela: false
    },
    {
      name: 'Aquaman',
      vuela: false
    }
  ];

  /* Async Pipe */
  myObservable = interval(2000);

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de Promesa');
    }, 3500);
  });

  protected readonly print = print;
}
