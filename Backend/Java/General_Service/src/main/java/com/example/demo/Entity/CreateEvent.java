package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "create_event")
public class CreateEvent {
	@Id
	
	int event_id;
	
	String venue;
	
	

}
