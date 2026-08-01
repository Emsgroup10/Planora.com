package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "vendor")
public class Vendor {
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	int vid;
	
	@OneToOne
	@JoinColumn(name="uid")
	private User user;
	
	String experience;

	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getVid() {
		return vid;
	}

	public void setVid(int vid) {
		this.vid = vid;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	@Override
	public String toString() {
		return "Vendor [vid=" + vid + ", user=" + user + ", experience=" + experience + "]";
	}
	
	
	

}
