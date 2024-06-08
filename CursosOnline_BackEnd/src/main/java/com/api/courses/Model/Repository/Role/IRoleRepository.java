package com.api.courses.Model.Repository.Role;

import com.api.courses.Model.Entity.Role.RoleEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRoleRepository extends CrudRepository<RoleEntity, Long> {
}
