package com.example.ntg.back2front.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Entity
@Table(name = "users")
public class Users {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="id",nullable=false)
  private Long id;

  @Column(nullable=false)
  private String userName;

  @Column(name="password",nullable=false)
  private String password;

  // @Column
  private String fullName;
  
  private String email;

  public Users(){}
  public Users(String userName, String password, String fullName, String email) {
	this.userName = userName;
	this.password = password;
	this.fullName = fullName;
	this.email = email;
}
// Getters and setters
  public Long getId() {
    return id;
  }
  public void setId(Long id) {
    this.id = id;
  }
  public String getUserName() {
    return userName;
  }
  public void setUserName(String userName) {
    this.userName = userName;
  }
  // Naming is important to be as standard for getter and setters
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getFullName() {
    return fullName;
  }
  public void setFullName(String fullName) {
    this.fullName = fullName;
  }
  
  public String getEmail() {
	return email;
  }
  public void setEmail(String email) {
	this.email = email;
  }
  @Override
	public String toString() {
		return "User [id=" + id + ", user=" + userName + ", pass=" + password + ", fullName=" + fullName + ", email=" + email+"]";
	}

  public String convert2Json() {
	  ObjectMapper objectMapper = new ObjectMapper();
      try {
          String json = objectMapper.writeValueAsString(this);
          System.out.println(json);
          return json;
      } catch (JsonProcessingException e) {
          e.printStackTrace();
          return "{\"status\":\"error\"}";
      }
  }
}
