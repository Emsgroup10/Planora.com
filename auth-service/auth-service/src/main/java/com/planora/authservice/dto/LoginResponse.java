package com.planora.authservice.dto;

public class LoginResponse {

    private Integer uid;
    private Integer roleId;
    private String email;
    private String token;
    private String message;

    public LoginResponse() {
    }

    public LoginResponse(Integer uid, Integer roleId, String email, String token, String message) {
        this.uid = uid;
        this.roleId = roleId;
        this.email = email;
        this.token = token;
        this.message = message;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}