import { Component } from '@angular/core';

@Component({
  selector: 'app-person-centered-care',
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
}
