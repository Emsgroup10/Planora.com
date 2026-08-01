package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "create_event")
public class CreateEvent {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	int event_id;
	
	String venue;
	
	

}
