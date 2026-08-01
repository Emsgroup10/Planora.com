package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.BookEvent;

public interface BookingRepository extends JpaRepository<BookEvent, Integer> {

}