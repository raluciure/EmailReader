import { Component, OnInit } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.css']
})
export class EmailReaderBasicComponent implements OnInit {

  email: Email;

  constructor() {
    this.email = { from: "", to: "", subject: "", body: "" };
  }

  ngOnInit(): void {
  }

  send(): void {
    console.log("Sending the email.");
    if (this.email.from == "" || this.email.to == "" || this.email.body == "" || this.email.subject == "") {
      window.alert("Complete all the email fields before sending!");
    }
    else {
      window.alert('Sending the email from: ' + this.email.from + " to: " + this.email.to +
        " with the subject: " + this.email.subject + " and body: " + this.email.body);
    }

    this.email.from = "";
    this.email.to = "";
    this.email.subject = "";
    this.email.body = "";
  }

  clear(): void {
    console.log("Clearing the fields");
    this.email.from = "";
    this.email.to = "";
    this.email.subject = "";
    this.email.body = "";
  }

}
