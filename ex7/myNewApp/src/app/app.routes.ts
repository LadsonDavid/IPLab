import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header';
import { HelloComponent } from './hello/hello';

export const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'header', component: HeaderComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' }
];
