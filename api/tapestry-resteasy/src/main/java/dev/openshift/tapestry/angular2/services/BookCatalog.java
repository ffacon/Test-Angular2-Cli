package dev.openshift.tapestry.angular2.services;

import java.util.List;

import dev.openshift.tapestry.angular2.data.bookcat.Book;


public interface BookCatalog
{
    /**
     * Provides a list of all phone in an indeterminate order.
     */
    List<Book> getBooks();

    String getBooksAsString();

    Book getBookDetails(String id);

    String getBookDetailsAsString(String id);


}
