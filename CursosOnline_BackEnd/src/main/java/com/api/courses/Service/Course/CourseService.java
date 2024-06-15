package com.api.courses.Service.Course;

import com.api.courses.Model.Entity.Course.CourseEntity;
import com.api.courses.Model.Repository.Course.ICourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService implements ICourseService{

    @Autowired
    private ICourseRepository courseRepository;

    @Override
    public List<CourseEntity> findAllCourses() {
        return (ArrayList<CourseEntity>) courseRepository.findAll();
    }

    @Override
    public Optional<CourseEntity> findCourseById(Long id) {
        return courseRepository.findById(id);
    }

    @Override
    public CourseEntity saveCourse(CourseEntity course) {
        return courseRepository.save(course);
    }

    @Override
    public Boolean deleteCourseById(Long id) {
        if(courseRepository.existsById(id)){
            courseRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<CourseEntity> findCoursesByCreator(String name) {
        return courseRepository.findByCreator(name).orElse(new ArrayList<>());
    }
}
