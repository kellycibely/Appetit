import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  passwordType: string = 'password';
  type: boolean = true;
  matcher = new MyErrorStateMatcher();

  auth = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  constructor(private route: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.auth.value);
    this.route.navigateByUrl('/home/1');
  }

  get f() {
    return this.auth.controls;
  }

  visibility() {
    if (this.type) {
      this.passwordType = 'text';
      this.type = false;
    } else {
      this.passwordType = 'password';
      this.type = true;
    }
  }
}
