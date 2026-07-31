package com.planora.authservice.service;

import java.util.Optional; 

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.planora.authservice.dto.LoginRequest;
import com.planora.authservice.dto.RegisterRequest;
import com.planora.authservice.entity.User;
import com.planora.authservice.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository repository;

//    @Autowired
//    private PasswordEncoder passwordEncoder;

    public Optional<User> login(LoginRequest request) {

        Optional<User> user = repository.findByEmail(request.getEmail());

        if (user.isPresent()) {

            if (user.get().getPassword().equals(request.getPassword())) {

                return user;
            }
        }

        return Optional.empty();
    }

    public String register(RegisterRequest request) {

        if (repository.existsByEmail(request.getEmail())) {
            return "Email Already Exists";
        }

        User user = new User();

        user.setRid(request.getRid());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setPhoneNo(request.getPhoneNo());
        user.setAddress(request.getAddress());

        repository.save(user);

        return "Registration Successful";
    }
}