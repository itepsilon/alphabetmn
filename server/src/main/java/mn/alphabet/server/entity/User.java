package mn.alphabet.server.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "User")
public class User {
    
    @Id @GeneratedValue
    private int id;

    private String name;
    private String username;
    private String password;

    public String getName(){
        return this.name;
    }
    public String getUsername(){
        return this.username;
    }
    public String getPassword(){
        return this.password;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setUserName(String username){
        this.username = username;
    }
    public void setPassword(String password){
        this.password = password;
    }
}
