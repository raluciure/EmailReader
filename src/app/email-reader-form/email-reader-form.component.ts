import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent implements OnInit {

  email: Email;
  list: Email[] = [];
  @ViewChild('emailForm') emailForm: any;


  constructor() {
    this.email = { from: "", to: "", subject: "", body: "" };
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    this.list.push({ ...this.email });
    window.alert('The email ' + this.email.subject + ' has been sent to ' + this.email.to);
    this.clear();
  }

  clear(): void {
    this.email.from = "";
    this.email.to = "";
    this.email.subject = "";
    this.email.body = "";
    this.emailForm.reset();
  }




}
