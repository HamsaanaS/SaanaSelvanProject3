import {useState} from 'react';
import './App.css';

import Drinks from './Drinks';

function App() {

  const [userInput, setUserInput] = useState("");
  const [submit, setSubmit] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(userInput);
  };

  return (
    <div className="App">

      <header>
        <h1>It's noon'o'clock somewhere...</h1>
        <h2>Time to get our drink on!</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="searchBar"></label>
          <input onChange={handleChange} type="text" id="searchBar" value={userInput}/>
          <button type="submit">Click to Get Inspired</button>
        </form>
      </header>

      <main className="wrapper">
        <section>
          {submit ? <Drinks userInput={submit}></Drinks> : null}
        </section>
      </main>

    </div>
  );
}

export default App;
