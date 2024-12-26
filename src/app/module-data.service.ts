import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface ModuleData {
  modules: { name: string; subModules: string[] }[]; // Define the structure of your JSON data
}

@Injectable({
  providedIn: 'root'
})
export class ModuleDataService {
  private jsonUrl = 'assets/modules.json'; // Correct path to your JSON file
  private selectedSubmodule = new BehaviorSubject<string | null>(null);  // default to null or the first submodule if preferred

  constructor(private http: HttpClient) {}

  getModules(): Observable<ModuleData> {
    return this.http.get<ModuleData>(this.jsonUrl); // Fetch the JSON data
  }

  setSubmodule(submodule: string) {
    this.selectedSubmodule.next(submodule);
  }

  // Get the selected submodule
  getSubmodule() {
    return this.selectedSubmodule.asObservable();
  }

  getSubmoduleComponentname(){
    // from ModuleDataService.json get here submodules.component
  }

  
}
