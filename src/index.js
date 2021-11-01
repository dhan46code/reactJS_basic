import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { data } from './books';
import SpecifiedBook from './Book';

function BookList() {
  return (
    <section className='bookList'>
      {data.map((book) => {
        return <SpecifiedBook key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
