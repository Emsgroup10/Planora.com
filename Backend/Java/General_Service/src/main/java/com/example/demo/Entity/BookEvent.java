package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "book_event")
public class BookEvent {
	@Id
	int booking_id;
	
	double amount;        //amount decimal(10,2)

	@ManyToOne
	@JoinColumn(name="package_id")
	private CreatePackage createPackage;

	@ManyToOne
	@JoinColumn(name="uid")
	private User user;

	public BookEvent() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public CreatePackage getCreatePackage() {
		return createPackage;
	}

	public void setCreatePackage(CreatePackage createPackage) {
		this.createPackage = createPackage;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "BookEvent [booking_id=" + booking_id + ", amount=" + amount + ", createPackage=" + createPackage
				+ ", user=" + user + "]";
	}
	
	
	//getter setter
	//toString
	//constructor
	
	
	
	
	
	
	
	
	
	
}
