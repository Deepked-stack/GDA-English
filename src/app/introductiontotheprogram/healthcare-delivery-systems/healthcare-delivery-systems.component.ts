import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  feedback1: { [key: string]: string | undefined } = {};
 
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
      this.feedback1[option] = '✔️'; // Correct answer
    } else {
      this.feedback1[option] = '❌'; // Incorrect answer
    }
  }

  // Function to show how the user will be assessed
  showAssessment() {
    alert('Your assessment details will be displayed here.');
  }

// mcqquestionsforlearnit

  mcqFeedback: { [key: number]: string } = {};

  // Correct answers for the questions
  correctAnswers: { [key: number]: string } = {
    1: 'False', // Correct answer for question 1
    2: 'Primary Health Care provider', // Correct answer for question 2
    3: 'Primary', // Correct answer for question 3
    4: 'The central Government', // Correct answer for question 4
    5: 'Yes', // Correct answer for question 5
  };

  // Function to check the selected answer
  checkMCQ(questionNumber: number, selectedAnswer: string): void {
    if (this.correctAnswers[questionNumber] === selectedAnswer) {
      this.mcqFeedback[questionNumber] = '✔️'; // Correct feedback
    } else {
      this.mcqFeedback[questionNumber] = '❌'; // Incorrect feedback
    }
  }


  feedback: { [key: string]: string | undefined } = {};

  answersch = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  };

  checkAnswerch(option: string) {
    const correctAnswers = {
      option1: false,
      option2: false,
      option3: true,
      option4: true,
      option5: false,
    };

    if (this.answersch[option] === correctAnswers[option]) {
      this.feedback[option] = '✔️'; // Correct answer
    } else {
      this.feedback[option] = '❌'; // Incorrect answer
    }
  }

  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }

  leftItems = [
    { id: 1, text: 'Cardiologist', correct: false },
    { id: 2, text: 'Intensive Care Units(ICU)', correct: false },
    { id: 3, text: 'Mohalla Government Clinics', correct: false },
    { id: 4, text: 'Experimental treatment', correct: false },
    
  ];
  
  rightItems = [
    { id: 4, text: 'Quaternery Health Care', correct: false, incorrect: false, matchedWith: null },
    { id: 1, text: 'Secondary Health care', correct: false, incorrect: false, matchedWith: null },
    { id: 2, text: 'Tertiary Healthcare', correct: false, incorrect: false, matchedWith: null },
    { id: 3, text: 'Primary Healthcare', correct: false, incorrect: false, matchedWith: null },
    
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
 
  @Input() selectedState: 'start' | 'learn' | 'do' | null = null;

// for next button
  isnextEnabled:string='false';
  clicked:boolean=false;

  @Output() nextStateChanged = new EventEmitter<boolean>();

  MakeNextEnabled(){
 this.isnextEnabled= 'true';
 this.nextStateChanged.emit(true);
 this.clicked=true;
  }


  @Output() stateChanged =new EventEmitter<string>();
  movetoLearnIt(state:string){
   this.selectedState='learn';
   this.stateChanged.emit(this.selectedState);
 
  }
 
  movetoDoIt(state:string){
   this.selectedState='do';
   this.stateChanged.emit(this.selectedState);
 
  }
 
 

}

