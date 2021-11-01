import React from 'react';
import ReactDom from 'react-dom';

// add CSS
import './index.css';

function BookList() {
  return (
    <section className='bookList'>
      <Book />
    </section>
  );
}

const author = 'David Flanagan';
const Book = () => {
  const title =
    "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition";

  return (
    <article className='book'>
      <img src='https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'></img>
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 12;}</p> wrong cz not return value */}
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
