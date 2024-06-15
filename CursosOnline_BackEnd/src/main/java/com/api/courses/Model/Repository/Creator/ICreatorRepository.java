package com.api.courses.Model.Repository.Creator;

import com.api.courses.Model.Entity.Creator.CreatorEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ICreatorRepository extends CrudRepository<CreatorEntity, String> {
    @Query(value = "SELECT u FROM CreatorEntity u WHERE u.statusAccount = false")
    public Optional<List<CreatorEntity>> findAllDisable();

    Optional<CreatorEntity> findByEmailAndPassword(String email, String password);
}

