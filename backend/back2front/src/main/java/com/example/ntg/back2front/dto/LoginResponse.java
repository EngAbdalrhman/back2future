package com.example.ntg.back2front.dto;

import java.util.UUID;

import com.example.ntg.back2front.utils.SessionController;

public class LoginResponse {

	private String _errorMsg;
	private String _fullName;
  private  String status;
  private String sessionToken;


  public LoginResponse(String _errorMsg, String _fullName) {
		this._errorMsg = _errorMsg;
		this._fullName = _fullName;
    this.sessionToken = UUID.randomUUID().toString(); // pusedo random like hash generator for session as real random
    SessionController.activeSession.put(this.sessionToken, this);
  }
  // for bean injection
	public LoginResponse() {
	}
	public String get_errorMsg() {
		return _errorMsg;
	}
	public void set_errorMsg(String _errorMsg) {
		this._errorMsg = _errorMsg;
	}
	public String get_fullName() {
		return _fullName;
	}
	public void set_fullName(String _fullName) {
		this._fullName = _fullName;
	}
  public String getStatus() {
    return status;
  }

  public LoginResponse setStatus(String status) {
    this.status = status;
    return this;
  }

	public String getSessionToken() {
    return sessionToken;
  }
  public void setSessionToken(String sessionToken) {
    this.sessionToken = sessionToken;
  }
}
