import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';
import { EmailsListComponent } from './emails-list/emails-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/emails-list', pathMatch: 'full' },
  { path: 'email-basic', component: EmailReaderBasicComponent },
  { path: 'email-reader-form', component: EmailReaderFormComponent },
  { path: 'emails-list', component: EmailsListComponent},
  { path: 'email/:id', component: EmailViewerComponent},
  { path: 'email-form', component: EmailFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['']); // when the URL does not match redirect to initial default route
    }
  }
}
