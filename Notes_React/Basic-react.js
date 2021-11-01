# FUNCTION IS COMPONENT.

Dalam react function adalah sebuah component.
dan selalu mengembalikan return HTML or JSX
dan ReacDom.render dia selalu mengembalikan 2 hal antara component or method, dan root.

import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return <h4>Hello world!</h4>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));

# JSX Rules
1. return single element,
2. camel case for attribute element like : onClick, className 
3. you can use semantic element HTML5 or Fragment <> </> 
4. you should closing tag like <img /> <input />, etc


# NESTED Component

untuk membuat component nested kamu perlu membuat beberapa function (component) 
yang kamu mau  misal dalam code dibawah ini kita membuat component baru ,
dan kita masukan component tsb ke dalam component utama yaitu Greeting agar bisa 
dirender.

import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return (
    <div>
      <Person/> //new component
      <Message/> //new component 2
    </div>
  );
}

// create new component person and message

const Person = () => <h1>John Doe</h1>
const Message = () => <p>Hello this message from john doe</p>

ReactDom.render(<Greeting />, document.getElementById('root'));


# Mini Book Project
Dan disini kamu bisa melihat kita bisa menambah component Book menjadi banyak,
tapi tetap jika kita mengubah satu saja misal dalam component yang termasuk 
dalam component book ganti img maka otomatis semua akan memiliki effect yg sama,
karena semua component yang digunakan sama menggunakan component <Book/>

import React from 'react';
import ReactDom from 'react-dom';

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

// book component has component too like : image, title, and author
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img src='https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'></img>
  );
};

const Title = () => (
  <h1>
    JavaScript: The Definitive Guide: Master the World's Most-Used Programming
    Language 7th Edition
  </h1>
);

const Author = () => <h4>David Flanagan</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));



# Menambah CSS
untuk menambah CSS buat di src/index.css
kemudian import './index.ss' tanda . menunjukan kita berada dalam directory sama.


misal bookList component berisi className .bookList , dst..

/* reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #ddd;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.bookList {
  width: 90vw;
  max-width: 1170px;
  margin: 3rem auto;
  display: grid;
  gap: 2rem;
}

@media screen and (min-width: 720px) {
  .bookList {
    width: 95vw;
    grid-template-columns: repeat(3, 1fr);
  }
}

.book {
  background: #fff;
  padding: 1.25rem 2rem;
  border-radius: 0.5rem;
}

.book h1 {
  margin: 0.5rem 0;
  color: red;
}

# JSX for CSS 
kamu bisa menyimpan JSX CSS dalam react juga, jika tidak mau mnyimpannya dalam 
external CSS 

misal component Author tambah css gunakan ini  {{}} cz kita tau ini JSX
dan jangan lupa properties nya slalu gunakan camelCase jsx rules like:
color : '' , fontSize : ''

const Author = () => (
  <h4 style={{ color: '#333', fontSize: '0.75rem' }}>David Flanagan</h4>
);


# JSX for JavaScript

kita modifikasi script diatas menjadi seperti ini 

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
      // <p>{let x = 12;}</p> ini salah krna tidak mengembalikan value
      <p>{6 + 6}</p> //hasilnya adalah menampilkan 12 krna return value
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));


Kita bisa lihat bahwa untuk menggunakan JSX javascript kita bisa memanggil 
variable title dengan {panggil_namavariable}, dan juga selain itu dalam {}
kita bisa memanggil method juga dan contoh diatas kita memanggil method toUpperCase()
dalam {} h4 <h4>{author.toUpperCase()}</h4> dan pembuatan variable di atas return 
bukan didalam return HTML or JSX.