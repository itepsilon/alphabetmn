package mn.alphabet.server.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import mn.alphabet.server.entities.ERole;
import mn.alphabet.server.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
