package mn.alphabet.server;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import mn.alphabet.server.repository.UserRepository;

@SpringBootApplication
@RestController
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@GetMapping("/")
	public String home(){
		return ("<h1>Welcome Home</h1>");
	}
	@GetMapping("/user")
	public String user(){
		return ("<h1>Welcome user</h1>");
	}
	@GetMapping("/admin")
	public String admin(){
		return ("<h1>Welcome admin</h1>");
	}
}
