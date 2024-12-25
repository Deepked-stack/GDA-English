import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ModuleData {
  modules: { name: string; subModules: string[] }[]; // Define the structure of your JSON data
}

@Injectable({
  providedIn: 'root'
})
export class ModuleDataService {
  private jsonUrl = 'assets/modules.json'; // Correct path to your JSON file

  constructor(private http: HttpClient) {}

  getModules(): Observable<ModuleData> {
    return this.http.get<ModuleData>(this.jsonUrl); // Fetch the JSON data
  }
}
