
package com.example.ecommerce.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.ecommerce.model.Order;
import com.example.ecommerce.repository.OrderRepository;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

private final OrderRepository repo;

public OrderController(OrderRepository repo){
this.repo = repo;
}

@GetMapping
public List<Order> all(){
return repo.findAll();
}

@PostMapping
public Order create(@RequestBody Order order){
return repo.save(order);
}
}
