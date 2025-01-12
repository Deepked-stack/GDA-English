import { Component } from '@angular/core';
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
  
}
