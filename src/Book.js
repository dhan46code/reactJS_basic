import React from 'react';

const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    alert('hello world');
  };

  const moreComplex = (author) => {
    console.log(author);
  };

  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img}></img>
      <h1 onClick={() => console.log(author)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>

      <button type='button' onClick={() => moreComplex(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
