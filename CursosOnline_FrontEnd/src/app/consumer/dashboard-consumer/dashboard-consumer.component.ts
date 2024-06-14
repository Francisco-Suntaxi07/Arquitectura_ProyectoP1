import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-consumer',
  templateUrl: './dashboard-consumer.component.html',
  styleUrls: ['./dashboard-consumer.component.scss']
})
export class DashboardConsumerComponent {
  courses = [
    {
      title: 'Web design & development courses for beginners',
      instructor: 'John Doe',
      rating: 4.5
    },
    // Agrega más cursos aquí
  ];

  stats = [
    { value: 23, label: 'MATERIAS', subLabel: 'DISPONIBLES', bgClass: 'bg-success' },
    { value: 120, label: 'CURSOS', subLabel: 'ONLINE', bgClass: 'bg-primary' },
    { value: 42, label: 'INSTRUCTORES', subLabel: 'REGISTRADOS', bgClass: 'bg-secondary' },
    { value: 6000, label: 'ESTUDIANTES', subLabel: 'FELICES', bgClass: 'bg-warning' },
  ];
}