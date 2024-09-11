package com.example.ntg.back2front.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ntg.back2front.dto.LoginRequest;
import com.example.ntg.back2front.dto.LoginResponse;
import com.example.ntg.back2front.entities.Users;
import com.example.ntg.back2front.repo.UsersRepo;
import com.example.ntg.back2front.utils.SessionController;
// @CrossOrigin
@RestController
@RequestMapping("/rest") // put under rest | context handle
public class LoginController {

	// get / post / delete / put
//	Users user;
	UsersRepo  user;
	@Autowired
	public LoginController(UsersRepo user) {
		this.user = user;
	}
	@GetMapping("/hello")
	public String sayHello() {
		return "Hello World";
	}
	// get parameters are passed in the URL(pass param v/v| query param ?v=v) while Post&Put parameters are sent in the body
	@PostMapping("/login")
	public LoginResponse login(@RequestBody LoginRequest _request) {

		if(_request.getUserName() != null )
		{
      List<Users> userData = user.getRecordsWithUserName(_request.getUserName()); // && _request.getUserName().equals("admin")
      for (Users _user : userData) {
        //_request.getPwd() != null  &&
        if ( _request.getPwd().equals(_user.getPassword())) {
          return new LoginResponse(null, _user.getFullName()).setStatus("success");
        }
      }
		}
		return new LoginResponse("Invalid Data",null).setStatus("fail");
	}
  @PostMapping("/verify")
  public LoginResponse verifySession(@RequestBody String sessionToken) {

    if(SessionController.activeSession.containsKey(sessionToken)) {
      LoginResponse response = SessionController.activeSession.get(sessionToken);
      return response;
    } else {
      return new LoginResponse("Invalid Data",null).setStatus("fail");
    }
  }

	@PostMapping("/user/insert")
	public String addUser(@RequestBody Users user_) {
//		@RequestBody String userName, @RequestBody String password, @RequestBody String fullName, @RequestBody String email
//		Users user_ = new Users(userName,password,fullName,email);
		user.insert(user_);
		return user_.convert2Json();
	}

	@PostMapping("/user/user")
	public String updateUser(@RequestBody Users user_) {
		// check username or id
		user.updateUsers(user_);
		return user_.convert2Json();
	}

	@GetMapping("/user")
	public String getUser(@RequestParam int id) {
		return user.getRecordById(id).convert2Json();
	}

	@PostMapping("/user/delete")
	public String deleteUser(@RequestParam int id) {
		user.deleteUsers(id);
		return "{\"status\":\"done\"}";
	}
}
