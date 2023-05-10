import { Injectable } from '@angular/core';
import { Villain } from './villain';
import { VILLIANS } from './mock-villains';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// decorator to context of inyections
@Injectable({
  providedIn: 'root', // root allow singleton instance
})
export class VillainService {
  constructor(private messageService: MessageService) { }

  getVillians(): Villain[] {
    return VILLIANS;
  }

  getVilliansAsync(): Observable<Villain[]> {
    const villains = of(VILLIANS);
    this.messageService.add("VillainService: fetched  villains");
    return villains;
  }
  getVillianById(id: number): Observable<Villain> {
    const villain = VILLIANS.find(v => v.id === id)!;
    this.messageService.add(`VillainService: fetched villain by id=${id}`);
    return of(villain);

  }
}
