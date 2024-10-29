import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import ValidateForm from '../../helpers/validateform';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'

})
export class SignupComponent {
  signupForm!: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  constructor(private fb: FormBuilder, private auth:AuthService) {

  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  toggleEyeIcon() {
    this.isText = !this.isText;
    this.eyeIcon = this.isText ? "fa-eye" : "fa-eye-slash";
    this.type = this.isText ? "text" : "password";
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";

  }
  onSignup() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.auth.signUp(this.signupForm.value).subscribe({
        next: (res) => {
          console.log(res.message);
          this.signupForm.reset();
        }
      })
    } else {
      console.log("Form is not valid")
      ValidateForm.validateAllFormFileds(this.signupForm);
      alert("Your form is invalid")
    }
  }
  

}
