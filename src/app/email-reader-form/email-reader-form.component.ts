import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent implements OnInit {

  email: Email;
  list: Email[] = [];
  emailsList: Email[] = [];
  message?: string;
  withBody: boolean;
  filterText: string;
  @ViewChild('emailForm') emailForm: any;


  constructor(private emailService: EmailService) {
    this.email = { id: 0, from: "", to: "", subject: "", body: "" };
    this.withBody = false;
    this.filterText = "";
  }

  ngOnInit(): void {
    this.getEmailsList();
  }

  getEmailsList() {
    console.log("Im here")
    console.log(this.filterText)
    this.emailService.getEmails().subscribe(list => this.emailsList = list);
  }

  sendForm(): void {
    // this.list.push({ ...this.email });
    // this.emailsList?.push({ ...this.email });
    window.alert('The email ' + this.email.subject + ' has been sent to ' + this.email.to);
    const max = Math.max(...this.emailsList.map(email => email.id))
    this.email.id = max + 1;
    console.log(this.email)
    this.emailService.addEmail(this.email).subscribe(_ => {
      this.message = 'Email ' + this.email.id + ' added successfully';
    },
      err => {
        this.message = `An error has ocurred: ${err.statusText}`;
      }
    );
    this.getEmailsList();
    this.clear();
  }

  remove(id: number): void {
    this.emailService.deleteEmail(id).subscribe(
      _ => {
        this.message = 'Email ' + id + ' deleted successfully';
      },
      err => {
        this.message = `An error has ocurred: ${err.statusText}`;
      }
    );
    this.getEmailsList();
  }

  clear(): void {
    this.email.id = 0;
    this.email.from = "";
    this.email.to = "";
    this.email.subject = "";
    this.email.body = "";
    this.emailForm.reset();
  }




}
