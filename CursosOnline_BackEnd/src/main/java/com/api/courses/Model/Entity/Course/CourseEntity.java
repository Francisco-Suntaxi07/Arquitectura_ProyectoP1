package com.api.courses.Model.Entity.Course;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "curso")
public class CourseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_curso")
    private Long id;

    @NotEmpty
    @Column(name = "id_creador")
    private String creator;

    @NotEmpty
    @Column(name = "nombre_curso")
    private String name;

    @Column(name = "descripcion_curso")
    private String description;

    @NotEmpty
    @Column(name = "estado_curso")
    private String status = "En construcción";

    @Column(name = "fecha_inicio_curso")
    private LocalDate startDate;

    @Column(name = "fecha_fin_curso")
    private LocalDate endDate;
    public class CourseStatus {
        public static final String ACTIVE = "Activo";
        public static final String INACTIVE = "Inactivo";
        public static final String IN_PROGRESS = "En construcción";
    }
    public CourseEntity() {
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }
}
