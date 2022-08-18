import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './views/login/login.component';
import { ErrorComponent } from './views/error/error.component';
import { CustomersComponent } from './views/customers/customers.component';

@NgModule({
  declarations: [LoginComponent , ErrorComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'customer', component: CustomersComponent },
      { path: '**', component: ErrorComponent},
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
