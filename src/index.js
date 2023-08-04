import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css'
import {books} from './books'
import Book from './Book'

const BookList = () => {
    return (
      <>
        <h1>Amazon Best Seller</h1>
        <section className="BookList">
          {books.map((books, index) => {
            return <Book {...books} key={books.id} number={index} />;
          })}
        </section>
      </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);