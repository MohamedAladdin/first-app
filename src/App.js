import './App.css';
import Header from './header';
import Footer from './footer';

function App() {

  const message = "Hello World";
  const dev_name = 'Mohamed Aladdin';

  return (
    
    <div className="App">

      <Header />

      <h1> { message } </h1>

      <p> This page was developed by { dev_name }  </p>

      <p> { Math.floor(Math.random() * 100) } </p>

      <Footer />

    </div>
  );
}

export default App;
