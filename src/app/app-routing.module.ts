import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';

const routes: Routes = [
  { path: '', redirectTo: '/email', pathMatch: 'full' },
  { path: 'email', component: EmailReaderBasicComponent },
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
