package com.example.ntg.back2front.repo;


import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.ntg.back2front.dao.UserDAO;
import com.example.ntg.back2front.entities.Users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;

@Repository
public class UsersRepo implements UserDAO{


	EntityManager entityManager;

	@Autowired
	public UsersRepo(EntityManager entityManger)
	{
		this.entityManager = entityManger;
	}

//	@Override
//	public void createTable() {
//		// TODO Auto-generated method stub
//
//	}

	@Transactional
	@Override
	public void insert(Users Users) {
		entityManager.persist(Users);
	}

	@Override
	public Users getRecordById(int id) {
		return entityManager.find(Users.class, id);
	}

	@Override
	public List<Users> getRecords() {
		TypedQuery<Users> query = entityManager.createQuery("FROM Users",Users.class); // check NativeQuery
		return query.getResultList();
	}

	@Override
	public List<Users> getRecords(String condition) {
		TypedQuery<Users> query = entityManager.createQuery("FROM Users Where " + condition,Users.class); // check NativeQuery
		return query.getResultList();
	}

	@Override
	public List<Users> getRecordsWithUserName(String user) {
		TypedQuery<Users> query = entityManager.createQuery("FROM Users Where userName='" + user+"'",Users.class);
		return query.getResultList();
	}

	//Update
	@Transactional
	@Override
	public void updateUsers(Users Users) {
		entityManager.merge(Users);
	}
	@Transactional
	@Override
	public void updateUsersUserName(int id, String userName) {
		Users user = getRecordById(id);
		user.setUserName(userName);
		entityManager.merge(user);
	}
	@Transactional
	@Override
	public void updateUsersPassword(int id, String password) {
		Users user = getRecordById(id);
		user.setPassword(password);
		entityManager.merge(user);
	}
	@Transactional
	@Override
	public void updateUsersEmail(int id, String email) {
		Users user = getRecordById(id);
		user.setEmail(email);
		entityManager.merge(user);
	}

	//Delete
	@Transactional
	@Override
	public void deleteUsers(int id) {
		Users user = getRecordById(id);
		entityManager.remove(user);
	}
	@Transactional
	@Override
	public int deleteUsersConditionBased(String condition) {
		int numRowsDeleted;
		try {
		 numRowsDeleted = entityManager.createQuery("Delete from Users Where " + condition).executeUpdate();
		}
		catch (Exception e)
		{
			numRowsDeleted = -1;
		}
		return numRowsDeleted;
	}
	@Transactional
	@Override
	public int deleteAll() {
		int numRowsDeleted = entityManager.createQuery("Delete from Users").executeUpdate();
		// Reset Id Counter same as Truncate
		Query nativeQuery = entityManager.createNativeQuery("ALTER TABLE postgres.users AUTO_INCREMENT = 1");
		nativeQuery.executeUpdate();
		System.out.println(nativeQuery);
		return numRowsDeleted;
	}
	@Transactional
	@Override
	public void deleteAllNative() {
		Query nativeQuery = entityManager.createNativeQuery("Truncate postgres.users");
		nativeQuery.executeUpdate();
	}
	@Transactional
	@Override
	public void dropTable() {
		Query nativeQuery = entityManager.createNativeQuery("DROP TABLE postgres.users");
		nativeQuery.executeUpdate();
	}


}
