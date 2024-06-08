package com.api.courses.Service.Role;

import com.api.courses.Model.Entity.Role.RoleEntity;
import com.api.courses.Model.Repository.Role.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.management.relation.Role;
import java.util.List;
import java.util.Optional;

public interface IRoleService {

    public List<RoleEntity> findAllRoles();

    public Optional<RoleEntity> findRoleById(Long id);

    public RoleEntity saveRole(RoleEntity role);

    public Boolean deteleRoleById(Long id);

}
