import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-study-nav',
  standalone: true,
  
  templateUrl: './study-nav.component.html',
  styleUrl: './study-nav.component.css'
})
export class StudyNavComponent {
  sections: string[] = ['start', 'learn', 'do'];

  // @Output() navigateTo = new EventEmitter<string>();

  onNavigate(section: string) {
    // this.navigateTo.emit(section);
  }
}
