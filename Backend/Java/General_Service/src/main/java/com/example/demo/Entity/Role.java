package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Role")
public class Role {
	@Id
	
	int rid;
	
	String rname;
	
	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}

	public String getRname() {
		return rname;
	}

	public void setRname(String rname) {
		this.rname = rname;
	}

	

	@Override
	public String toString() {
		return "Role [rid=" + rid + ", rname=" + rname + "]";
	}
	
	
	

}
