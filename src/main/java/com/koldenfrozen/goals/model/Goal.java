package com.koldenfrozen.goals.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "goals")
public class Goal {
    private String name;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Goal() {

    }

    public Goal(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Goal goal = (Goal) o;
        return Objects.equals(name, goal.name) &&
                Objects.equals(id, goal.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(name, id);
    }
}
