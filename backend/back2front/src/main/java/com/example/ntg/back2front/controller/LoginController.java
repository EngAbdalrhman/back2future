package com.example.ntg.back2front.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ntg.back2front.dto.LoginRequest;
import com.example.ntg.back2front.dto.LoginResponse;

@RestController
@RequestMapping("/rest") // put under rest | context handle
public class LoginController {

	// get / post / delete / put

	@GetMapping("/hello")
	public String sayHello() {
		return "Hello World";
	}
	// get parameters are passed in the URL(pass param v/v| query param ?v=v) while Post&Put parameters are sent in the body
	@PostMapping("/login")
	public LoginResponse login(@RequestBody LoginRequest _request) {
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		if(_request.getUserName().equals("admin") && _request.getPwd().equals("admin"))
		{
			return new LoginResponse(null,"Admin");
		}
		return new LoginResponse("Invalid Data",null);
	}
}
