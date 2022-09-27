import { Injectable } from '@angular/core';
import { Email } from '../interfaces/email';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class HttpServerEmailsSimulatorService implements InMemoryDbService  {
  createDb() {
    const emails: Email[] = [
      { id: 1, from: "email1@upm.es", to: "email2@upm.es", subject: "Subject 1", body: "Body 1"},
      { id: 2, from: "email2@upm.es", to: "email1@upm.es", subject: "Subject 2", body: undefined},
      { id: 3, from: "email3@upm.es", to: "email4@upm.es", subject: "Subject 3", body: undefined},
      { id: 4, from: "email4@upm.es", to: "email2@upm.es", subject: "Subject 4", body: "Body 2"},
      { id: 5, from: "email5@upm.es", to: "email6@upm.es", subject: "Subject 5", body: undefined},
      { id: 6, from: "email6@upm.es", to: "email5@upm.es", subject: "Subject 6", body: "Body 2"},
    ];
    return { emails };
  }

  genId(emails: Email[]): number {
    return emails.length > 0 ? Math.max(...emails.map(email => email.id)) + 1 : 11;
  }
}
