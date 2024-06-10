package com.api.courses.Controller.Course;

import com.api.courses.Model.Entity.Course.CourseEntity;
import com.api.courses.Service.Course.ICourseService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/courses")
public class CourseRestController {

    @Autowired
    private ICourseService courseService;

    @GetMapping("/all")
    public ResponseEntity<List<CourseEntity>> findAllCourses(){
        return ResponseEntity.ok().body(courseService.findAllCourses());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<CourseEntity>> findCourseById(@PathVariable Long id){
        return ResponseEntity.ok().body(courseService.findCourseById(id));
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveCourse(@Valid @RequestBody CourseEntity course, BindingResult result){
        if(result.hasErrors()){
            return this.validate(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(courseService.saveCourse(course));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCourseById(@PathVariable Long id){
        boolean isDeleted = courseService.deleteCourseById(id);
        if(isDeleted){
            return ResponseEntity.noContent().build();
        }
        return  ResponseEntity.notFound().build();
    }


    protected ResponseEntity<?> validate(BindingResult result){
        Map<String, Object> errores = new HashMap<>();
        result.getFieldErrors().forEach(err -> {
            errores.put(err.getField(),"El campo "+err.getField()+" "+err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errores);
    }

}
