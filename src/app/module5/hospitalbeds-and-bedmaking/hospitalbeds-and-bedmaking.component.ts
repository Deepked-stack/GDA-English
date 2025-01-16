import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hospitalbeds-and-bedmaking',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './hospitalbeds-and-bedmaking.component.html',
  styleUrl: './hospitalbeds-and-bedmaking.component.css'
})
export class HospitalbedsAndBedmakingComponent {
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
    option5: true,
    option6: true,
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

    answersMap: { [key: string]: number } = {
      fillup1: 5,
      fillup2: 1,
      fillup3: 4,
      fillup4: 2,
      fillup5: 3,
      fillup6: 6,
      
    };
    
    // Function to validate user input
    validateAnswer(inputId: string, correctAnswer: number): void {
      const inputElement = document.getElementById(inputId) as HTMLInputElement;
      const userAnswer = parseInt(inputElement.value, 10);
    
      // Add or remove validation styles
      if (userAnswer === correctAnswer) {
        inputElement.classList.add("correct");
        inputElement.classList.remove("incorrect");
        this.addTickOrCross(inputId, "✓");
      } else {
        inputElement.classList.add("incorrect");
        inputElement.classList.remove("correct");
        this.addTickOrCross(inputId, "✗");
      }
    }
    
    // Function to display tick or cross beside the input
    addTickOrCross(inputId: string, symbol: string): void {
      let tickCrossElement = document.querySelector(`#${inputId} + .tick-cross`);
      
      if (!tickCrossElement) {
        tickCrossElement = document.createElement("span");
        tickCrossElement.classList.add("tick-cross");
        document.getElementById(inputId)?.after(tickCrossElement);
      }
      
      tickCrossElement.textContent = symbol;
    }

    leftItems = [
      { id: 1, correct: false },
      { id: 2, correct: false },
      { id: 3, correct: false },
  
    ];
    
    
    
    rightItems = [
      { id: 3, text: 'An Occupied Bed', correct: false, incorrect: false, matchedWith: null },
      { id: 1, text: 'A Closed Bed', correct: false, incorrect: false, matchedWith: null },
      { id: 2, text: 'An Open Bed', correct: false, incorrect: false, matchedWith: null },
  
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
}
