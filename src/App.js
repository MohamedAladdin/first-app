import './App.css';
import Header from './header';
import Footer from './footer';
import BlogList from './blogList';

import { useState } from 'react';

function App() {

  const dev_name = 'Mohamed Aladdin';

  const [message, setNewMessage] = useState('Hello World'); // Like setInterval

  function testSomething( e )
  {
    document.getElementById('xx').textContent += e.clientX + " " + e.clientY;

    setNewMessage('This Message Has Replace BY useState function');

  }

  var blogs = [

      {
        id: 1,
        title: "Hello World",
        author: "Mohamed Aladdin",
        body: "Lorem Ipsum some written things Lorem Ipsum some written things Lorem Ipsum some written things...",
      },
      {
        id: 2,
        title: "Second POST",
        author: "ALiaa Aladdin",
        body: "Lorem Ipsum some written things Lorem Ipsum some written things Lorem Ipsum some written things...",
      },
      {
        id: 3,
        title: "Third Blog is here",
        author: "Fedaa Emad",
        body: "Lorem Ipsum some written things Lorem Ipsum some written things Lorem Ipsum some written things...",
      },
  ]; 

  return (
    
    <div className="App">

      <Header />

      <h1> { message } </h1>

      <p> This page was developed by { dev_name }  </p>

      <button onClick={testSomething} > Click on ME </button>

      <p id='xx'> </p>

      <BlogList blogs={blogs} />

      <Footer />

    </div>
  );
}

export default App;
