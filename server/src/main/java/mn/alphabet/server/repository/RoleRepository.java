package mn.alphabet.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import mn.alphabet.server.entity.ERole;
import mn.alphabet.server.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
