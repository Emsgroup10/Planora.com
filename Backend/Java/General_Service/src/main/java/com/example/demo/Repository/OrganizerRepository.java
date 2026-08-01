package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Organizer;

public interface OrganizerRepository extends JpaRepository<Organizer, Integer> {

}
