import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Cart></Cart>
      <Questions></Questions>
    </div>
  );
}

export default App;
