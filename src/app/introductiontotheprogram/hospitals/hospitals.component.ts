import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-hospitals',
  standalone: true,
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css'],
  imports: [FormsModule, CommonModule],
})
export class HospitalsComponent {

  isCorrect: boolean | null = null;

validateAnswer(value: string) {
  this.isCorrect = value.trim().toLowerCase() === 'ospital';
}

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

  answers2 = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
  };
  feedback2: { [key: string]: string | undefined } = {};

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
      this.feedback2[option] = '✔️'; // Correct answer
    } else {
      this.feedback2[option] = '❌'; // Incorrect answer
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
  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }

  @Input() selectedState: 1 | 2 | 3 | null =1;
 
  @Input() userId!: string; // Input property to receive userId

  constructor(private apiservice:ApiService){}


// -------------------------------FOR TAB SECTION-----------------------------------------------------------
@Output() stateChanged =new EventEmitter<number>();

movetoLearnIt(state:string){
  this.selectedState=2;
  this.stateChanged.emit(this.selectedState);

  // this.stateGotFromStudyComponentTabs = 2;
  this.onUpdatetabletolearnit(this.userId);

 }

 onUpdatetabletolearnit(userId: string) {
  this.apiservice.updateSectionToLearnit(userId).subscribe(
    (response) => {
      console.log('Section updated successfully:', response);
    },
    (error) => {
      console.error('Error updating section:', error);
    }
  );
}
movetoDoIt(state: string) {
  // Emit only if state is different from the current state
  if (this.selectedState !== 3) {
    this.selectedState = 3;
    this.stateGotFromStudyComponentTabs = 3;
    this.stateChanged.emit(this.selectedState);


    // Proceed with your API call
    this.onUpdatetabletodoit(this.userId);
  }
}

onUpdatetabletodoit(userId: string) {
  this.apiservice.updateSectionToDoit(userId).subscribe(
    (response) => {
      console.log('Section updated successfully:', response);
    },
    (error) => {
      console.error('Error updating section:', error);
    }
  );
}


@Input() stateGotFromStudyComponentTabs:number= 1|2|3;




// ------------------------------------------------------------------------------------------------------------------------------------

 isnextEnabled:string='false';
 clicked:boolean=false;

 @Output() nextStateChanged = new EventEmitter<boolean>();

 MakeNextEnabled(){
this.isnextEnabled= 'true';
this.nextStateChanged.emit(true);
this.clicked=true;

this.updateSubModuleToInitial();
 }

 updateSubModuleToInitial(){
  this.apiservice.setSubModuleNumberToInitial(this.userId).subscribe(
    (response)=>{
      console.log('submodulenumber updated to 1 successfully');
    },
  
    (error)=>{
      console.error('Error updating submoduleno to 1');
      
    }
  )
 }



  @Output() changedstate = new EventEmitter<void>(); 
  
  @Output() sectionComplete = new EventEmitter<void>();  // EventEmitter to notify parent when section is complete

  markSectionComplete() {
    // Emit an event to inform the parent that the section is complete
    this.sectionComplete.emit();
  }



}
