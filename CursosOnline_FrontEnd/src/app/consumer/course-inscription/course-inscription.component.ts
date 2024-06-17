import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseModel } from 'src/app/model/courseModel';
import { SubscriptionService } from 'src/app/service/subscription.service'; // Importamos el servicio de suscripción
import { AuthService } from 'src/app/service/auth.service';; // Importamos el servicio de autenticación
import { SubscriptionModel } from 'src/app/model/subscriptionModel';
@Component({
  selector: 'app-course-inscription',
  templateUrl: './course-inscription.component.html',
  styleUrls: ['./course-inscription.component.scss']
})
export class CourseInscriptionComponent {
  errorMessage: string = ''; // Variable para almacenar el mensaje de error
  successMessage: string = '';
  constructor(
    public dialogRef: MatDialogRef<CourseInscriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { course: CourseModel },
    private subscriptionService: SubscriptionService,
    private authService: AuthService
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    const currentUser = this.authService.getCurrentUser(); // Obtenemos el usuario actual
    if (currentUser) {
      const userId = currentUser.id; // Obtenemos el ID del usuario actual
  
      // Verificar si this.data.course.id es undefined
      if (this.data.course.id !== undefined) {
        // Creamos una nueva suscripción con el ID del curso y el ID del usuario
        const newSubscription: SubscriptionModel = {
           // No incluyas el id si es autogenerado por el servidor
          userId: userId,
          courseId: this.data.course.id
        };
  
        // Llamamos al servicio para guardar la nueva suscripción
        this.subscriptionService.save(newSubscription).subscribe(
          response => {
            console.log('Inscripción confirmada para el curso:', this.data.course);
            this.successMessage = '¡Inscripción confirmada!';
           
          },
          error => {
            console.error('Error al inscribirse en el curso:', error);
            if (error.error && error.error.message) {
              this.errorMessage = error.error.message;
            } else {
              this.errorMessage = 'Error al inscribirse en el curso. Por favor, inténtalo de nuevo.';
            }
          }
        );
      } else {
        console.error('No se pudo obtener el usuario actual.');
        this.errorMessage = 'No se pudo obtener el usuario actual.';
      }
    }
  }
  
}
