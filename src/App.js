import './App.css';
import Carousel from './components/carousel';
import Context from './components/context';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div className="App">
        <header className="navbar">
          <a className="brand"   href="/" >☕ Latte</a>
          <a className="navitem" href="/" >🍫 Chocolate</a>
          <a className="navitem" href="/" >🍵 Green Tea</a>
          <a className="navitem" href="/" >🍺 Beer</a>
          <a className="navitem" href="/" >👨‍🎓 Login</a>
        </header>
        <Carousel/>
        <Context />
        <div className="dlbanner">
        <p>Now available in <br/> <strong> Web and Mobile Platforms.</strong></p>
          <button className="btnDl" >Download now</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
