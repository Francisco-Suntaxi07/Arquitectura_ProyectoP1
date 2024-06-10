package com.api.courses.Model.Repository.Subscription;

import com.api.courses.Model.Entity.Subscription.SubscriptionEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISubscriptionRepository extends CrudRepository<SubscriptionEntity, Long> {
}
