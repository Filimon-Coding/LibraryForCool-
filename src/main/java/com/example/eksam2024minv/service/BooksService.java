package com.example.eksam2024minv.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.example.eksam2024minv.model.Books;
import com.example.eksam2024minv.repository.BooksRepository;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class BooksService {

    private final BooksRepository booksRepository;
    
    public BooksService(BooksRepository booksRepository) {
        this.booksRepository = booksRepository;
    }

    public ArrayList<Books> findAllBooks(){
        return (ArrayList<Books>) booksRepository.findAll();
    }
}
