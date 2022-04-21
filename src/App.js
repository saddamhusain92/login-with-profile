import logo from './logo.svg';
import './App.css';
import Container from './Container';
import Component1 from './Component1'
import Fun from './Fun';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container name="saddam"/>
      <Component1 name="saddam developer"/>
      <Fun cs="computer"/>
      </header>
    </div>
  );
}

export default App;
