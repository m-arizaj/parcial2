import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Penguin } from './penguin';
import { dataPenguins } from './dataPenguins';

@Injectable({
  providedIn: 'root'
})
export class PenguinService {
  constructor() { }

  getPenguins(): Observable<Penguin[]> {
    return of(dataPenguins);
  }
}