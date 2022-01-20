import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private firestore: AngularFirestore) {}

  getStudentDoc(id: any) {
    return this.firestore
      .collection('student-collection')
      .doc(id)
      .valueChanges();
  }

  getStudentList() {
    return this.firestore.collection('student-collection').snapshotChanges();
  }

  createStudent(student: Student) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('student-collection')
        .add(student)
        .then(
          (res) => {
            console.log('Sukses', res);
          },
          (err) => reject(err)
        );
    });
  }

  deleteStudent(student: any) {
    return this.firestore
      .collection('student-collection')
      .doc(student.id)
      .delete();
  }

  updateStudent(student: Student, id: any) {
    return this.firestore.collection('student-collection').doc(id).update({
      name: student.name,
      email: student.email,
      student_course: student.student_course,
      fees: student.fees,
    });
  }
}
