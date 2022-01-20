import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public LoginForm: FormGroup;
  email: string = '';
  password: string = '';
  data: any;

  constructor(
    public auth: AngularFireAuth,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.LoginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.auth.signInWithEmailAndPassword(this.email, this.password).then(
      (res) => {
        alert('Login Sukses');
        console.log('Login Sukses = ', res);
        this.router.navigateByUrl('/list-student');
      },
      (err) => {
        alert('Login Gagal');
        console.log('Login Gagal = ', err);
      }
    );
  }
}
