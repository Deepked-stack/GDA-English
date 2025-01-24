
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModuleDataService } from '../module-data.service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { BlobOptions } from 'buffer';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ModuleData, ModuleDataService } from '../module-data.service';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-maincontent',
  standalone: false,
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent implements OnInit{

  modules: any[] = []; // To store the module data
  userId: string|null =null;

  constructor(private moduleDataService: ModuleDataService , private apiservice: ApiService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.moduleDataService.getModules().subscribe({
      next: (data) => {
        this.modules = data.modules;
        console.log('data of modules from study component',this.modules);
      },
      error: (error) => {
        console.error('Error fetching module data:', error);
      }
    });

    this.userId= this.route.snapshot.paramMap.get('userId');

  }

  toggleSubModules(module: any) {
        module.showSubModules = !module.showSubModules;
      }

      scrollToTopInMainContent() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
        console.log('Scrolled to top in MainContent');
      }
      
  selectedSubmoduleName: string = 'Select Topic to Study';
  selectedModuleId: number | null = null;
  selectedSubModuleIndex: number | null = null;
  selectedSelector:string | null =null;
  numberOfSubmodules:number;
  selectSubmodule(moduleId:number, subModuleIndex:number, submoduleName:string, noofsubmodules:number){
    this.selectedModuleId = moduleId;
    this.selectedSubModuleIndex = subModuleIndex;
    this.selectedSubmoduleName = submoduleName;
    this.numberOfSubmodules = noofsubmodules;
    this.selectedSubmoduleName = this.currentSubmoduleName;

    console.log('Module ID:', this.selectedModuleId);
  console.log('Submodule Index:', this.selectedSubModuleIndex);
  console.log('Clicked submodule with ID:', moduleId, 'and Index:', subModuleIndex); // Log to confirm values
  console.log('selector:',this.selectedSelector)
}
nextSubmoduleName:string;
prevSubmoduleName:string;
currentSubmoduleName:string;

newSubmoduleId: number;
newModuleId: number;

navigateNext() {
  if (this.selectedSubModuleIndex === this.numberOfSubmodules) {
    // If at the last submodule, move to the next module and reset submodule index
    this.newModuleId = this.selectedModuleId + 1;
    this.newSubmoduleId = 1;
  } else {
    // Otherwise, increment the submodule index within the same module
    this.newSubmoduleId = this.selectedSubModuleIndex + 1;
    this.newModuleId = this.selectedModuleId;
  }
  this.nextSubmoduleName = this.modules[this.newModuleId].subModules[this.newSubmoduleId].name;
  this.currentSubmoduleName = this.modules[this.selectedModuleId].subModules[this.newSubmoduleId].name;
  this.changeToNextSubmoduleAndStartit();

}

changeToNextSubmoduleAndStartit(){
  this.apiservice.updatesubmodulenumber(this.userId).subscribe({
    next: (response) => {
      console.log('Update successful:', response);
      // Handle success, maybe show a success message
    },
    error: (error) => {
      console.error('Update failed:', error);
      // Handle error, maybe show an error message
    }
  });
}

navigateBack() {
  if (this.selectedSubModuleIndex === 1) {
    // If at the first submodule, move to the previous module and set submodule to last
    this.newModuleId = this.selectedModuleId - 1;
    this.newSubmoduleId = this.numberOfSubmodules;

  } else {
    // Otherwise, decrement the submodule index within the same module
    this.newSubmoduleId = this.selectedSubModuleIndex - 1;
    this.newModuleId = this.selectedModuleId;
  }
  this.prevSubmoduleName= this.modules[this.newModuleId].subModules[this.newSubmoduleId].name;
  this.currentSubmoduleName = this.modules[this.selectedModuleId].subModules[this.newSubmoduleId].name;

}

 updateModuleIdFromChild(updatedModuleId: number) {
    console.log(`Received updated Module ID: ${updatedModuleId}`);
    this.selectedModuleId = updatedModuleId;
  }

  updateSubModuleIdFromChild(updatedSubModuleId: number) {
    console.log(`Received updated Submodule ID: ${updatedSubModuleId}`);
    this.selectedSubModuleIndex = updatedSubModuleId;
  }

  isNextEnabled:boolean =false;
  nextisenabled:boolean=false;

  handleNextButtonEnabling(isenabled:boolean){
    this.nextisenabled=isenabled;
    // isenabled=true;
    console.log('enabled:',this.nextisenabled)
    // alert('true for maincontent')
    if (this.nextisenabled === true) {
      alert('Next button enabled');
    } else {
      alert('Next button disabled');
    }
    this.increaseprogresscount();
    }
    enabled:boolean=this.nextisenabled;
  
  
  
  
  
  
  // tracking progress now
  numberofsubmodulescompleted:number=0;
  increaseprogresscount(){
    if(this.nextisenabled === true){
      this.numberofsubmodulescompleted= this.numberofsubmodulescompleted+1;
      alert(this.numberofsubmodulescompleted);
    }
  }
  
  

}
















//   userId: string|null =null;
//   selectedsubmodule: string = '';  // This is the submodule you want to display
//   selectedModuleName: string = 'Select a module to view details';
//   currentModuleIndex: number = 0;
//   currentSubmoduleIndex: number = 0;
//   modules:ModuleData;
//   submodule:
//   details:any={currentSubmoduleIndex:this.currentSubmoduleIndex,userid:this.userId};

//   constructor(private router: Router ,private Moduledataservice: ModuleDataService, private route :ActivatedRoute, private apiservice: ApiService) {}

//   gotohome() {
//     this.router.navigate(['landingpage']);
//   }

//   displayModuleName(submodule: string) {
//     this.selectedsubmodule = submodule;  // This will store the selected submodule

//     this.modules.modules.forEach((module, moduleIndex) => {
//       const submoduleIndex = module.subModules.indexOf(submodule);
//       if (submoduleIndex !== -1) {
//         this.currentModuleIndex = moduleIndex;
//         this.currentSubmoduleIndex = submoduleIndex;
//         console.log(`Updated to Module: ${moduleIndex}, Submodule: ${submoduleIndex}`);
//         console.log(`Updated to Module: ${moduleIndex}, Submodule: ${submoduleIndex}`);

//       }
//     });
//   }
 

//   isModuleVisible = false;

//   toggleModuleVisibility() {
//     this.isModuleVisible = !this.isModuleVisible;
//   }


//   ngOnInit(): void {
//     this.userId= this.route.snapshot.paramMap.get('userId');

//     this.Moduledataservice.getModules().subscribe((data) => {
//       this.modules = data; // Adjusted to access the 'modules' property
  
//       // Initialize completion status
//       this.Moduledataservice.initializeCompletionStatus(this.modules);
  
//       // Set default module and submodule
//       if (this.modules.length > 0 && this.modules[0].subModules.length > 0) {
//         this.currentModuleIndex = 0;
//         this.currentSubmoduleIndex = 0;
//         this.Moduledataservice.setSubmodule(this.modules[0].subModules[0]);
//       }
//     });
  
//     // Subscribe to selected submodule changes
//     this.Moduledataservice.getSubmodule().subscribe((submodule) => {
//       this.selectedsubmodule = submodule;
//     });
//   }
  
  
//   navigate(direction: 'next' | 'back') {
//     const { moduleIndex, submoduleIndex } = this.Moduledataservice.navigateSubmodules(
//       this.currentModuleIndex,
//       this.currentSubmoduleIndex,
//       direction
//     );
  
//     this.currentModuleIndex = moduleIndex;
//     this.currentSubmoduleIndex = submoduleIndex;
  
//     // Update the selected submodule
//     const selectedSubmodule = this.modules[moduleIndex].subModules[submoduleIndex];
//     this.Moduledataservice.setSubmodule(selectedSubmodule);
  
//     // Update the submodule and section numbers
//     const updatedDetails = {
//       updatedsubmodulenumber: this.currentSubmoduleIndex + 1, // Increment submodule number
//       updatedsectionnumber: 1, // Set section number to 1
//       userId: this.userId
//     };
  
//    this.changeToNextSubmoduleAndStartit();
//   }
 
//   changeToNextSubmoduleAndStartit(){
//     this.apiservice.updatesubmodulenumber(this.userId).subscribe({
//       next: (response) => {
//         console.log('Update successful:', response);
//         // Handle success, maybe show a success message
//       },
//       error: (error) => {
//         console.error('Update failed:', error);
//         // Handle error, maybe show an error message
//       }
//     });
//   }

  
  
//   isFirstSubmodule(): boolean {
//     return this.currentModuleIndex === 0 && this.currentSubmoduleIndex === 0;
//   }
  
//   isLastSubmodule(): boolean {
   
    
//     return this.currentModuleIndex === this.modules.length - 1 &&
//            this.currentSubmoduleIndex === this.modules[this.currentModuleIndex].subModules.length - 1 && !this.nextisenabled ;
//   }
//   getNextSubmoduleName(): string | null {
//     if (this.isLastSubmodule()) {
//       return null; // No next submodule if it's the last one
//     }
  
//     if (this.currentSubmoduleIndex < this.modules[this.currentModuleIndex].subModules.length - 1) {
//       // Within the same module
//       return this.modules[this.currentModuleIndex].subModules[this.currentSubmoduleIndex + 1];
//     } else if (this.currentModuleIndex < this.modules.length - 1) {
//       // Move to the next module
//       return this.modules[this.currentModuleIndex + 1].subModules[0];
//     }
  
//     return null;
//   }
  
//   getPreviousSubmoduleName(): string | null {
//     if (this.isFirstSubmodule()) {
//       return null; // No previous submodule if it's the first one
//     }
  
//     if (this.currentSubmoduleIndex > 0) {
//       // Within the same module
//       return this.modules[this.currentModuleIndex].subModules[this.currentSubmoduleIndex - 1];
//     } else if (this.currentModuleIndex > 0) {
//       // Move to the previous module
//       return this.modules[this.currentModuleIndex - 1].subModules[
//         this.modules[this.currentModuleIndex - 1].subModules.length - 1
//       ];
//     }
  
//     return null;
//   }
  
//   @Output() contentSelected = new EventEmitter<string>();

//   // This method is called when the StartIt button is clicked
//   showStudyContent(content: string) {
//     this.contentSelected.emit(content); // Emit the selected content
//   } 

//   nextisenabled:boolean=false;

//   handleNextButtonEnabling(isenabled:boolean){
//   this.nextisenabled=isenabled;
//   console.log(this.nextisenabled)
//   // alert('true for maincontent')
//   if (this.nextisenabled === true) {
//     alert('Next button enabled');
//   } else {
//     alert('Next button disabled');
//   }
//   this.increaseprogresscount();
//   }
//   enabled:boolean=this.nextisenabled;






// // tracking progress now
// numberofsubmodulescompleted:number=0;
// increaseprogresscount(){
//   if(this.nextisenabled === true){
//     this.numberofsubmodulescompleted= this.numberofsubmodulescompleted+1;
//     alert(this.numberofsubmodulescompleted);
//   }
// }



// }
