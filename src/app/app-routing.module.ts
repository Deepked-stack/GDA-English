import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { StudyComponent } from './study/study.component';
import { ModuleComponent } from './module/module.component';
import { IntroductionVideoComponent } from './introductiontotheprogram/introduction-video/introduction-video.component';
import { StartItComponent } from './start-it/start-it.component';
import { LearnItComponent } from './learn-it/learn-it.component';
import { DoItComponent } from './do-it/do-it.component';
import { StudyNavComponent } from './study-nav/study-nav.component';
import { MaincontentnavComponent } from './maincontentnav/maincontentnav.component';
// import { IntroductionVideoComponent } from './introductiontotheprogram/introduction-video/introduction-video.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'landingpage',component:LandingpageComponent},
  {path:'main',component:MaincontentComponent},
  {path:'study',component:StudyComponent},
  {path:'module',component:ModuleComponent},
  {path:'videointro',component:IntroductionVideoComponent},
  {path:'start',component:StartItComponent},
  {path:'learn',component:LearnItComponent},
  {path:'do',component:DoItComponent},
  {path:'studynav',component:StudyNavComponent},
  {path:'mainconnav',component:MaincontentnavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
