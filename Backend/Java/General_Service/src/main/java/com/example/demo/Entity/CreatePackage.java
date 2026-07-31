package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="create_package")

public class CreatePackage {
	@Id
	int package_id;
	
	@ManyToOne
	@JoinColumn(name="oid")
	private Organizer organizer;

	@ManyToOne
	@JoinColumn(name="event_master_id")
	private EventMaster eventMaster;
	
	double budget;

	public CreatePackage() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getPackage_id() {
		return package_id;
	}

	public void setPackage_id(int package_id) {
		this.package_id = package_id;
	}

	public Organizer getOrganizer() {
		return organizer;
	}

	public void setOrganizer(Organizer organizer) {
		this.organizer = organizer;
	}

	public EventMaster getEventMaster() {
		return eventMaster;
	}

	public void setEventMaster(EventMaster eventMaster) {
		this.eventMaster = eventMaster;
	}

	public double getBudget() {
		return budget;
	}

	public void setBudget(double budget) {
		this.budget = budget;
	}

	@Override
	public String toString() {
		return "CreatePackage [package_id=" + package_id + ", organizer=" + organizer + ", eventMaster=" + eventMaster
				+ ", budget=" + budget + "]";
	}
	
	

}
