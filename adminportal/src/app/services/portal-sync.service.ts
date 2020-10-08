import { Injectable } from '@angular/core';
import { PortalSync } from '../interfaces/responses/PortalSync';
import { MockPortalSync } from '../mockdata/PortalSync';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalSyncService {

  constructor() { }
  // TODO: Error handling would go here - something like this (copied and pasted)
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getPortalSync(appVersion: string, dataVersion: string, adminToken: string): Observable<PortalSync> {
    return of(MockPortalSync);
  }
}
