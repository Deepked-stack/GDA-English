import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://4321-125-18-161-131.ngrok-free.app/api';
  constructor(private http: HttpClient) { }

  signup(userData: any):Observable<any>{
    return this.http.post(`${this.apiUrl}/signup`,userData);
  }

  login(credentials: {email: string, password: string}):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,credentials);
  }

  getStudentDetails(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile/${userId}`, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    });
  }
  

  updatesubmodulenumber(userId: string): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/progress/${userId}`, // Include userId in the URL
      null, // Send an empty body if backend fetches and updates automatically
      {
        headers: {
          'Content-Type': 'application/json', // Optional but good practice

          'ngrok-skip-browser-warning': 'true',
        },
      }
    );
  }
  updateSectionToLearnit(userId: string): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/tolearnit/${userId}`, // Include userId in the URL
      null, // Send an empty body if backend fetches and updates automatically
      {
        headers: {
          'Content-Type': 'application/json', // Optional but good practice

          'ngrok-skip-browser-warning': 'true',
        },
      }
    );
  } 

  updateSectionToDoit(userId: string): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/todoit/${userId}`, // Include userId in the URL
      null, // Send an empty body if backend fetches and updates automatically
      {
        headers: {
          'Content-Type': 'application/json', // Optional but good practice

          'ngrok-skip-browser-warning': 'true',
        },
      }
    );
  } 


  setSubModuleNumberToInitial(userId: string): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/setsubmoduletoone/${userId}`, // Include userId in the URL
      null, // Send an empty body if backend fetches and updates automatically
      {
        headers: {
          'Content-Type': 'application/json', // Optional but good practice

          'ngrok-skip-browser-warning': 'true',
        },
      }
    );
  } 

}
