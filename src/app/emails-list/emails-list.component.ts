import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {
  
  email: Email;
  emailsList: Email[] = [];
  withBody: boolean;
  filterText: string;
  message?: string;

  constructor(private emailService: EmailService,  private router: Router) {
    this.email = { id: 0, from: "", to: "", subject: "", body: "" };
    this.withBody = false;
    this.filterText = "";
  }

  ngOnInit(): void {
    this.getEmailsList();
  }

  getEmailsList() {
    this.emailService.getEmails().subscribe(list => this.emailsList = list);
  }

  remove(id: number): void {
    this.emailService.deleteEmail(id).subscribe(
      _ => {
        this.message = 'Email deleted successfully!';
        window.alert(this.message);
      },
      err => {
        this.message = `An error has ocurred: ${err.statusText}`;
        window.alert(this.message);
      }
    );
    this.getEmailsList();
  }

  redirect(id: number): void {
    this.router.navigate([`/email/${id}`]);
  }

  add():void {
    this.router.navigate([`/email-form`]);
  }

}
