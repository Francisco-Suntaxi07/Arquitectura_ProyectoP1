package com.api.courses.Model.Entity.Subscription;

import jakarta.persistence.*;

@Entity
@Table(name = "subscripcion")
public class SubscriptionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_subscripcion")
    private Long id;

    @Column(name = "id_usuario")
    private String userId;

    @Column(name = "id_curso")
    private Long courseId;

    public SubscriptionEntity() {
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }
}
