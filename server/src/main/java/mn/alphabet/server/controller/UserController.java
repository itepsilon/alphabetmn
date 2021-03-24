package mn.alphabet.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mn.alphabet.server.entity.User;
import mn.alphabet.server.security.service.user.UserService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    public UserService service;

	@GetMapping("/all")
    // @PreAuthorize("hasRole('USER')")
	public List<User> getAllUser(){
        return service.getUsers();
    }
}