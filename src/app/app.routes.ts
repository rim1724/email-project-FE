import { Routes } from '@angular/router';
import { Identifier } from './auth/signin/identifier/identifier.component';
import { Password } from './auth/signin/password/password.component';
import { Name } from './auth/signup/name/name.component';

export const routes: Routes = [
  { path: '', component: Identifier, pathMatch: 'full' },
  { path: 'password', component: Password },
  { path: 'name', component: Name },
];
