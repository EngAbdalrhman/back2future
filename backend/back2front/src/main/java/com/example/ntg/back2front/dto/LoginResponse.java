package com.example.ntg.back2front.dto;

public class LoginResponse {

	private String _errorMsg;
	private String _fullName;


	public LoginResponse(String _errorMsg, String _fullName) {
//		super();
		this._errorMsg = _errorMsg;
		this._fullName = _fullName;
	}
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
}
