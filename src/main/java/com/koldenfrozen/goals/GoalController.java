package com.koldenfrozen.goals;

import com.koldenfrozen.goals.model.Goal;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/api/goals/{id}")
    public Goal update(@RequestBody Goal goal, @PathVariable Integer id) {
        if(id != goal.getId()) throw new RuntimeException("Goal id does not match route!");

        Goal goalToUpdate = repository.findById(id).get();
        goalToUpdate.setName(goal.getName());

        return this.repository.save(goalToUpdate);
    }

}
