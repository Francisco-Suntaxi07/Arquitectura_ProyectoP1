package com.api.courses.Service.Subscription;

import com.api.courses.Model.Entity.Subscription.SubscriptionEntity;
import com.api.courses.Model.Repository.Subscription.ISubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService implements ISubscriptionService{

    @Autowired
    private ISubscriptionRepository subscriptionRepository;

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
}
