package com.example.eksam2024minv.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.eksam2024minv.model.Books;

@Repository
public interface BooksRepository extends JpaRepository<Books, Integer> {

   
}
