package com.example.ecommerce.service;

import com.razorpay.*;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RazorpayService {

    @Value("${razorpay.key}")
    private String key;

    @Value("${razorpay.secret}")
    private String secret;

    public String createOrder(double amount) {

        try {
            RazorpayClient client = new RazorpayClient(key, secret);

            JSONObject options = new JSONObject();
            options.put("amount", (int)(amount * 100)); // in paise
            options.put("currency", "INR");
            options.put("receipt", "txn_123456");

            Order order = client.orders.create(options);

            return order.toString();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return "Error creating Razorpay order";
    }
}