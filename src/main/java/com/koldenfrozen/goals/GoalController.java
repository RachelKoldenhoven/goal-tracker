package com.koldenfrozen.goals;

import com.koldenfrozen.goals.model.Goal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GoalController {
    private final GoalRepository repository;

    public GoalController(GoalRepository repository) {
        this.repository = repository;

    }

    @GetMapping(path = "/api/goals")
    public List<Goal> getGoals() {
        return this.repository.findAll();
    }

    @PostMapping("/api/goals")
    public Goal create(@RequestBody Goal goal) {
        return this.repository.save(goal);
    }

}

