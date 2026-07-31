package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="event_master")
public class EventMaster {
	@Id
	int event_master_id;
	
	String event_name;

	public EventMaster() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getEvent_master_id() {
		return event_master_id;
	}

	public void setEvent_master_id(int event_master_id) {
		this.event_master_id = event_master_id;
	}

	public String getEvent_name() {
		return event_name;
	}

	public void setEvent_name(String event_name) {
		this.event_name = event_name;
	}

	@Override
	public String toString() {
		return "EventMaster [event_master_id=" + event_master_id + ", event_name=" + event_name + "]";
	}
	
	

}
