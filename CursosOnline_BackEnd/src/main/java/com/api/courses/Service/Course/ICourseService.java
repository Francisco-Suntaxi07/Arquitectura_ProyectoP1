package com.api.courses.Service.Course;

import com.api.courses.Model.Entity.Course.CourseEntity;

import java.util.List;
import java.util.Optional;

public interface ICourseService {

    public List<CourseEntity> findAllCourses();

    public Optional<CourseEntity> findCourseById(Long id);

    public CourseEntity saveCourse(CourseEntity course);

    public Boolean deleteCourseById(Long id);

    public List<CourseEntity> findCoursesByCreator(String idCreator);

}
