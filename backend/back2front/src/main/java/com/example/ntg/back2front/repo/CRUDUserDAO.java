package com.example.ntg.back2front.repo;

 import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.ntg.back2front.entities.Users;
@Repository
public interface CRUDUserDAO extends CrudRepository<Users,Long>{

  public List<Users> findByUserNameAndPassword(String userName, String password);

}
