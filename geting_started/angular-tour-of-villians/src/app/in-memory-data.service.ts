import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Villain } from './villain';
import { VILLIANS } from './mock-villains';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const villains: Villain[] = [
      { id: 12, name: 'Thanos', nickname: 'The mad Titan' },
      { id: 13, name: 'Doctor Doom', nickname: 'King Boss Doombot' },
      { id: 14, name: 'Johann Schmidt', nickname: 'Red skull' },
      { id: 15, name: 'Loki', nickname: 'The God of Mischief' },
      { id: 16, name: 'Dormammu', nickname: 'Lord of the Dark Dimension' },
      { id: 17, name: 'Carnage', nickname: 'The Red Slayer' },
      { id: 18, name: 'Magneto', nickname: 'Henryk Gurzsky' },
      { id: 19, name: 'Mystique', nickname: '' },
      {
        id: 20,
        name: 'Kingpin',
        nickname: 'The Brainwasher Harold Howard The Undertaker',
      },
    ];
    return { villains }

  }

  genId(villains: Villain[]): Number {
    return villains.length > 0 ? Math.max(...villains.map(v => v.id)) + 1 : 1;
  }

  constructor() { }
}
