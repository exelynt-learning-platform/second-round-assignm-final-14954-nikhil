package com.example.ecommerce.controller;

import com.example.ecommerce.service.RazorpayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private RazorpayService razorpayService;

    @GetMapping("/razorpay/{amount}")
    public String createOrder(@PathVariable double amount) {
        return razorpayService.createOrder(amount);
    }
}