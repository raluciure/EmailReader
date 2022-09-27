import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { FormsModule } from '@angular/forms';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpServerEmailsSimulatorService } from './services/http-server-emails-simulator.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { WithBodyFilterPipe } from './pipes/with-body-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    EmailReaderFormComponent,
    HighlightDirective,
    WithBodyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(
      HttpServerEmailsSimulatorService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
