import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hospitals',
  standalone: true,
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css'],
  imports: [FormsModule, CommonModule],
})
export class HospitalsComponent {
  userOpinion: string | undefined;
  feedback: { [key: string]: string | undefined } = {};

  // Answers for both exercises
  answers = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  };

  answers2 = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
  };

  // MCQ feedback
  mcqFeedback: { [key: number]: string } = {};

  // Exercise 1 (5 questions) answers
  checkAnswer(option: string) {
    const correctAnswers = {
      option1: false,
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

  // Exercise 2 (7 questions) answers
  checkAnswer2(option: string) {
    const correctAnswers2 = {
      option1: true,
      option2: false,
      option3: true,
      option4: false,
      option5: true,
      option6: false,
      option7: true,
    };

    if (this.answers2[option] === correctAnswers2[option]) {
      this.feedback[option] = '✔️'; // Correct answer
    } else {
      this.feedback[option] = '❌'; // Incorrect answer
    }
  }

  // Check answers for MCQ questions
  checkMCQ(questionNumber: number, selectedAnswer: string): void {
    const correctAnswers: { [key: number]: string } = {
      1: 'True',
      2: 'Near Entrance',
    };

    this.mcqFeedback[questionNumber] =
      correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  // Handle the user's opinion (yes/no feedback)
  checkOpinion(opinion: string) {
    this.userOpinion = opinion;
  }

  showAssessment() {
    alert('Your assessment details will be displayed here.');
  }

  isFirstOptionSelected = false;
  isSecondOptionSelected = false;
  isThirdOptionSelected = false;

  checkAnswerl() {
    // Ensure that only the correct answer is selected
    if (this.isFirstOptionSelected) {
      this.isSecondOptionSelected = false;
      this.isThirdOptionSelected = false;
    } else {
      this.isSecondOptionSelected = true;  // Allow incorrect answers
      this.isThirdOptionSelected = true;   // Allow incorrect answers
    }
  }

}
