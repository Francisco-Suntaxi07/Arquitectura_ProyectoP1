package com.api.courses.Service.Creator;

import com.api.courses.Model.Entity.Creator.CreatorEntity;
import com.api.courses.Model.Repository.Creator.ICreatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CreatorService implements ICreatorService{

    @Autowired
    private ICreatorRepository creatorRepository;

    @Override
    public List<CreatorEntity> findAllCreators() {
        return (ArrayList<CreatorEntity>) creatorRepository.findAll();
    }

    @Override
    public Optional<CreatorEntity> findCreatorById(String id) {
        return creatorRepository.findById(id);
    }

    @Override
    public CreatorEntity saveCreator(CreatorEntity creator) {
        return creatorRepository.save(creator);
    }

    @Override
    public Boolean deleteCreatorById(String id) {
        if (creatorRepository.existsById(id)){
            creatorRepository.deleteById(id);
            return true;
        }
        return false;
    }
    @Override
    public Optional<CreatorEntity> findByEmailAndPassword(String email, String password) {
        return creatorRepository.findByEmailAndPassword(email, password);
    }

    @Override
    public List<CreatorEntity> findAllDisableCreators() {
        return creatorRepository.findAllDisable().orElse(new ArrayList<>());
    }

    @Override
    public Optional<CreatorEntity> updateNumberCourses(String id, int numberCourses) {
        Optional<CreatorEntity> creatorFound = creatorRepository.findById(id);
        if(creatorFound.isPresent()){
            CreatorEntity creator = creatorFound.get();
            creator.setNumberCourses(numberCourses);
            creatorRepository.save(creator);
            return Optional.of(creator);
        }
        return Optional.empty();
    }

}
