package com.api.courses.Service.User;

import com.api.courses.Model.Entity.User.UserEntity;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    public List<UserEntity> findAllUsers();

    public Optional<UserEntity> findUserById(String id);

    public UserEntity saveUser(UserEntity user);

    public Boolean deleteUserById(String id);

}
