import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { response } from 'express';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

signupForm: FormGroup;
isSubmitted= false;

constructor(private fb:FormBuilder,private http: HttpClient, private apiservice: ApiService){}
ngOnInit(): void {
  this.signupForm= this.fb.group({
    username: ['',[Validators.required, Validators.minLength(5)]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.min(8) ]],
    confpassword:['',[Validators.required,Validators.min(8) ]]
  });
 
  // Subscribe to password and confirm password changes
  this.signupForm.get('confpassword')?.valueChanges.subscribe(() => {
    this.checkPasswordMatch();
  });
}

checkPasswordMatch() {
  const password = this.signupForm.get('password')?.value;
  const confirmPassword = this.signupForm.get('confpassword')?.value;

  // If passwords do not match, set mismatch error
  if (password && confirmPassword && password !== confirmPassword) {
    this.signupForm.get('confpassword')?.setErrors({ mismatch: true });
  } else {
    this.signupForm.get('confpassword')?.setErrors(null); // Clear error if match
  }
}
onSubmit(){
this.isSubmitted=true;
if(this.signupForm.invalid){
  alert('Missing values or Invalid Credentials');
  return 
}




const signupData = {
  username: this.signupForm.value.username,
  email: this.signupForm.value.email,
  password: this.signupForm.value.password,
};

this.apiservice.signup(signupData).subscribe(
  (response)=>{
    console.log('Signup Successful',response);
    alert('Registeration Successful');
  },
  (error)=>{
    console.error('signupfailed',error);
    alert('Signup Failed!');
  }

)
}
}

