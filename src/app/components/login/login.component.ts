import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',

  standalone: true,
  imports: [],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  constructor() {

  }

  ngOnInit(): void {

  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon ="fa-eye" : this.eyeIcon ="fa-eye-slash";
    this.isText ? this.type="text": this.type="password";

  }


}
