package com.api.courses.Model.Repository.Course;

import com.api.courses.Model.Entity.Course.CourseEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ICourseRepository extends CrudRepository<CourseEntity,Long> {

    Optional<List<CourseEntity>> findByCreator(String idCreator);

}
