import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../features/booksSlice";
import "./BookForm.css";

const BookForm = () => {
  const [bookFormData, setBookFormData] = useState({
    title: "",
    author: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: Date.now(),
        title: bookFormData.title,
        author: bookFormData.author,
      })
    );
    setBookFormData({ title: "", author: "" });
  };

  return (
    <div className="book-form">
      <form onSubmit={handleSubmit}>
        <label className="book-label">
          Book Name:
          <input
            className="book-input"
            type="text"
            name="title"
            value={bookFormData.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label className="book-label">
          Author's Name:
          <input
          className="book-input"
            type="text"
            name="author"
            value={bookFormData.author}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button className="add-book-button" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
