package mn.alphabet.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import mn.alphabet.server.entities.User;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class GoogleCloudController {
    @GetMapping("/readiness_check")
    public ResponseEntity<?> readinessCheck() {
        return ResponseEntity.ok("OK");
    }

    @GetMapping("/liveness_check")
    public ResponseEntity<?> livenessCheck() {
        return ResponseEntity.ok("OK");
    }
}