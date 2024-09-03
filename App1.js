import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Dr9 labs </h1>
        <p>Dr9 Health care</p>
      </header>
      <body>
        <lable>UserId:  </lable>
        <input type="text"></input>
        <lable>Password:</lable>
        <input type="password"></input>
      </body>
    </div>
  );
}

export default App;
