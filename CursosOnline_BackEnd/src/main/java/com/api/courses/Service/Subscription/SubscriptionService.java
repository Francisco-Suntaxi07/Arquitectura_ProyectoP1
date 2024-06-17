package com.api.courses.Service.Subscription;

import com.api.courses.Model.Entity.Course.CourseEntity;
import com.api.courses.Model.Entity.Subscription.SubscriptionEntity;
import com.api.courses.Model.Repository.Subscription.ISubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.api.courses.Service.Course.CourseService;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService implements ISubscriptionService{

    @Autowired
    private ISubscriptionRepository subscriptionRepository;
    @Autowired
    private CourseService courseService;

    @Override
    public List<SubscriptionEntity> findAllSubscriptions() {
        return (ArrayList<SubscriptionEntity>) subscriptionRepository.findAll();
    }

    @Override
    public Optional<SubscriptionEntity> findSubscriptionById(Long id) {
        return subscriptionRepository.findById(id);
    }

    @Override
    public SubscriptionEntity saveSubscription(SubscriptionEntity subscription) {
        return subscriptionRepository.save(subscription);
    }

    @Override
    public Boolean deteleSubscriptionById(Long id) {
        if (subscriptionRepository.existsById(id)){
            subscriptionRepository.deleteById(id);
            return true;
        }
        return false;
    }
    @Override
    public Boolean isUserAlreadyEnrolled(String userId, Long courseId) {
        Optional<CourseEntity> course = courseService.findCourseById(courseId);
        if (course.isEmpty()) {
            return false;
        }
        String creatorId = course.get().getCreator();
        List<SubscriptionEntity> userSubscriptions = subscriptionRepository.findByUserId(userId);
        for (SubscriptionEntity subscription : userSubscriptions) {
            Long courseIdFromSubscription = subscription.getCourseId();
            Optional<CourseEntity> subscribedCourse = courseService.findCourseById(courseIdFromSubscription);
            if (subscribedCourse.isPresent() && subscribedCourse.get().getCreator().equals(creatorId)) {
                return true;
            }
        }

        return false;
    }
}
