import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { FormsModule } from '@angular/forms';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    EmailReaderFormComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
