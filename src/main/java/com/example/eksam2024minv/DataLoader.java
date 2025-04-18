package com.example.eksam2024minv;

import com.example.eksam2024minv.model.Book;
import com.example.eksam2024minv.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final BookRepository repo;

    public DataLoader(BookRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) {
        repo.save(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 4.0));
        repo.save(new Book("To Kill a Mockingbird", "Harper Lee", 1960, 4.2));
        repo.save(new Book("1984", "George Orwell", 1949, 4.5));
        repo.save(new Book("Pride and Prejudice", "Jane Austen", 1813, 4.3));
        repo.save(new Book("Animal Farm", "George Orwell", 1951, 4.1));
        repo.save(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954, 4.6));
    }
}
