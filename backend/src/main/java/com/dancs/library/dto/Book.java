package com.dancs.library.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class Book {
    private String title;
    private String author;
    private String description;
    private int releaseDate;
}
