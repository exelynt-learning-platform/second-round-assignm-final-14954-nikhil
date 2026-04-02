
package com.example.ecommerce.controller;

import org.springframework.web.bind.annotation.*;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

private final UserRepository repo;

public AuthController(UserRepository repo){
this.repo = repo;
}

@PostMapping("/register")
public User register(@RequestBody User user){
return repo.save(user);
}

@PostMapping("/login")
public String login(){
return "JWT_TOKEN_SAMPLE";
}
}
