
package com.example.ecommerce.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
public class User {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private String username;
private String password;
private String role;

@OneToMany(mappedBy="user")
private List<Order> orders;
}
