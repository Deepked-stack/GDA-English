import { Component } from '@angular/core';
import { StudyNavComponent } from '../../study-nav/study-nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-healthcare-delivery-systems',
  standalone: true,
  imports:[FormsModule,CommonModule],

  templateUrl: './healthcare-delivery-systems.component.html',
  styleUrl: './healthcare-delivery-systems.component.css'
})
export class HealthcareDeliverySystemsComponent {
  userOpinion: string | undefined;
  answers = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  };
  feedback: { [key: string]: string | undefined } = {};

  // Check if the user clicked 'Yes' or 'No' and show feedback
  checkOpinion(opinion: string) {
    this.userOpinion = opinion;
  }

  // Validate answers for the statements
  checkAnswer(option: string) {
    const correctAnswers = {
      option1: true, // First statement is correct
      option2: false,
      option3: false,
      option4: false,
      option5: false,
    };

    if (this.answers[option] === correctAnswers[option]) {
      this.feedback[option] = '✔️'; // Correct answer
    } else {
      this.feedback[option] = '❌'; // Incorrect answer
    }
  }

  // Function to show how the user will be assessed
  showAssessment() {
    alert('Your assessment details will be displayed here.');
  }
}
