package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="business_type")
public class BusinessType {
	
	@Id
	int bid;
	
	String bname;
	
	String description;

	public BusinessType() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public String getBname() {
		return bname;
	}

	public void setBname(String bname) {
		this.bname = bname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "BusinessType [bid=" + bid + ", bname=" + bname + ", description=" + description + "]";
	}
	
	

}
