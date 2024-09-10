package com.example.ntg.back2front.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ntg.back2front.dto.LoginRequest;
import com.example.ntg.back2front.dto.LoginResponse;
import com.example.ntg.back2front.entities.Users;
import com.example.ntg.back2front.repo.CRUDUserDAO;
import com.example.ntg.back2front.repo.UsersRepo;

@RestController
@RequestMapping("/apis")
public class LoginAPIs {

	// get / post / delete / put
  @Autowired
  CRUDUserDAO user;

	@GetMapping("/test")
	public String sayHello() {
		return "Hello World";
	}
	// get parameters are passed in the URL(pass param v/v| query param ?v=v) while Post&Put parameters are sent in the body
	@PostMapping("/login")
	public LoginResponse login(@RequestBody LoginRequest _request) {

		if(_request.getUserName() != null )
		{
	      List<Users> userData = this.user.findByUserNameAndPassword(_request.getUserName(),_request.getPwd());
//	      if(userData.iterator().hasNext()) {
//	    	  Users row = userData.iterator().next();
//	      }
	      if(userData.size() == 1) {
	    	  Users row = userData.get(0);
	    	  return new LoginResponse(null, row.getFullName()).setStatus("success");
	      }
		}
		return new LoginResponse("Invalid Data",null).setStatus("fail");
	}

	@PostMapping("/user/insert")
	public Users addUser(@RequestBody Users user_) {
		return user.save(user_);
	}

	@PostMapping("/user/update")
	public Users updateUser(@RequestBody Users user_) {
		return user.save(user_);
	}

	@GetMapping("/user")
	public Optional<Users> getUser(@RequestParam long id) {
		return user.findById(id);
	}

  @GetMapping("/users")
	public Iterable<Users> getUser() {
		return user.findAll();
	}

	@PostMapping("/user/delete/id")
	public String deleteUserById(@RequestParam long id) {
		user.deleteById(id);
		return "{\"status\":\"done\"}";
	}

	@PostMapping("/user/delete")
	public String deleteUser(@RequestBody Users user) {
		this.user.delete(user);
		return "{\"status\":\"done\"}";
	}
}
