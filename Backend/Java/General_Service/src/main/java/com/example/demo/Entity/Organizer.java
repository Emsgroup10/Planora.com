package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = " organizer")
public class Organizer {
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	int oid;
	
	@OneToOne
	@JoinColumn(name="uid")
	private User user;
	
	String company_name;
	
	long phone_no;
	
	String company_address;
	
	String gst_no;
	
	String register_no;

	public Organizer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public long getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(long phone_no) {
		this.phone_no = phone_no;
	}

	public String getCompany_address() {
		return company_address;
	}

	public void setCompany_address(String company_address) {
		this.company_address = company_address;
	}

	public String getGst_no() {
		return gst_no;
	}

	public void setGst_no(String gst_no) {
		this.gst_no = gst_no;
	}

	public String getRegister_no() {
		return register_no;
	}

	public void setRegister_no(String register_no) {
		this.register_no = register_no;
	}

	@Override
	public String toString() {
		return "Organizer [oid=" + oid + ", user=" + user + ", company_name=" + company_name + ", phone_no=" + phone_no
				+ ", company_address=" + company_address + ", gst_no=" + gst_no + ", register_no=" + register_no + "]";
	}
	
	
	

}
