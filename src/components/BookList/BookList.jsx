// src/components/BookList.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleReadStatus, toggleBookmarkStatus } from "../../features/booksSlice";
import "./BookList.css";
import regularBookmark from "../../icons/regular-bookmark.svg";
import solidBookmark from "../../icons/solid-bookmark.svg";

const BookList = ({ filter }) => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const filteredBooks = books.filter((book) =>
    filter === "all" ? true : filter === "bookmarked" ? book.bookmarked : filter === "read" ? book.read : !book.read
  );

  return (
    <div className="lib__book-detail-cards">
      {filteredBooks.map((book) => (
        <div key={book.id} className="lib__book-card">
          <div className="book-card-header">
            <div>{book.title}</div>
            <button
              onClick={() => dispatch(toggleBookmarkStatus(book.id))}
              className="bookmark-button"
            >
              {book.bookmarked ? (
                <img
                  src={solidBookmark}
                  alt="Bookmark icon"
                  className="bookmark-icon"
                />
              ) : (
                <img
                  src={regularBookmark}
                  alt="Bookmark icon"
                  className="bookmark-icon"
                />
              )}
            </button>
          </div>
          <div className="lib-book-sub">
          <p>Author: {book.author}</p>
          <p>Status: {book.read ? "Read" : "Unread"}</p>
          <button onClick={() => dispatch(toggleReadStatus(book.id))}>
            Mark as {book.read ? "Unread" : "Read"}
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
