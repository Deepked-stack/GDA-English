import { Component } from '@angular/core';
import { StudyNavComponent } from '../../study-nav/study-nav.component';
import { CommonModule } from '@angular/common';
// import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-historical-perspective',
  standalone: true,
  
  templateUrl: './historical-perspective.component.html',
  styleUrl: './historical-perspective.component.css',
  imports:[CommonModule]

})
export class HistoricalPerspectiveComponent {

  cardStatus: { [key: number]: boolean | undefined } = {};
  mcqFeedback1: { [key: number]: string } = {};
  mcqFeedback2: { [key: number]: string } = {};
  mcqFeedback3: { [key: number]: string } = {};


  // Method to update the card status
  checkAnswer(cardId: number, isCorrect: boolean): void {
    this.cardStatus[cardId] = isCorrect;
  }
// ----------------------------------
  checkMCQ1(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true'
    };

    this.mcqFeedback1[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
// --------------------------------------------
  checkMCQ2(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
    };

    this.mcqFeedback2[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
// --------------------------------------------------------------
  checkMCQ3(questionNumber:number, selectedAnswer:string):void{

    const correctAnswers:{[key:number]:string}={
      1: 'true',
      2: 'true',
      3: 'true',
      4: 'true',
      
    };

    this.mcqFeedback3[questionNumber]=
    correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
  }
  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }

  leftItems = [
    { id: 1, text: 'Hippocrates', correct: false },
    { id: 2, text: 'Louis Pasteur', correct: false },
    { id: 3, text: 'Ayurveda', correct: false },
    { id: 4, text: 'Neijing Medical Book', correct: false },
    { id: 5, text: 'Florence Nightingale', correct: false },
    { id: 6, text: 'William Harvey', correct: false },
    { id: 7, text: 'Alexander Fleming', correct: false },
    { id: 8, text: 'Edward Jenner', correct: false },
    { id: 9, text: 'Francis Crick, James Watson and Maurice Wilkins', correct: false },
    { id: 10, text: 'Edwin Smith Papyrus', correct: false },
  ];
  
  rightItems = [
    { id: 8, text: 'Vaccines', correct: false, incorrect: false, matchedWith: null },
    { id: 6, text: 'Circulation of Blood', correct: false, incorrect: false, matchedWith: null },
    { id: 7, text: 'Antibiotics', correct: false, incorrect: false, matchedWith: null },
    { id: 5, text: 'Environmental Theory', correct: false, incorrect: false, matchedWith: null },
    { id: 10, text:'Egyptian Surgical Treaties', correct: false, incorrect: false, matchedWith: null },
    { id: 9, text: 'Nobel Prize for DNA Discovery', correct: false, incorrect: false, matchedWith: null },
    { id: 4, text: 'Chinese Ancient Medical Book', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'Hippocratic Oath', correct: false, incorrect: false, matchedWith: null },
    { id: 3, text: 'Based on Three Doshas', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'The Germ Theory', correct: false, incorrect: false, matchedWith: null },
  ];
  
  // for match the following
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
}  