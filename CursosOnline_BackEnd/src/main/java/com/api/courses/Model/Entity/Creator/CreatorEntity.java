package com.api.courses.Model.Entity.Creator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table(name = "creador")
public class CreatorEntity {

    @Id
    @NotEmpty
    @Column(name = "id_creador")
    private String id;

    @Column(name = "nombre_creador")
    @NotEmpty
    private String name;

    @Column(name = "correo_creador")
    @NotEmpty
    private String email;

    @Column(name = "contrasenia_creador")
    @NotEmpty
    private String password;

    @Column(name = "rol_creador")
    @NotEmpty
    private String role = "CREADOR_C";

    @Column(name = "cursos_creador")
    private int numberCourses = 0;

    public CreatorEntity() {
        super();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getNumberCourses() {
        return numberCourses;
    }

    public void setNumberCourses(int numberCourses) {
        this.numberCourses = numberCourses;
    }
}
