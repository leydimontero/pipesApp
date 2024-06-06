import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'leydi';
  public nameUpper: string = 'LEYDI';
  public fullName: string = 'lEyDi mOnTeRo';

  public customDate: Date = new Date();

}
