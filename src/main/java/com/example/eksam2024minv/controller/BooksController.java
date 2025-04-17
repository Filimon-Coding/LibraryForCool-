package com.example.eksam2024minv.controller;

import java.util.ArrayList;

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
    public ArrayList<Books> getAllBooks(){

        return booksService.findAllBooks();

    }
}
