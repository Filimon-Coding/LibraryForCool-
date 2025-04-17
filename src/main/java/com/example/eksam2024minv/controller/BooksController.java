package com.example.eksam2024minv.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eksam2024minv.model.Books;
import com.example.eksam2024minv.service.BooksService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("books")
public class BooksController {

    private final BooksService booksService;

    public BooksController(BooksService booksService) {
        this.booksService = booksService;
    }


    
    @GetMapping("/all")
    public ResponseEntity<ArrayList<Books>> getAllBooks() {
        ArrayList<Books> books = booksService.findAllBooks();

        if (books.isEmpty()) {
            return ResponseEntity.noContent().build(); // 204 No Content
        }

        return ResponseEntity.ok(books); // 200 OK with list of books
    }

}
