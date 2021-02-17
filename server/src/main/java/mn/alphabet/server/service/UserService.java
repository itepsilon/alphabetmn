package mn.alphabet.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mn.alphabet.server.entity.User;
import mn.alphabet.server.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public User saveUser(User user){
        return repository.save(user);
    }
    public List<User> getUsers(){
        return repository.findAll();
    }
}
