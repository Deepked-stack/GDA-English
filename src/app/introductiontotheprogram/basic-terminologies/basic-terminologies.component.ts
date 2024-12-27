import { Component } from '@angular/core';
import { StudyNavComponent } from '../../study-nav/study-nav.component';

@Component({
  selector: 'app-basic-terminologies',
  standalone: true,
  
  templateUrl: './basic-terminologies.component.html',
  styleUrl: './basic-terminologies.component.css',
  imports:[StudyNavComponent]
})
export class BasicTerminologiesComponent {

  startCompleted = false;
  learnCompleted = false;

  markAsCompleted(section: string) {
    if (section === 'start') {
      this.startCompleted = true;
    } else if (section === 'learn') {
      this.learnCompleted = true;
    } else if (section === 'do') {
      console.log('All sections completed!');
    }
  }

}
