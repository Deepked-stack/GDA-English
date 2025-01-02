import { Component } from '@angular/core';
import { StudyNavComponent } from '../../study-nav/study-nav.component';

@Component({
  selector: 'app-basic-terminologies',
  standalone: true,
  
  templateUrl: './basic-terminologies.component.html',
  styleUrl: './basic-terminologies.component.css',
  imports:[]
})
export class BasicTerminologiesComponent {

  currentSection: string = 'start';

  onSectionChange(section: string) {
    this.currentSection = section;
  }

}
