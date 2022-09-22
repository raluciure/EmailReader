import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent implements OnInit {

  email: Email;
  emailsList: Email[] = [];
  list: Email[] = [];
  @ViewChild('emailForm') emailForm: any;


  constructor() {
    this.email = { from: "", to: "", subject: "", body: "" };
    //this.emailsList = undefined;
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    //this.emailsList?.push(this.email);
    this.list.push(this.email);
    console.log(this.list.length);
    this.emailsList[this.list.length-1]=this.email;
    console.log(this.emailsList);
    window.alert('The email ' + this.email.subject + ' has been sent to ' + this.email.to);
    // this.clear();
  }

  clear(): void {
    this.email.from = "";
    this.email.to = "";
    this.email.subject = "";
    this.email.body = "";
    this.emailForm.reset();
  }




}
