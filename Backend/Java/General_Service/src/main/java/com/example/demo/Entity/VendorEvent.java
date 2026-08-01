package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="")
public class VendorEvent {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int evid;
	
	@ManyToOne
	@JoinColumn(name="vid")
	private Vendor vendor;

	@ManyToOne
	@JoinColumn(name="event_id")
	private CreateEvent createEvent;

	public VendorEvent() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getEvid() {
		return evid;
	}

	public void setEvid(int evid) {
		this.evid = evid;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	public CreateEvent getCreateEvent() {
		return createEvent;
	}

	public void setCreateEvent(CreateEvent createEvent) {
		this.createEvent = createEvent;
	}

	@Override
	public String toString() {
		return "VendorEvent [evid=" + evid + ", vendor=" + vendor + ", createEvent=" + createEvent + "]";
	}
	
	
}
