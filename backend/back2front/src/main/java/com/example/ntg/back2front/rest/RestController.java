package com.example.ntg.back2front.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RequestMapping("/rest")
public class RestController {

  @GetMapping("/info")
  public String info() {
    return "Speedy X NTG";
  }
  @GetMapping("/error")
  public String error() {
    return "404 Your Mind Not Found";
  }
}
