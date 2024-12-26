import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ModuleComponent } from './module/module.component';
import { StudyComponent } from './study/study.component'
import { HttpClientModule } from '@angular/common/http';
import { IntroductiontotheprogramModule } from './introductiontotheprogram/introductiontotheprogram.module';
import { IntroductionVideoComponent } from './introductiontotheprogram/introduction-video/introduction-video.component';
import { HistoricalPerspectiveComponent } from './introductiontotheprogram/historical-perspective/historical-perspective.component';
import { HealthcareDeliverySystemsComponent } from './introductiontotheprogram/healthcare-delivery-systems/healthcare-delivery-systems.component';
import { HospitalsComponent } from './introductiontotheprogram/hospitals/hospitals.component';
import { BasicTerminologiesComponent } from './introductiontotheprogram/basic-terminologies/basic-terminologies.component';
import { StudyNavComponent } from './study-nav/study-nav.component';
import { StartItComponent } from './start-it/start-it.component';
import { LearnItComponent } from './learn-it/learn-it.component';
import { DoItComponent } from './do-it/do-it.component';
import { MaincontentnavComponent } from './maincontentnav/maincontentnav.component';
// import { IntroductionVodeoComponent } from './Introduction_to_the_program/introduction-vodeo/introduction-vodeo.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingpageComponent,
    MaincontentComponent,
    ModuleComponent,
    StudyComponent,
    StudyNavComponent,
    StartItComponent,
    LearnItComponent,
    DoItComponent,
    MaincontentnavComponent,
    
    // IntroductionVodeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IntroductiontotheprogramModule,
    IntroductionVideoComponent,
    HistoricalPerspectiveComponent,
    HealthcareDeliverySystemsComponent,
    HospitalsComponent,
    BasicTerminologiesComponent
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
