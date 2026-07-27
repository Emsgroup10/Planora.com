package com.planora.authservice.service;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import com.planora.authservice.entity.User;
import com.planora.authservice.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User Not Found"));

        String role = "";

        if (user.getRid() == 1) {
            role = "ADMIN";
        } else if (user.getRid() == 2) {
            role = "ORGANIZER";
        } else if (user.getRid() == 3) {
            role = "VENDOR";
        } else if (user.getRid() == 4) {
            role = "CUSTOMER";
        }

        return org.springframework.security.core.userdetails.User
                .builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .authorities(Collections.singletonList(
                        new SimpleGrantedAuthority("ROLE_" + role)))
                .build();
    }
}