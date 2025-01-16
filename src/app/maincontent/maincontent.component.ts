import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleDataService } from '../module-data.service';

@Component({
  selector: 'app-maincontent',
  standalone: false,
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent {
  
  selectedsubmodule: string = '';  // This is the submodule you want to display
  selectedModuleName: string = 'Select a module to view details';
  currentModuleIndex: number = 0;
  currentSubmoduleIndex: number = 0;
  modules: { name: string; numberofsubmodules: number; subModules: string[] }[] = [];

  constructor(private router: Router ,private Moduledataservice: ModuleDataService) {}

  gotohome() {
    this.router.navigate(['landingpage']);
  }

  displayModuleName(submodule: string) {
    this.selectedsubmodule = submodule;  // This will store the selected submodule

    this.modules.forEach((module, moduleIndex) => {
      const submoduleIndex = module.subModules.indexOf(submodule);
      if (submoduleIndex !== -1) {
        this.currentModuleIndex = moduleIndex;
        this.currentSubmoduleIndex = submoduleIndex;
        console.log(`Updated to Module: ${moduleIndex}, Submodule: ${submoduleIndex}`);
        console.log(`Updated to Module: ${moduleIndex}, Submodule: ${submoduleIndex}`);

      }
    });
  }
 

  isModuleVisible = false;

  toggleModuleVisibility() {
    this.isModuleVisible = !this.isModuleVisible;
  }


  ngOnInit(): void {
    this.Moduledataservice.getModules().subscribe((data) => {
      this.modules = data.modules; // Adjusted to access the 'modules' property
  
      // Initialize completion status
      this.Moduledataservice.initializeCompletionStatus(this.modules);
  
      // Set default module and submodule
      if (this.modules.length > 0 && this.modules[0].subModules.length > 0) {
        this.currentModuleIndex = 0;
        this.currentSubmoduleIndex = 0;
        this.Moduledataservice.setSubmodule(this.modules[0].subModules[0]);
      }
    });
  
    // Subscribe to selected submodule changes
    this.Moduledataservice.getSubmodule().subscribe((submodule) => {
      this.selectedsubmodule = submodule;
    });
  }
  
  
  navigate(direction: 'next' | 'back') {
    const { moduleIndex, submoduleIndex } = this.Moduledataservice.navigateSubmodules(
      this.currentModuleIndex,
      this.currentSubmoduleIndex,
      direction
    );
  
    this.currentModuleIndex = moduleIndex;
    this.currentSubmoduleIndex = submoduleIndex;
  
    // Update the selected submodule
    const selectedSubmodule = this.modules[moduleIndex].subModules[submoduleIndex];
    this.Moduledataservice.setSubmodule(selectedSubmodule);
  }
  isFirstSubmodule(): boolean {
    return this.currentModuleIndex === 0 && this.currentSubmoduleIndex === 0;
  }
  
  isLastSubmodule(): boolean {
    return this.currentModuleIndex === this.modules.length - 1 &&
           this.currentSubmoduleIndex === this.modules[this.currentModuleIndex].subModules.length - 1;
  }
  getNextSubmoduleName(): string | null {
    if (this.isLastSubmodule()) {
      return null; // No next submodule if it's the last one
    }
  
    if (this.currentSubmoduleIndex < this.modules[this.currentModuleIndex].subModules.length - 1) {
      // Within the same module
      return this.modules[this.currentModuleIndex].subModules[this.currentSubmoduleIndex + 1];
    } else if (this.currentModuleIndex < this.modules.length - 1) {
      // Move to the next module
      return this.modules[this.currentModuleIndex + 1].subModules[0];
    }
  
    return null;
  }
  
  getPreviousSubmoduleName(): string | null {
    if (this.isFirstSubmodule()) {
      return null; // No previous submodule if it's the first one
    }
  
    if (this.currentSubmoduleIndex > 0) {
      // Within the same module
      return this.modules[this.currentModuleIndex].subModules[this.currentSubmoduleIndex - 1];
    } else if (this.currentModuleIndex > 0) {
      // Move to the previous module
      return this.modules[this.currentModuleIndex - 1].subModules[
        this.modules[this.currentModuleIndex - 1].subModules.length - 1
      ];
    }
  
    return null;
  }
  
  @Output() contentSelected = new EventEmitter<string>();

  // This method is called when the StartIt button is clicked
  showStudyContent(content: string) {
    this.contentSelected.emit(content); // Emit the selected content
  } 
}
