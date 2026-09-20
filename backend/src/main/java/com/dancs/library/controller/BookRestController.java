package com.dancs.library.controller;

import com.dancs.library.dto.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/")
public class BookRestController {

    @GetMapping("/list")
    public List<Book> getAllBooks() {
        var book = new Book("Gondolkodj és gazdagodj", "Napoleon Hill", "Description", 1937);
        var book2 = new Book("Változtasd meg a gondolkodásod, és megváltozik az életed!", "Brian Tracy", "Description", 2001);
        return Arrays.asList(book, book2);
    }
}
