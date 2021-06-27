package mn.alphabet.server.security.service.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mn.alphabet.server.entities.User;
import mn.alphabet.server.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository repository;

    public List<User> getUsers(){
        return repository.findAll();
    }
}
