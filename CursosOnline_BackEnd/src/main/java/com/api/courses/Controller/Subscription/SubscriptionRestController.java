package com.api.courses.Controller.Subscription;
import com.api.courses.Model.Entity.Course.CourseEntity;

import com.api.courses.Model.Entity.Subscription.SubscriptionEntity;
import com.api.courses.Service.Course.ICourseService;
import com.api.courses.Service.Subscription.ISubscriptionService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionRestController {

    @Autowired
    private ISubscriptionService subscriptionService;

    @Autowired
    private ICourseService courseService;

    @GetMapping("/all")
    public ResponseEntity<List<SubscriptionEntity>> findAllSubscriptions(){
        return ResponseEntity.ok().body(subscriptionService.findAllSubscriptions());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<SubscriptionEntity>> findSubscriptionById(@PathVariable Long id){
        return ResponseEntity.ok().body(subscriptionService.findSubscriptionById(id));
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveSubscription(@Valid @RequestBody SubscriptionEntity subscription, BindingResult result){
        if(result.hasErrors()){
            return this.validate(result);
        }
        boolean isUserAlreadyEnrolled = subscriptionService.isUserAlreadyEnrolled(subscription.getUserId(), subscription.getCourseId());
        if(isUserAlreadyEnrolled) {
            Map<String, Object> error = new HashMap<>();
            error.put("message", "El usuario ya está inscrito en un curso de este creador.");
            return ResponseEntity.badRequest().body(error);
        }
        Optional<CourseEntity> optionalCourse = courseService.findCourseById(subscription.getCourseId());
        if(optionalCourse.isEmpty() || !Objects.equals(optionalCourse.get().getStatus(), CourseEntity.CourseStatus.ACTIVE)) {
            Map<String, Object> error = new HashMap<>();
            error.put("message", "El curso no está disponible para inscripción en este momento.");
            return ResponseEntity.badRequest().body(error);
        }
        SubscriptionEntity savedSubscription = subscriptionService.saveSubscription(subscription);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedSubscription);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable Long id){
        boolean isDeleted = subscriptionService.deteleSubscriptionById(id);
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
