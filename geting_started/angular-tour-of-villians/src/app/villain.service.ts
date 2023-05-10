import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


import { Villain } from './villain';
import { VILLIANS } from './mock-villains';
import { MessageService } from './message.service';

// decorator to context of inyections
@Injectable({
  providedIn: 'root', // root allow singleton instance
})
export class VillainService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }


  private villainsUrl = 'api/villains';

  private log(message: string): void {
    this.messageService.add(message)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getVillainsHttp(): Observable<Villain[]> {
    // return this.http.get<Villain[]>(this.villainsUrl).pipe(
    //   catchError(this.handleError<Villain[]>('getVillainsHttp', []))
    // );

    // user tap to call 
    return this.http.get<Villain[]>(this.villainsUrl)
      .pipe(
        tap(_ => this.log('fetched villains http')),
        catchError(this.handleError<Villain[]>('getVillainsHttp', []))
      );
  }


  /** GET hero by id. Will 404 if id not found */
  getVillianByIdHttp(id: number): Observable<Villain> {
    const url = `${this.villainsUrl}/${id}`;
    return this.http.get<Villain>(url)
      .pipe(
        tap(_ => this.log(`Fetched Vilins by id=${id}`)),
        catchError(this.handleError<Villain>(`getVillainsHttp id=${id}`))
      );
  }


  /** PUT: update the hero on the server */
  updateVillain(villain: Villain): Observable<any> {
    return this.http.put(this.villainsUrl, villain, this.httpOptions)
      .pipe(
        tap(_ => this.log(`update villain with id=${villain.id}`)),
        catchError(this.handleError<any>('updateVillain'))
      )
  }

  /** POST: add a new hero to the server */
  addVillainHttp(new_villain: Villain): Observable<Villain> {
    return this.http.post<Villain>(this.villainsUrl, new_villain, this.httpOptions)
      .pipe(
        tap((newSavedVillain: Villain) => this.log(`Villian added: w/ id=${newSavedVillain.id}`)),
        catchError(this.handleError<Villain>('addVillainHttp'))
      )
  }

  /** DELETE: delete the hero from the server */
  deleteVillain(id: number): Observable<Villain> {
    const url = `${this.villainsUrl}/${id}`;
    return this.http.delete<Villain>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Delete Villain with id=${id}`)),
        catchError(this.handleError<Villain>('deleteVillain'))
      )
  }

  /* GET heroes whose name contains search term */
  searchVillainHttp(term: string): Observable<Villain[]> {
    if (!term.trim()) {
      return of([])
    }
    return this.http.get<Villain[]>(`${this.villainsUrl}/?name=${term}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found villains matching "${term}"`) :
          this.log(`no Villains matching`)
        ),
        catchError(this.handleError<Villain[]>('searchVillainHttp', []))
      );
  }


}
