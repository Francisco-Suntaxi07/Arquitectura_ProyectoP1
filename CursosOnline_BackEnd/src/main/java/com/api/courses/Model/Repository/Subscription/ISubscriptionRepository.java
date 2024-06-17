package com.api.courses.Model.Repository.Subscription;
import java.util.List;
import com.api.courses.Model.Entity.Subscription.SubscriptionEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@Repository
public interface ISubscriptionRepository extends CrudRepository<SubscriptionEntity, Long> {
    List<SubscriptionEntity> findByUserId(String userId);
}
