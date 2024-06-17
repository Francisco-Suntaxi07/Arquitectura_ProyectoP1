package com.api.courses.Service.Subscription;

import com.api.courses.Model.Entity.Subscription.SubscriptionEntity;

import java.util.List;
import java.util.Optional;

public interface ISubscriptionService {

    public List<SubscriptionEntity> findAllSubscriptions();

    public Optional<SubscriptionEntity> findSubscriptionById(Long id);

    public SubscriptionEntity saveSubscription(SubscriptionEntity subscription);

    public Boolean deteleSubscriptionById(Long id);
    public Boolean isUserAlreadyEnrolled(String userId, Long courseId);
}
