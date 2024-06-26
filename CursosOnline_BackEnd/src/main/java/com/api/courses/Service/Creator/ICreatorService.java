package com.api.courses.Service.Creator;

import com.api.courses.Model.Entity.Creator.CreatorEntity;

import java.util.List;
import java.util.Optional;

public interface ICreatorService {

    public List<CreatorEntity> findAllCreators();

    public Optional<CreatorEntity> findCreatorById(String id);

    public CreatorEntity saveCreator(CreatorEntity creator);

    public Boolean deleteCreatorById(String id);

    public List<CreatorEntity> findAllDisableCreators();
    public Optional<CreatorEntity> findByEmailAndPassword(String email, String password);

    public Optional<CreatorEntity> updateNumberCourses(String id, int numberCourses);

}
