import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
  { path: 'login', loadChildren: './modules/security/login/login.module#LoginModule' },
  { path: 'signup', loadChildren: './modules/signup/signup.module#SignupModule'},
  { path: '**', loadChildren: './modules/not-found/not-found.module#NotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
