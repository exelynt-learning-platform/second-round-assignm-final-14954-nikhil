
package com.example.ecommerce.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.ecommerce.model.CartItem;
import com.example.ecommerce.repository.CartRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/cart")
public class CartController {

private final CartRepository repo;

public CartController(CartRepository repo){
this.repo = repo;
}

@GetMapping
public List<CartItem> all(){
return repo.findAll();
}

@PostMapping
public CartItem add(@RequestBody CartItem item){
return repo.save(item);
}

@DeleteMapping("/{id}")
public void remove(@PathVariable Long id){
repo.deleteById(id);
}
}
