package com.example.ntg.back2front.dao;

import java.util.List;

import com.example.ntg.back2front.entities.Users;

public interface UserDAO {

		// Create
//		void createTable();

		// Insert
		void insert(Users Users);
		
		// Read
		Users getRecordById(int id);
		
		List<Users>getRecords();
		List<Users>getRecords(String condition);
//		List<Users>getRecords(String condition,String data);
		List<Users>getRecordsWithUserName(String user);
//		List<Users>findByEmail(String email);
		
		// Update
		void updateUsers(Users Users);
		void updateUsersUserName(int id,String FirstName);
		void updateUsersPassword(int id,String password);
		void updateUsersEmail(int id,String email);

		// Delete
		void deleteUsers(int id);
		public int deleteUsersConditionBased(String condition);
		int deleteAll();
		void deleteAllNative();

		// drop table
		void dropTable();
}
