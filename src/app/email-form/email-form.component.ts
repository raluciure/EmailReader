import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  email: Email;
  message?: string;
  @ViewChild('emailForm') emailForm: any;

  constructor(private emailService: EmailService, private location: Location) { 
    this.email = { id: 0, from: "", to: "", subject: "", body: "" };
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    window.alert('The email ' + this.email.subject + ' has been sent to ' + this.email.to);

    this.emailService.addEmail(this.email).subscribe(_ => {
      this.message = 'Email added successfully!';
      //window.alert(this.message);
    },
      err => {
        this.message = `An error has ocurred: ${err.statusText}`;
        window.alert(this.message);
      }
    );
    this.clear();
    this.goBack();
  }

  clear(): void {
    this.email.id = 0;
    this.email.from = "";
    this.email.to = "";
    this.email.subject = "";
    this.email.body = "";
    this.emailForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

}
