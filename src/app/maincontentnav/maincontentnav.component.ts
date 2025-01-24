import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { error } from 'console';

@Component({
  selector: 'app-maincontentnav',
  standalone: false,
  
  templateUrl: './maincontentnav.component.html',
  styleUrl: './maincontentnav.component.css'
})
export class MaincontentnavComponent implements OnInit{
  studentData:any={};
  userId: string | null = null;

ngOnInit(): void {
  this.userId = this.route.snapshot.paramMap.get('userId');
  if(this.userId){
 this.fetchStudentData();
  }

  console.log('Student Details: ', this.studentData);

};

fetchStudentData() {
  if (this.userId) {
    this.apiservice.getStudentDetails(this.userId).subscribe(
      (data) => {
        console.log('API Response:', data);
        this.studentData = data; // Update data here
      },
      (error) => {
        console.error('Error fetching student details:', error);
      }
    );
  }
}
profileOverlayVisible = false;

toggleProfileOverlay() {
  this.profileOverlayVisible = !this.profileOverlayVisible;
}
constructor(private router:Router,private apiservice: ApiService, private route: ActivatedRoute ){}

isModuleVisible = false;

menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
  this.isModuleVisible = !this.isModuleVisible;

}

goToLogin(){
  this.router.navigate(['/login']);
}


gotohome(){
  this.router.navigate(['/landingpage',this.userId])
  }

}
