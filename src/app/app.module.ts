import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop'

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

import { StartItComponent } from './start-it/start-it.component';
import { LearnItComponent } from './learn-it/learn-it.component';
import { DoItComponent } from './do-it/do-it.component';
import { MaincontentnavComponent } from './maincontentnav/maincontentnav.component';
import { GDAIntroComponent } from './module2/gda-intro/gda-intro.component';
import { HealthAndIllHealthComponent } from './module2/health-and-ill-health/health-and-ill-health.component';
import { PersonCenteredCareComponent } from './module2/person-centered-care/person-centered-care.component';
import { EffectiveCommunicationComponent } from './module2/effective-communication/effective-communication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MicroorgAndInfecComponent } from './module3/microorg-and-infec/microorg-and-infec.component';
import { BasicHygeineAndInfecControlComponent } from './module3/basic-hygeine-and-infec-control/basic-hygeine-and-infec-control.component';
import { BiomedicalWasteMgmntComponent } from './module3/biomedical-waste-mgmnt/biomedical-waste-mgmnt.component';
import { SterlizationDisinfectionComponent } from './module3/sterlization-disinfection/sterlization-disinfection.component';
import { AsepticWorkComponent } from './module3/aseptic-work/aseptic-work.component';
import { AnatomyAndPhysioComponent } from './module4/anatomy-and-physio/anatomy-and-physio.component';
import { MedicationRoutesAndAdmnComponent } from './module4/medication-routes-and-admn/medication-routes-and-admn.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingpageComponent,
    MaincontentComponent,
    ModuleComponent,
    StudyComponent,
    
    StartItComponent,
    LearnItComponent,
    DoItComponent,
    MaincontentnavComponent,
    
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
    BasicTerminologiesComponent,
    GDAIntroComponent,
    HealthAndIllHealthComponent,
    PersonCenteredCareComponent,
    EffectiveCommunicationComponent,
    DragDropModule,
    BrowserAnimationsModule,
    MicroorgAndInfecComponent,
    BasicHygeineAndInfecControlComponent,
    BiomedicalWasteMgmntComponent,
    SterlizationDisinfectionComponent,
    AsepticWorkComponent,
    AnatomyAndPhysioComponent,
    MedicationRoutesAndAdmnComponent
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
