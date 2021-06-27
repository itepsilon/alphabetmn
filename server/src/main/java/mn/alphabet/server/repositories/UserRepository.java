package mn.alphabet.server.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import mn.alphabet.server.entities.User;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);
}
