package com.api.courses.Service.User;

import com.api.courses.Model.Entity.User.UserEntity;
import com.api.courses.Model.Repository.User.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService{

    @Autowired
    private IUserRepository userRepository;

    @Override
    public List<UserEntity> findAllUsers() {
        return (ArrayList<UserEntity>) userRepository.findAll();
    }

    @Override
    public Optional<UserEntity> findUserById(String id) {
        return userRepository.findById(id);
    }

    @Override
    public UserEntity saveUser(UserEntity user) {
        return userRepository.save(user);
    }

    @Override
    public Boolean deleteUserById(String id) {
        if (userRepository.existsById(id)){
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
    @Override
    public UserEntity findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
