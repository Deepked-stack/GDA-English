import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { ModuleDataService } from '../module-data.service';

@Component({
  selector: 'app-study',
  standalone: false,
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  @Input() moduleId: number | null = null;
  @Input() subModuleIndex: number | null = null;
  @Input() userId!: string; // Input property to receive userId

  @Input() componentSelector: string | null = null; // Store the component selector
  modules: any[] = []; // Store the module data
  isNextEnabled:string;
  constructor(private http: HttpClient, private moduleDataService: ModuleDataService) {}

  ngOnInit(): void {


    this.moduleDataService.getModules().subscribe({
      next: (data) => {
        this.modules = data.modules;
      },
      error: (error) => {
        console.error('Error fetching module data:', error);
      }
    });

    this.isNextEnabled='false';

  }

  // Set the component selector based on the moduleId and submoduleIndex
   // Find the selector based on moduleId and submoduleIndex
 
  @Output() submoduleStateChanged = new EventEmitter<number>();  // EventEmitter to send the updated state to child

  selectedSubmoduleState: 1 | 2 | 3| null = 1; // New state property
  setSubmoduleState(state: 1 | 2 | 3) {
    if (state === 1) {
      // this.startCompleted = true; // Enable "Learn It" and "Do It"
    }
    this.selectedSubmoduleState = state;
    // console.log(`State set to: ${state} for submodule: ${this.selectedSubmodule}`);
  
  
  }
  
  learnEnabled = false; // "Learn It" is initially disabled
  doEnabled = false; 
handleStateChange(state: number) {
  if (this.selectedSubmoduleState !== state) {  // Only update if the state has changed
    this.selectedSubmoduleState = state as 1 | 2 | 3;
    console.log(`State updated by child to: ${state}`);
    
    if (state === 2) {
      this.learnEnabled = true; // Enable "Learn It"
    } else if (state === 3) {
      this.doEnabled = true; // Enable "Do It"
    }
  }
}

@Output() scrollToTop = new EventEmitter<void>();

scrollToTopInMainContent() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  console.log('Scrolled to top in MainContent');
  this.scrollToTop.emit();
}


@Input() moduleIdUpdateFromNextButton!: number;
@Input() subModuleIdUpdateFromNextButton!: number;
@Output() updatedmoduleIdNextbacktomain= new EventEmitter<number>;
@Output() updatedsubmoduleIdNextbacktomain= new EventEmitter<number>;
@Input() moduleAndSubModuleUpdatedforSubnext :number;
@Input() moduleAndSubModuleUpdatedforSubprev :number;
@Input() currentIndexesForSub:string;
ngOnChanges(changes: SimpleChanges) {
  if (changes['moduleIdUpdateFromNextButton'] || changes['subModuleIdUpdateFromNextButton']) {
    console.log(
      `Updated Module ID: ${this.moduleIdUpdateFromNextButton}, Updated Submodule ID: ${this.subModuleIdUpdateFromNextButton}`
    );
    this.moduleId=this.moduleIdUpdateFromNextButton;
    this.subModuleIndex= this.subModuleIdUpdateFromNextButton;
    this.updatedmoduleIdNextbacktomain.emit(this.moduleId);
    this.updatedsubmoduleIdNextbacktomain.emit(this.subModuleIndex);


    // Handle any additional logic needed when the input values change
  }
}


isNextButtonEnabled ='false';
@Output() nextStateEnabled = new EventEmitter<boolean>();
handleNextButton(isenabled:boolean){
if(isenabled===true){
  this.isNextEnabled='true';
  this.sendyestonext()
}
}
sendyestonext(){
  this.nextStateEnabled.emit(true)
}
}



//   @Input() subIndex:number=0;
//   @Input() userId!: string; // Input property to receive userId

// selectedSubmodule:string|null =null;
// selectedSubmodulecomponent:string|null= null;
// selectedSubmoduleState: 'start' | 'learn' | 'do' | null = null; // New state property
// submodules: string[] = [];  // Array to hold the list of submodules
// currentSubmoduleIndex: number = 0;  // Track the current submodule index
// selectedState:string ='start';

// constructor(private moduledataser: ModuleDataService){}

// ngOnInit(): void {
  
//   this.moduledataser.getSubmodule().subscribe((submodule)=>{
//     this.selectedSubmodule= submodule;
//     // this.selectedSubmodulecomponent= submodule.component;
//     this.loadSubmoduleContent(submodule);
//   });
// }
// isNextEnabled:string='false'
// learnEnabled = false; // "Learn It" is initially disabled
//   doEnabled = false; // "Do It" is initially disabled
// // for state change
// handleStateChange(state: string) {
//   if (this.selectedSubmoduleState !== state) {  // Only update if the state has changed
//     this.selectedSubmoduleState = state as 'start' | 'learn' | 'do';
//     console.log(`State updated by child to: ${state}`);
    
//     if (state === 'learn') {
//       this.learnEnabled = true; // Enable "Learn It"
//     } else if (state === 'do') {
//       this.doEnabled = true; // Enable "Do It"
//     }
//   }
// }


// enableLearn() {
//   this.learnEnabled = true;
// }
// // This method will be called when the user clicks on "Start It", "Learn It", or "Do It"
// // StudyComponent TS remains the same for the logic of setting selectedSubmoduleState
// // startCompleted = false; // Tracks whether "Start It" is completed

// setSubmoduleState(state: 'start' | 'learn' | 'do') {
//   if (state === 'start') {
//     // this.startCompleted = true; // Enable "Learn It" and "Do It"
//   }
//   this.selectedSubmoduleState = state;
//   console.log(`State set to: ${state} for submodule: ${this.selectedSubmodule}`);


// }

// loadSubmoduleContent(submodule:string| null){
//   if(submodule){
//     console.log('loaded content for:',submodule);
//   }
// }


//   changeStateToLearn() {
//     this.selectedSubmoduleState = 'learn'; // Change state to 'learn' when button is clicked
//   }

// isNextButtonEnabled ='false';
// @Output() nextStateEnabled = new EventEmitter<boolean>();
// handleNextButton(isenabled:boolean){
// if(isenabled===true){
//   this.isNextEnabled='true';
//   this.sendyestonext()
// }
// }

// sendyestonext(){
//   this.nextStateEnabled.emit(true)
// }

// }
