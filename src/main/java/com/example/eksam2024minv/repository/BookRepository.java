package com.example.eksam2024minv.repository;

import com.example.eksam2024minv.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {
}
