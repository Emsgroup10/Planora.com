package com.planora.authservice.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.planora.authservice.dto.LoginRequest;
import com.planora.authservice.dto.LoginResponse;
import com.planora.authservice.dto.RegisterRequest;
import com.planora.authservice.dto.RegisterResponse;
import com.planora.authservice.entity.User;
import com.planora.authservice.service.AuthService;
import com.planora.authservice.util.JwtUtil;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public RegisterResponse register(@RequestBody RegisterRequest request) {

        String message = authService.register(request);

        return new RegisterResponse(message);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        Optional<User> user = authService.login(request);

        if (user.isPresent()) {

            User u = user.get();

            String role;

            switch (u.getRid()) {

                case 1:
                    role = "ADMIN";
                    break;

                case 2:
                    role = "ORGANIZER";
                    break;

                case 3:
                    role = "VENDOR";
                    break;

                case 4:
                    role = "CUSTOMER";
                    break;

                default:
                    role = "USER";
                    break;
            }

            String token = jwtUtil.generateToken(
                    u.getUid(),
                    u.getEmail(),
                    role
            );

            return new LoginResponse(
                    u.getUid(),
                    u.getRid(),
                    u.getEmail(),
                    token,
                    "Login Successful"
            );
        }

        return new LoginResponse(
                null,
                null,
                null,
                null,
                "Invalid Email or Password"
        );
    }
}