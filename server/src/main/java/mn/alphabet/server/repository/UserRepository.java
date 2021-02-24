package mn.alphabet.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import mn.alphabet.server.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);
}
