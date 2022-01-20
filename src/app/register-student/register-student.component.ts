import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  public RegisterForm: FormGroup;
  email: string = '';
  password: string = '';

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public auth: AngularFireAuth
  ) {
    this.RegisterForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  // this.email = new FormControl('', [Validators.required, Validators.email]);
  // this.password = new FormControl('', [Validators.required]);

  ngOnInit(): void {}

  onSubmit() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password).then(
      (res) => {
        alert('Registrasi Berhasil');
        console.log('Registrasi Berhasil', res);
        this.router.navigateByUrl('/login');
      },
      (err) => {
        alert('Registrasi Gagal');
        console.log('Registrasi Gagal', err);
      }
    );
  }
}
