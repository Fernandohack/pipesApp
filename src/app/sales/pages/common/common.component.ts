import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styles: [
  ]
})
export class CommonComponent {
  nameLower = 'fernando';
  nameUpper: string = 'FERNANDO';
  lastName: string = 'fErNando merCado';

  date: Date = new Date();

}
