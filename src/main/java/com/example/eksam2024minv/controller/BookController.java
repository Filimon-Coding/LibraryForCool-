package com.example.eksam2024minv.controller;

import com.example.eksam2024minv.model.Book;
import com.example.eksam2024minv.repository.BookRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin            // Tillater kall fra frontend i nettleseren
public class BookController {

    private final BookRepository repo;

    public BookController(BookRepository repo) {
        this.repo = repo;
    }

    /* -------- CRUD‑endepunkter -------- */

    @GetMapping("/books")
    public List<Book> getAll() {
        return repo.findAll();
    }

    @PostMapping("/books")
    public Book create(@RequestBody Book book) {
        return repo.save(book);
    }

    @PutMapping("/books/{id}")
    public Book update(@PathVariable Integer id, @RequestBody Book book) {
       book.setId(id);
        return repo.save(book);
    }


    @DeleteMapping("/books/{id}")
    public void delete(@PathVariable Integer id) {
        repo.deleteById(id);
    }
}
