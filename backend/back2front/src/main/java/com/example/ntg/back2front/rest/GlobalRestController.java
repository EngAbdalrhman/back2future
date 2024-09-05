package com.example.ntg.back2front.rest;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class GlobalRestController implements ErrorController{

  @GetMapping("/info")
  public String getInfo() {
    return "Speedy X NTG";
  }
  @GetMapping("/error")
  public String error() {
    return "404 Your Mind Not Found";
  }

  @Override
  public String getErrorPath() {
    return "/error";
  }
}
