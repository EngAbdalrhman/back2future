package com.example.ntg.back2front;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.example.ntg.back2front", "com.example.ntg.back2front.rest"})
public class Back2frontApplication {

	public static void main(String[] args) {
		SpringApplication.run(Back2frontApplication.class, args);
	}

}
