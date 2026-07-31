package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="vendor_business")
public class vendorBusiness {
	
	@Id
	int vbid;
	
	@ManyToOne
	@JoinColumn(name="vid")
	private Vendor vendor;

	@ManyToOne
	@JoinColumn(name="bid")
	private BusinessType businessType;

	public vendorBusiness() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getVbid() {
		return vbid;
	}

	public void setVbid(int vbid) {
		this.vbid = vbid;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	public BusinessType getBusinessType() {
		return businessType;
	}

	public void setBusinessType(BusinessType businessType) {
		this.businessType = businessType;
	}

	@Override
	public String toString() {
		return "vendorBusiness [vbid=" + vbid + ", vendor=" + vendor + ", businessType=" + businessType + "]";
	}
	
	

}
