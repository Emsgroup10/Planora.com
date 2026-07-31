package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="rating")
public class Rating {
	@Id
	int rating_id;
	
	@ManyToOne
	@JoinColumn(name="uid")
	private User user;

	@ManyToOne
	@JoinColumn(name="oid")
	private Organizer organizer;
	
	float rating_no;

	public Rating() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getRating_id() {
		return rating_id;
	}

	public void setRating_id(int rating_id) {
		this.rating_id = rating_id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Organizer getOrganizer() {
		return organizer;
	}

	public void setOrganizer(Organizer organizer) {
		this.organizer = organizer;
	}

	public float getRating_no() {
		return rating_no;
	}

	public void setRating_no(float rating_no) {
		this.rating_no = rating_no;
	}

	@Override
	public String toString() {
		return "Rating [rating_id=" + rating_id + ", user=" + user + ", organizer=" + organizer + ", rating_no="
				+ rating_no + "]";
	}
	
	

}
