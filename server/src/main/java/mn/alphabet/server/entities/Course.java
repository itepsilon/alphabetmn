package mn.alphabet.server.entities;

import javax.persistence.*;


@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String courseId;
    private String courseName;
    private String courseDescription;
}
