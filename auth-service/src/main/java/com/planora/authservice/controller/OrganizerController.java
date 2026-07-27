package com.planora.authservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrganizerController {

    @GetMapping("/organizer")
    public String organizer() {
        return "Welcome Organizer";
    }
}