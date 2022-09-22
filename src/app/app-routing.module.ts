import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/email-form', pathMatch: 'full' },
  { path: 'email', component: EmailReaderBasicComponent },
  { path: 'email-form', component: EmailReaderFormComponent }
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
