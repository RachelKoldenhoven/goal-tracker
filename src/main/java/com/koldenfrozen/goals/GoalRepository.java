package com.koldenfrozen.goals;

import com.koldenfrozen.goals.model.Goal;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GoalRepository extends CrudRepository<Goal, Integer> {
    List<Goal> findAll();
}
