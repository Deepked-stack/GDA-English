import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pos-and-trans-of-patients',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './pos-and-trans-of-patients.component.html',
  styleUrl: './pos-and-trans-of-patients.component.css'
})
export class PosAndTransOfPatientsComponent {
   @Input() selectedState: 'start' | 'learn' | 'do' | null = null;
 
  feedback: { [key: string]: string | undefined } = {};
 // Answers for both exercises
 answers = {
  option1: false,
  option2: false,
  option3: false,
  option4: false,
  option5: false,
  option6: false,
  option7: false,
};

  // Exercise 1 (5 questions) answers
 checkAnswer(option: string) {
  const correctAnswers = {
    option1: false,
    option2: true,
    option3: false,
    option4: true,
    option5: false,
    option6: false,
    option7: false,
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
  mcqFeedback: { [key: number]: string } = {};

  checkMCQ(questionNumber: number, selectedAnswer: string): void {
    const correctAnswers: { [key: number]: string } = {
      1: 'true',
      2: 'true',
    };

    this.mcqFeedback[questionNumber] =
      correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  mcqFeedback2: { [key: number]: string } = {};
  
checkMCQ2(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
    };

    this.mcqFeedback2[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }

  leftItems = [
    { id: 1, text: 'Question 1', correct: false },
    { id: 2, text: 'Question 2', correct: false },
    { id: 3, text: 'Question 3', correct: false },
    { id: 4, text: 'Question 4', correct: false },
    { id: 5, text: 'Question 5', correct: false },
    { id: 6, text: 'Question 5', correct: false },

  ];
  
  
  
  rightItems = [
    { id: 3, text: 'Lateral Left Recumbent', correct: false, incorrect: false, matchedWith: null },
    { id: 6, text: 'Dorsal recumbent', correct: false, incorrect: false, matchedWith: null },
    { id: 5, text: 'Lithotomy Position', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'Supine position', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'Prone Position', correct: false, incorrect: false, matchedWith: null },
    { id: 4, text: 'Fowler’s Position', correct: false, incorrect: false, matchedWith: null },

  ];
  
  selectedItem: any = null;
  
  selectLeftItem(item: any) {
    if (!item.correct) {
      this.selectedItem = item;
    }
  }
  
  matchWithRightItem(targetItem: any) {
    if (this.selectedItem && !targetItem.correct) {
      if (this.selectedItem.id === targetItem.id) {
        // Correct match
        this.selectedItem.correct = true;
        targetItem.correct = true;
        targetItem.matchedWith = this.selectedItem.id;
  
        // Clear selection
        this.selectedItem = null;
      } else {
        // Incorrect match
        targetItem.incorrect = true;
        setTimeout(() => {
          targetItem.incorrect = false;
        }, 2000);
      }
    }
  }

  cardStatus: { [key: number]: boolean | undefined } = {};

  // Method to update the card status
  checkAnswerimgcard(cardId: number, isCorrect: boolean): void {
    this.cardStatus[cardId] = isCorrect;
  }
}
