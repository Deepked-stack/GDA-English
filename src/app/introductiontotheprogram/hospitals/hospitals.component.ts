import { Component } from '@angular/core';
import { StudyNavComponent } from '../../study-nav/study-nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hospitals',
  standalone: true,
  
  templateUrl: './hospitals.component.html',
  styleUrl: './hospitals.component.css',
  imports:[FormsModule,CommonModule]

})
export class HospitalsComponent {
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
      option1: false, // First statement is correct
      option2: true,
      option3: false,
      option4: true,
      option5: true,
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

    // Feedback object to store correctness for each question
    mcqFeedback: { [key: number]: string } = {};

    // Method to check answers
    checkMCQ(questionNumber: number, selectedAnswer: string): void {
      // Define correct answers
      const correctAnswers: { [key: number]: string } = {
        1: 'True', // Correct answer for question 1
        2: 'Near Entrance', // Correct answer for question 2
      };
  
      // Determine if the answer is correct or not
      this.mcqFeedback[questionNumber] =
        correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
    }
}
