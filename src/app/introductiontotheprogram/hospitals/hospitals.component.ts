import { Component } from '@angular/core';
import { StudyNavComponent } from '../../study-nav/study-nav.component';

@Component({
  selector: 'app-hospitals',
  standalone: true,
  
  templateUrl: './hospitals.component.html',
  styleUrl: './hospitals.component.css',
  imports:[StudyNavComponent]

})
export class HospitalsComponent {

}
