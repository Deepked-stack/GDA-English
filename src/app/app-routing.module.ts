import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { StudyComponent } from './study/study.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landingpage', component: LandingpageComponent},
  { path: 'main', component: MaincontentComponent },
  { path: 'study', component: StudyComponent },
  {
    path: 'intro', // Lazy load Introduction module
    loadChildren: () =>
      import('./introductiontotheprogram/introductiontotheprogram.module').then(
        (m) => m.IntroductiontotheprogramModule
      ),
  },
  {
    path: 'module2', // Lazy load Module2
    loadChildren: () =>
      import('./module2/module2.module').then((m) => m.Module2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
