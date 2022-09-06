import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginData } from '../../models/login-data';

//XXX
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;

  // loginForm?: FormGroup;
  // loading = false;
  // submitted = false;
  // returnUrl?: string;
  // error = '';

  constructor(private authenticationService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);

  }
  //onSubmit1() {}

  private checkCredentials(signInForm: NgForm) {
    const signInData = new LoginData(signInForm.value.login, signInForm.value.password);
    if (!this.authenticationService.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }

}
