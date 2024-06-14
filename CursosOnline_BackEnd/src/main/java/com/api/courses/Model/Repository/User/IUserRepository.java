package com.api.courses.Model.Repository.User;

import com.api.courses.Model.Entity.User.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends CrudRepository<UserEntity, String> {
    UserEntity findByEmail(String email);
}
