package com.api.courses.Service.Role;

import com.api.courses.Model.Entity.Role.RoleEntity;
import com.api.courses.Model.Repository.Role.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RoleService implements IRoleService{

    @Autowired
    private IRoleRepository roleRepository;

    @Override
    public List<RoleEntity> findAllRoles() {
        return (ArrayList<RoleEntity>) roleRepository.findAll();
    }

    @Override
    public Optional<RoleEntity> findRoleById(Long id) {
        return roleRepository.findById(id);
    }

    @Override
    public RoleEntity saveRole(RoleEntity role) {
        return roleRepository.save(role);
    }

    @Override
    public Boolean deteleRoleById(Long id) {
        if (roleRepository.existsById(id)){
            roleRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
