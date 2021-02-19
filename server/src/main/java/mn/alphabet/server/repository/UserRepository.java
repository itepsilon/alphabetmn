package mn.alphabet.server.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import mn.alphabet.server.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
    User findByUsername(String username);
}
