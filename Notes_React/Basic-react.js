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


# PROPS / Properties

import React from 'react';
import ReactDom from 'react-dom';


import './index.css';

const author = 'David Flanagan';
const title =
  "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition";
const img =
  'https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';

function BookList() {
  return (
    <section className='bookList'>
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));

Kita lihat props disini dalam parameter Book Component dia adalah untuk
memanggil properties, dan jika kamu cek dengan console.log dia menghasilkan : 
object { }

dan untuk membuat properties tsb kita bisa membuat nya pada component render utama
agar bisa dirender misal dalam Book component kita buat properties job dgn value developer

function BookList() {
  return (
    <section className='bookList'>
      <Book job='developer'/>
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

dan disini hasilnya di console.log Object { job: "developer" }
dan bagaimana untuk memanggil props agar ditampilkan? kita bisa memanggilnya dgn :
props.nameproperties misal di component book kita tambah <p></p>
<p>{props.job}</p>

contoh lagi kita tambah kembali component book pada bookList :

function BookList() {
  return (
    <section className='bookList'>
      <Book job='developer'/>
      <Book title='random title' number={12}></Book>
    </section>
  );
}

dan disini pada book component ke-2 props nya adalah title dan number 
shingga bisa panggil seperti ini dalam component book

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
      <p>
        {props.title} {props.number}
      </p>
    </article>
  );
};

jadi disini untuk component book pertama h1-p props.job tampil
untuk component kedua h1-p untuk props.title - number tampil dan 
props.job tidak tampil karena props.job hanya untuk component book pertama saja 
bukan component kedua dalam bookList component


misal contoh lagi kita coba buat 1 obj array yang berisi semua data booklist
menjadi firstBook :

import React from 'react';
import ReactDom from 'react-dom';

// add CSS
import './index.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  title:
    "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition",
  author: 'David Flanagan',
};

function BookList() {
  return (
    <section className='bookList'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book title='random title' number={12}></Book>
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img}></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));

ingat dalam book component untuk memanggil props kita panggil nama propertiesnya bukan valuenya
:
<img src={props.img}></img>

jadi props.img dia memanggil properties img dari Book yg berada dalam component BookList
sehingga akan tampil value img dst.

<Book
  img={firstBook.img}
  title={firstBook.title}
  author={firstBook.author}
/>

dan disini kamu bisa buat component ke-2 juga dalam BookList jadi secara 
keseluruhan code nya seperti ini :

import React from 'react';
import ReactDom from 'react-dom';

// add CSS
import './index.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  title:
    "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition",
  author: 'David Flanagan',
};

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg',
  title:
    'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming 3rd Edition ',
  author: 'Marijn Haverbeke ',
};

function BookList() {
  return (
    <section className='bookList'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img}></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));


kita bisa liat bahwa dia akan mencetak 2 buku pada browser dengan
data obj array yanng berbeda, tapi dia akan mencetak hasil props yang sama
sama tapi dengan data yang berbeda. dan jika kita membuat props dalam bookList 
untuk book component dgn nama berbeda misal tuk secondBook nama propsnya beda dgn
props 1 bkn img,title,author maka dlam book component  props.img, title, dll tidak akan tampil, 
pada browser krna nama props yang kedua berbeda... jadi solusinya nama props sama kan saja, 
tapi data props nya pada booklist tuk book component berbeda.


# Destructuring Object

lebih enak menggunakan Destructuring obj, jadi kamu hanya perlu memanggil propertiesnya saja
bisa dalam parameter functionnya jadi const Book = ({img, title, author}) =>{}
atau bisa juga tidak dalam function parameter component jadi :
const Book = (props)=>{
  const {img, title, author} = props;
}

sehingga kedunya lebih enak jadi tanpa perlu mengetikan props.image
jadi hanya perlu mengetikan name property nya saja <img src={img}></img>
jadi gak perlu <img src={props.img}></img>


# PROPS Children
jadi dia itu berada diantara open tag dan closing tag

import React from 'react';
import ReactDom from 'react-dom';

// add CSS
import './index.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  title:
    "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition",
  author: 'David Flanagan',
};

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg',
  title:
    'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming 3rd Edition ',
  author: 'Marijn Haverbeke ',
};

function BookList() {
  return (
    <section className='bookList'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
          impedit dolore. Ipsum tempora quo pariatur illo possimus aliquam
          totam! Qui!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const {img, title, author} = props
  return (
    <article className='book'>
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{children}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));

Jangan lupa tuliskan children dalam parameter function agar bisa ditampilkan.
dan untuk penempatanya bebas.. jika ingin dibawah author maka children akan tampil sesdah author,
jika sebelum author atau diatas img maka children <p></p> dia akan tampil.


#Props use array map, key, and spread operator
oke disini agar lebih mempermudah kita modifkasi code diatas,
dan menggabungkan firstBook, dan secondBook menjadi 1 obj dalam array
dengan nama books, dan menggunakan map array agar kita bisa mencetak dengan mudah,
mengikuti original array itu sendiri. dan key ada for uniqeu, dan spread operator
adalah dia untuk menyalin smua obj dalam array, shingga kita hanya perlu memanggil props tsb
dengan memanggilnya dalam sebuah parameter function dari obj array tsb.

import React from 'react';
import ReactDom from 'react-dom';

// add CSS
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title:
      "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition",
    author: 'David Flanagan',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg',
    title:
      'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming 3rd Edition ',
    author: 'Marijn Haverbeke ',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg',
    title:
      'JavaScript and JQuery: Interactive Front-End Web Development 1st Edition ',
    author: 'Jon Duckett',
  },
];

function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const {img, title, author} = props
  return (
    <article className='book'>
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));


# EVENT like attribute, eventhandler
onClick, onMouseOver

import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title:
      "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition",
    author: 'David Flanagan',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg',
    title:
      'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming 3rd Edition ',
    author: 'Marijn Haverbeke ',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg',
    title:
      'JavaScript and JQuery: Interactive Front-End Web Development 1st Edition ',
    author: 'Jon Duckett',
  },
];

function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver

  const clickHandler = (e) => {
    // console.log(e); dia berisi pageX,pageY, target dll
    // console.log(e.target); menampilkan attirubt elemen reference dari clickHandler
    alert('hello world');
  };

  // misal isi paramter dgn author
  const moreComplex = (author) => {
    console.log(author);
  };

  return (
    // onMouseOver artinya tanpa diklik hnya di arahkan saja dia akan muncul
    // misal kita ingin menampilkan title
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img}></img>
      {/* inline function kita bisa mengambil nilai dari props ketika diklik maka akan muncul  
      author yang di klik*/}
      <h1 onClick={() => console.log(author)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      {/* dan isi argument dgn author shingga ktika diklik maka akan
      muncul author karna target yg kita ambil dri author props, dan disini perlu arrow function,
      jika tanpa arrow function maka akan muncul smua author tnpa di klik krna sebenarnya kita 
      memanggil author shingga prlukan arrow function */}
      <button type='button' onClick={() => moreComplex(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));



# IMPORT & EXPORT
dalam javascript kedua fungsi ini untuk membagi code menjadi potongan kecil,
agar bisa termanage menjadi lebih mudah... 

jika dalam file menggunakan export const data = {

}

maka ketika di import untuk digunakan name nya harus sama dgn export
dan menggunakan bracket jadi : 

import {data} from 'pathfile'

jika dalam file menggunakan export default dibawah 
mka dalam file tsb export default name_ , _name ini harus match dgn nama component tsb.
misal component namenya Greeting , maka export default Greeting
dan ketika import agar bisa dipakai bisa menggunakan nama yang bebas yg kita mau..

import GoodMorning from './Greeting'


# deploy 

npm run build