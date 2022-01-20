import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  public studentForm: FormGroup;

  constructor(
    public studentService: StudentService,
    public formBuilder: FormBuilder,
    public router: Router,
    public db: AngularFirestore
  ) {
    this.studentForm = this.formBuilder.group({
      name: [''],
      email: [''],
      student_course: [''],
      fees: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.studentService.createStudent(this.studentForm.value);
    this.router.navigateByUrl('list-student');
  }
}
