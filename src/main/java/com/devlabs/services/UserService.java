package com.devlabs.services;

import com.devlabs.entities.User;

import java.util.List;

public interface UserService{

    User findById(long id);

    User findByUsername(String username);

    void saveUser(User user);

    void updateUser(User user);

    void deleteUserById(long id);

    List<User> findAll();

    void deleteAll();

    boolean isUserExist(long id);

    boolean isUserExist(User user);

}