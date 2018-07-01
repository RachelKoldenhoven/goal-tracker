package com.koldenfrozen.goals;

import com.koldenfrozen.goals.model.Goal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class GoalsController {

    List<Goal> goals = new ArrayList<>();

    public GoalsController() {
        Goal run = new Goal("Run 10k in an hour");
        goals.add(run);
        Goal guitar = new Goal("Play guitar 10 min per day");
        goals.add(guitar);
    }

    @GetMapping(path = "/api/goals")
    public List<Goal> getGoals() {
        return goals;
    }

}

