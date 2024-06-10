package com.api.courses.Service.Creator;

import com.api.courses.Model.Entity.Creator.CreatorEntity;

import java.util.List;
import java.util.Optional;

public interface ICreatorService {

    public List<CreatorEntity> findAllCreators();

    public Optional<CreatorEntity> findCreatorById(String id);

    public CreatorEntity saveCreator(CreatorEntity creator);

    public Boolean deleteCreatorById(String id);

}
