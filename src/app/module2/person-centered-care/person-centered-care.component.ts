import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-centered-care',
  imports:[FormsModule,CommonModule],
  standalone: true,
  templateUrl: './person-centered-care.component.html',
  styleUrls: ['./person-centered-care.component.css'],
})
export class PersonCenteredCareComponent {
  mcqFeedback: { [key: number]: string } = {};

  checkMCQ1(questionNumber: number, selectedAnswer: string): void {
    const correctAnswers: { [key: number]: string } = {
      1: 'true',
      2: 'true',
      3: 'false',
      4: 'true',
    };

    this.mcqFeedback[questionNumber] =
      correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  mcqFeedback2: { [key: number]: string } = {};

  checkMCQ2(questionNumber: number, selectedAnswer: string): void {
    const correctAnswers: { [key: number]: string } = {
      1: 'true',
      2: 'true',
      3: 'true',
     
    };

    this.mcqFeedback2[questionNumber] =
      correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  feedback: { [key: string]: string | undefined } = {};
  answers = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false
  };
  checkAnswer(option: string) {
    const correctAnswers = {
      option1: true,
      option2: false,
      option3: false,
      option4: true,
      option5: true,
      option6: false,
    };

    if (this.answers[option] === correctAnswers[option]) {
      this.feedback[option] = '✔️'; // Correct answer
    } else {
      this.feedback[option] = '❌'; // Incorrect answer
    }
  }
  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }
}
