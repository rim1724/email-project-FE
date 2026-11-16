import { Routes } from '@angular/router';
import { Identifier } from './auth/signin/identifier/identifier.component';
import { Password } from './auth/signin/password/password.component';
import { Birthdaygender } from './auth/signup/birthday-gender/birthday-gender.component';
import { Createpassword } from './auth/signup/create-password/create-password.component';
import { Name } from './auth/signup/name/name.component';
import { Username } from './auth/signup/username/username.component';
import { MailComponent } from './mail/mail.component';

export const routes: Routes = [
  { path: '', component: Identifier, pathMatch: 'full' },
  { path: 'password', component: Password },
  { path: 'name', component: Name },
  { path: 'birthdaygender', component: Birthdaygender },
  { path: 'username', component: Username },
  { path: 'createpassword', component: Createpassword },
  { path: 'mail', component: MailComponent },
];
