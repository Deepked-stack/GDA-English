import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  private progressData = new BehaviorSubject<any[]>([]);

  // Initialize progress data for all modules
  initializeProgress(modules: any[]): void {
    const initialProgress = modules.map((module) => ({
      completedCount: 0,
      totalCount: module.numberofsubmodules,
      completed: Array(module.numberofsubmodules).fill(false),
    }));
    this.progressData.next(initialProgress);
  }

  // Observable to get progress data
  getProgress(): Observable<any[]> {
    return this.progressData.asObservable();
  }

  // Mark a submodule as completed
  markSubmoduleCompleted(moduleIndex: number, submoduleIndex: number): void {
    const currentProgress = this.progressData.getValue();
    if (!currentProgress[moduleIndex].completed[submoduleIndex]) {
      currentProgress[moduleIndex].completed[submoduleIndex] = true;
      currentProgress[moduleIndex].completedCount++;
      this.progressData.next(currentProgress);

      // Persist progress data locally or through an API
      localStorage.setItem('progressData', JSON.stringify(currentProgress));
    }
  }
}
