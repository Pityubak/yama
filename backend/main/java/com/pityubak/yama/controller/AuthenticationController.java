package com.pityubak.yama.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

	@PostMapping("/auth")
	public ResponseEntity<?> login() {
		return  ResponseEntity.ok().build();
	}
}
