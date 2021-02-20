package mn.alphabet.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import mn.alphabet.server.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
