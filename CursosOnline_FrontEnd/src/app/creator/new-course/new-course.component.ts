import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupComponent } from 'src/app/login/signup/signup.component';
import { CourseModel } from 'src/app/model/courseModel';
import { CreatorModel } from 'src/app/model/creatorModel';
import { UserModel } from 'src/app/model/userModel';
import { CourseService } from 'src/app/service/course.service';
import { CreatorService } from 'src/app/service/creator.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent {

  minDate = new Date();

  private _createCourseForm: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    status: ['', [Validators.required]],
    startDate: '',
    endDate: ''
  });

  constructor(
    public dialogRef: MatDialogRef<NewCourseComponent>,
    private _formBuilder: FormBuilder,
    private courseService: CourseService,
    private snackBar: MatSnackBar,
  ) { }


  saveNewCourse(): void {
    let course: CourseModel = new CourseModel;

    course = this.createCourseForm.value;
    course.creator = "1012345678"
    this.courseService.save(course).subscribe({
      next: () => {
        this.snackBar.open("✅ Curso creado correctamente", "Cerrar", {
          duration: 2500
        });
        this.dialogRef.close();
      },
      error: (error) => {
        this.snackBar.open("⛔ Ocurrió un error al crear un nuevo curso", "Cerrar", {
          duration: 2500
        });
        console.log(error);
      }
    });
  }


  /* VALIDACIONES DEL FORMULARIO */

  // Desactivación de las teclas especiales mencionadas abajo
  disallowSpecialCharacters(event: KeyboardEvent): void {
    const forbiddenCharacters = ['$', '%', '!', '&', '#', '/', '\\'];
    if (forbiddenCharacters.includes(event.key)) {
      event.preventDefault();
    }
  }

  // Impedir que se pueda pegar texto externo que contenga los caracteres especiales mencionados abajo
  handlePaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text') || '';
    const forbiddenCharacters = ['$', '!', '%', '&', '#', '/', '\\'];

    for (const char of forbiddenCharacters) {
      if (pastedText.includes(char)) {
        event.preventDefault();
        return;
      }
    }
  }

  public get createCourseForm(): FormGroup {
    return this._createCourseForm;
  }

}