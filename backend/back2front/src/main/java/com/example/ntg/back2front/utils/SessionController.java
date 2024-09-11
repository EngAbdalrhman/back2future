package com.example.ntg.back2front.utils;

import java.util.HashMap;

import com.example.ntg.back2front.dto.LoginResponse;

public class SessionController {
  public static HashMap<String,LoginResponse> activeSession = new HashMap<String,LoginResponse>();
  // should after while not active be logged out and clear the session
}
