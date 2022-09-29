import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css']
})
export class EmailViewerComponent implements OnInit {
  value?: number | null;
  email: Email;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private emailService: EmailService) {
    this.email = { id: 0, from: "", to: "", subject: "", body: "" };
  }

  ngOnInit(): void {
    this.value = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.value)
    this.emailService.getEmail(this.value).subscribe(email => this.email = email);
  }


  goBack(): void {
    this.location.back();
  }

}
