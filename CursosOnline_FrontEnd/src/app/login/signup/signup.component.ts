import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  password: string = '';
  isOpen = true;  // Usar esta variable para controlar la visibilidad del modal
  passwordStrength: string = ''; // Variable para mostrar la fortaleza de la contraseña
  passwordMessage: string = ''; // Variable para mostrar el mensaje de fortaleza

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private router: Router,
  ) { }

  submitForm(form: NgForm): void {
    if (form.valid) {
      // Manejar la lógica de envío del formulario aquí (por ejemplo, llamada a API)
      this.closeSignIn();
    }
  }

  closeSignIn(): void {
    this.dialogRef.close();
  }

  //Control de Seguridad de Contraseña
  checkPasswordStrength(): void {
    let regExpWeak = /^[a-z]+$/;
    let regExpMedium = /^(?=.*\d)(?=.*[a-zA-Z])/;
    let regExpStrong = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*?-~])/;
  
    if (this.password.length < 8 || regExpWeak.test(this.password)) {
      this.passwordStrength = 'weak';
      this.passwordMessage = 'Clave Débil';
    } else if (this.password.length >= 8 && this.password.length <= 12 && regExpMedium.test(this.password)) {
      this.passwordStrength = 'medium';
      this.passwordMessage = 'Clave Media';
    } else if (this.password.length > 12 && regExpStrong.test(this.password)) {
      this.passwordStrength = 'strong';
      this.passwordMessage = 'Clave Fuerte';
    } else {
      this.passwordStrength = '';
      this.passwordMessage = '';
    }
  }

  // Desactivación de las teclas especiales mencionadas abajo
  disallowSpecialCharacters(event: KeyboardEvent): void {
    const forbiddenCharacters = ['$','%','!','&', '#', '/', '\\'];
    if (forbiddenCharacters.includes(event.key)) {
      event.preventDefault();
    }
  }

  // Impedir que se pueda pegar texto externo que contenga los caracteres especiales mencionados abajo
  handlePaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text') || '';
    const forbiddenCharacters = ['$','!','%','&', '#', '/', '\\'];

    for (const char of forbiddenCharacters) {
      if (pastedText.includes(char)) {
        event.preventDefault();
        return;
      }
    }
  }
}