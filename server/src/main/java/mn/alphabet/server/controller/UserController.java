package mn.alphabet.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mn.alphabet.server.entity.User;
import mn.alphabet.server.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class UserController {
    @Autowired
    private UserService service;

    @PostMapping("addUser")
    public User addUser(@RequestBody User user){
        return service.saveUser(user);
    }
    @GetMapping("users")
    public List<User> findAllUsers(){
        return service.getUsers();
    }
}
