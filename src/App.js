// src/App.js
import React, { useState } from 'react';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import Filter from './components/Filter/Filter';
import './App.css';

function App() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="book-lib">
      <h1 className='book-lib__title'>Welcome Reader! let the imagination begins&#128218;</h1>
      <BookForm />
      <Filter setFilter={setFilter} />
      <BookList filter={filter} />
    </div>
  );
}

export default App;
