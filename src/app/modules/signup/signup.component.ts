import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initSignupForm();
  }

  initSignupForm(): void {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl(''),
    }, { validators: this.validateConfirmPassword });
  }

  validateConfirmPassword(formGroup: AbstractControl): ValidationErrors {
    const password: AbstractControl = formGroup.get('password');
    const confirmPassword: AbstractControl = formGroup.get('confirmPassword');

    if (password.value && !confirmPassword.value) {
      confirmPassword.setErrors({ required: true });
      return { passwordError: true };
    } else {
      if (password.value === confirmPassword.value) {
        return null;
      } else {
        confirmPassword.setErrors({ differentPasswordConfirmation: true });
        return { passwordError: true };
      }
    }
  }

}
