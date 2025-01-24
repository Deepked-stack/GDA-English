

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface ModuleCompletionStatus {
  modules: {
    name: string;
    subModules: {
      name: string;
      completed: boolean; // Track completion of each submodule
    }[];
    completedCount: number; // Track how many submodules are completed in this module
  }[];
}

@Injectable({
    providedIn: 'root',
  })
  export class ModuleDataService {
    private selectedSubmodule = new BehaviorSubject<string | null>(null);  // default to null or the first submodule if preferred
    private completionStatusSubject = new BehaviorSubject<ModuleCompletionStatus | null>(null); // Track completion statuses
  
  private jsonUrl = 'assets/modules.json';
  constructor(private http: HttpClient){}

  getModules(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }

  setSubmodule(submodule: string) {
    this.selectedSubmodule.next(submodule);
  }

  // Get the selected submodule
  getSubmodule() {
    return this.selectedSubmodule.asObservable();
  }

  initializeCompletionStatus(modules: { name: string; subModules: string[]; numberofsubmodules: number }[]) {
    const completionStatus: ModuleCompletionStatus = {
      modules: modules.map(module => ({
        name: module.name,
        subModules: module.subModules.map(submodule => ({
          name: submodule,
          completed: false // Initially, no submodule is completed
        })),
        completedCount: 0 // Initially, no submodules are completed in the module
      }))
    };

    this.completionStatusSubject.next(completionStatus);
  }

  // Get the completion status for modules
  getCompletionStatus() {
    return this.completionStatusSubject.asObservable();
  }

  // Mark a submodule as completed and update the completion count of the module
  markSubmoduleAsCompleted(moduleIndex: number, submoduleIndex: number) {
    const completionStatus = this.completionStatusSubject.value?.modules;

    if (completionStatus) {
      const completionModule = completionStatus[moduleIndex];
      const submoduleStatus = completionModule.subModules[submoduleIndex];

      if (!submoduleStatus.completed) {
        submoduleStatus.completed = true;
        completionModule.completedCount++;

        // Ensure completedCount does not exceed the total number of submodules
        if (completionModule.completedCount > completionModule.subModules.length) {
          completionModule.completedCount = completionModule.subModules.length;
        }

        // Update the completion status
        this.completionStatusSubject.next({ modules: completionStatus });
      }
    }
  }
  
navigateSubmodules(currentModuleIndex: number, currentSubmoduleIndex: number, direction: 'next' | 'back'): { moduleIndex: number, submoduleIndex: number } {
  const modules = this.completionStatusSubject.value?.modules;

  if (!modules) return { moduleIndex: 0, submoduleIndex: 0 };

  let moduleIndex = currentModuleIndex;
  let submoduleIndex = currentSubmoduleIndex;

  if (direction === 'next') {
    // Move to the next submodule within the same module
    if (submoduleIndex < modules[moduleIndex].subModules.length - 1) {
      submoduleIndex++;
    } else {
      // Move to the first submodule of the next module
      moduleIndex = (moduleIndex + 1) % modules.length;
      submoduleIndex = 0;
    }
  } else if (direction === 'back') {
    // Move to the previous submodule within the same module
    if (submoduleIndex > 0) {
      submoduleIndex--;
    } else {
      // Move to the last submodule of the previous module
      moduleIndex = (moduleIndex - 1 + modules.length) % modules.length;
      submoduleIndex = modules[moduleIndex].subModules.length - 1;
    }
  }

  return { moduleIndex, submoduleIndex };
}




  }













// import { BehaviorSubject, Observable } from 'rxjs';
// import * as moduleData from '../assets/modules.json';  // Import your module.json data

// export interface ModuleData {
//   modules: {
//     name: string;
//     numberofsubmodules: number;
//     subModules: { index: number; name: string }[];
//   }[];
// }

// interface ModuleCompletionStatus {
//   modules: {
//     name: string;
//     subModules: {
//       name: string;
//       completed: boolean;
//     }[];
//     completedCount: number;
//   }[];
// }


//   private jsonUrl = 'assets/modules.json';
//   private selectedSubmodule = new BehaviorSubject<string | null>(null);
//   private completionStatusSubject = new BehaviorSubject<ModuleCompletionStatus | null>(null);

//   constructor(private http: HttpClient) {}

//   getModules(): Observable<ModuleData> {
//     return this.http.get<ModuleData>(this.jsonUrl);
//   }

//   setSubmodule(submodule: string) {
//     this.selectedSubmodule.next(submodule);
//   }

//   getSubmodule() {
//     return this.selectedSubmodule.asObservable();
//   }

//   initializeCompletionStatus(modules: ModuleData['modules']) {
//     const completionStatus: ModuleCompletionStatus = {
//       modules: modules.map((module) => ({
//         name: module.name,
//         subModules: module.subModules.map((submodule) => ({
//           name: submodule.name,
//           completed: false,
//         })),
//         completedCount: 0,
//       })),
//     };

//     this.completionStatusSubject.next(completionStatus);
//   }

//   getCompletionStatus() {
//     return this.completionStatusSubject.asObservable();
//   }

//   markSubmoduleAsCompleted(moduleIndex: number, submoduleIndex: number) {
//     const completionStatus = this.completionStatusSubject.value?.modules;

//     if (completionStatus) {
//       const completionModule = completionStatus[moduleIndex];
//       const submoduleStatus = completionModule.subModules[submoduleIndex];

//       if (!submoduleStatus.completed) {
//         submoduleStatus.completed = true;
//         completionModule.completedCount++;

//         this.completionStatusSubject.next({ modules: completionStatus });
//       }
//     }
//   }


  
// navigateSubmodules(currentModuleIndex: number, currentSubmoduleIndex: number, direction: 'next' | 'back'): { moduleIndex: number, submoduleIndex: number } {
//   const modules = this.completionStatusSubject.value?.modules;

//   if (!modules) return { moduleIndex: 0, submoduleIndex: 0 };

//   let moduleIndex = currentModuleIndex;
//   let submoduleIndex = currentSubmoduleIndex;

//   if (direction === 'next') {
//     // Move to the next submodule within the same module
//     if (submoduleIndex < modules[moduleIndex].subModules.length - 1) {
//       submoduleIndex++;
//     } else {
//       // Move to the first submodule of the next module
//       moduleIndex = (moduleIndex + 1) % modules.length;
//       submoduleIndex = 0;
//     }
//   } else if (direction === 'back') {
//     // Move to the previous submodule within the same module
//     if (submoduleIndex > 0) {
//       submoduleIndex--;
//     } else {
//       // Move to the last submodule of the previous module
//       moduleIndex = (moduleIndex - 1 + modules.length) % modules.length;
//       submoduleIndex = modules[moduleIndex].subModules.length - 1;
//     }
//   }

//   return { moduleIndex, submoduleIndex };
// }


// }
