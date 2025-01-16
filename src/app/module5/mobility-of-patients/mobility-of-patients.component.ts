import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mobility-of-patients',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './mobility-of-patients.component.html',
  styleUrl: './mobility-of-patients.component.css'
})
export class MobilityOfPatientsComponent {
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
};

  // Exercise 1 (5 questions) answers
 checkAnswer(option: string) {
  const correctAnswers = {
    option1: false,
    option2: true,
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
    mcqFeedback3: { [key: number]: string } = {};

    checkMCQ3(questionNumber:number, selectedAnswer:string):void{

      const correctAnswers:{[key:number]:string}={
        1: 'true',
        2: 'true',
        
        
      };
  
      this.mcqFeedback3[questionNumber]=
      correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
    }

    mcqFeedback4: { [key: number]: string } = {};

    checkMCQ4(questionNumber:number, selectedAnswer:string):void{

      const correctAnswers: { [key: number]: string } = {
        1: 'true',
        2: 'true',
        3: 'true',
        4: 'true',
        5: 'true',
        6: 'true',
        7: 'true',
        9: 'true',
        11: 'true',
        12: 'true',
      };
      
  
      this.mcqFeedback4[questionNumber]=
      correctAnswers[questionNumber] === selectedAnswer ? '✔️' : '❌';
    }


    leftItems = [
      { id: 1},
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ];
    
    
    
    rightItems = [
      { id: 3, text: 'Stage 3', correct: false, incorrect: false, matchedWith: null },
      { id: 4, text: 'Stage 4', correct: false, incorrect: false, matchedWith: null },
      { id: 1, text: 'Stage 1', correct: false, incorrect: false, matchedWith: null },
      { id: 2, text: 'Stage 2', correct: false, incorrect: false, matchedWith: null },
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
