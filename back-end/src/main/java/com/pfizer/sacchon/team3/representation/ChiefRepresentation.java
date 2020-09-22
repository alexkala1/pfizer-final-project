package com.pfizer.sacchon.team3.representation;

import com.pfizer.sacchon.team3.model.Chiefs;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ChiefRepresentation {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String uri;

    public ChiefRepresentation(Chiefs chief) {
        if (chief != null) {
            firstName = chief.getFirstName();
            lastName = chief.getLastName();
            email = chief.getEmail();
            password = chief.getPassword();
            uri = "http://localhost:9000/v1/chief/" + chief.getId();
        }
    }
}
