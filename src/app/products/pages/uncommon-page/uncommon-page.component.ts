import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Leydi'
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient(): void {
    this.name = 'Santiago';
    this.gender = 'male';
  }

  //i18nPlural
  public clients: string[] = ['Santiago', 'Doris', 'Miguel', 'Julian', 'David', 'Leydi', 'Glory'];
  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();

  }

  // KeyValue
  public person = {
    name: 'Leydi',
    age: 30,
    address: 'Bogotá, Colombia'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
  .pipe(
    tap( value => console.log('tap:', value ))
  )

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa.' )
    }, 3500);
  })
}
