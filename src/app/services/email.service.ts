import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailsURL = 'api/emails';  // URL to web api
  private error?: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getEmails(): Observable<Email[]> {
    return this.http.get<Email[]>(this.emailsURL)
      .pipe(
        tap(res => console.log('fetched ' + res.length + ' emails')),
        catchError(this.handleError<Email[]>('getEmails', []))
      );
  }

  getEmail(id: number): Observable<Email> {
    console.log(`Retreiving information of email: ${id}`); 
    const url = `${this.emailsURL}/${id}`;
    return this.http.get<Email>(url);
  }

  addEmail(email: Email): Observable<Email> {
    console.log(email);
    return this.http.post<Email>(this.emailsURL, email, this.httpOptions).pipe(
      tap((newEmail: Email) => console.log(`added email with id=${newEmail.id}`)),
      catchError(this.handleError<Email>('addEmail'))
    );
  }

  deleteEmail(email: Email | number): Observable<Email> {
    var id = typeof email === 'number' ? email : email.id; 
    var url = `${this.emailsURL}/${id}`;
    return this.http.delete<Email>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted email id=${id}`)),
      catchError(this.handleError<Email>('deleteEmail'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(`${operation} failed: ${error.message}`);
      console.error(error); // log to console instead

      this.error = `${operation} failed: ${error.message}`;

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getError (): string | undefined {
    return this.error; 
  }
}
