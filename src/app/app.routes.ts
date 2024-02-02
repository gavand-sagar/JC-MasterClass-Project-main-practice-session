import { Routes } from '@angular/router';
import { CutomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { RxJsDemoComponent } from './rx-js-demo/rx-js-demo.component';

export const routes: Routes = [
  {
    path: 'customer',
    component: CutomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'rxjs-demo',
    component: RxJsDemoComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'customer', pathMatch: 'full' },
];
