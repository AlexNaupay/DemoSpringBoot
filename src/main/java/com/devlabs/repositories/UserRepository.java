package com.devlabs.repositories;

import com.devlabs.entities.User;
import org.springframework.data.repository.CrudRepository;

// Interface para Entity User con id Long
// Spring Boot hace la implementación
public interface UserRepository extends CrudRepository<User, Long>{

    User findByUsername(String username);

    // Si hay mucho resultado, JDBC para paginar

}
