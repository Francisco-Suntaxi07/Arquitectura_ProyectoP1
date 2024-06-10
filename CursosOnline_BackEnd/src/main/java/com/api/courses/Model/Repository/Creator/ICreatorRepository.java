package com.api.courses.Model.Repository.Creator;

import com.api.courses.Model.Entity.Creator.CreatorEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICreatorRepository extends CrudRepository<CreatorEntity, String> {
}
