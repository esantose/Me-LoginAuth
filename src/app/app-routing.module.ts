import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
