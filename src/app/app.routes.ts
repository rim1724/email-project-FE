import { Routes } from '@angular/router';
import { Identifier } from './auth/signin/identifier/identifier.component';
import { Password } from './auth/signin/password/password.component';
import { Birthdaygender } from './auth/signup/birthdaygender/birthdaygender';
import { Createpassword } from './auth/signup/createpassword/createpassword';
import { Name } from './auth/signup/name/name.component';
import { Username } from './auth/signup/username/username';
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
