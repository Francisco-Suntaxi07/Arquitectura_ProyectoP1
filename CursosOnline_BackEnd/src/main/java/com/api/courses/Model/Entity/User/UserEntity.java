package com.api.courses.Model.Entity.User;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "usuario")
public class UserEntity {

    @Id
    @NotEmpty
    @Column(name = "id_usuario")
    private String id;

    @NotEmpty
    @Column(name = "nombre_usuario")
    private String name;

    @NotEmpty
    @Column(name = "correo_usuario")
    private String email;

    @NotEmpty
    @Column(name = "contrasenia_usuario")
    private String password;

    @NotNull
    @Column(name = "rol_usuario")
    private String role;

    public UserEntity() {
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

}
