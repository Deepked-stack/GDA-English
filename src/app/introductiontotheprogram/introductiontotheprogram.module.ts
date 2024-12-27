import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { IntroductionVideoComponent } from './introduction-video/introduction-video.component';
import { Routes } from '@angular/router';
import { HistoricalPerspectiveComponent } from './historical-perspective/historical-perspective.component';
import { HealthcareDeliverySystemsComponent } from './healthcare-delivery-systems/healthcare-delivery-systems.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { BasicTerminologiesComponent } from './basic-terminologies/basic-terminologies.component';
import { StudyNavComponent } from '../study-nav/study-nav.component';


const routes: Routes = [
  // { path: 'videointro', component: IntroductionVideoComponent }
];

@NgModule({
  declarations: [
    // IntroductionVideoComponent
  
    // HistoricalPerspectiveComponent
  
    // HealthcareDeliverySystemsComponent
  
    // HospitalsComponent,
    // BasicTerminologiesComponent
    // StudyNavComponent
  ],
  imports: [
    CommonModule,
    // StudyNavComponent
  ]
})
export class IntroductiontotheprogramModule { }
