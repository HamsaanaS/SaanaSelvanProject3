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

        <div className="headerContainer wrapper">
          <h1>It's noon 'o' clock somewhere...</h1>
          <h2>So what we drinking?</h2>

          <form onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="searchBar">Enter your ingredient of choice here</label>
            <input onChange={handleChange} type="text" id="searchBar" value={userInput}/>
            <button type="submit">Click and Scroll</button>
          </form>
        </div>

      </header>

      <main className="wrapper">
        <section>
          {submit ? <Drinks userInput={submit}></Drinks> : null}
        </section>
      </main>

      <footer>
        <p>Created by Saana Selvan <br /> <a href="https://junocollege.com/">(Juno College 2022)</a></p>
      </footer>

    </div>
  );
}

export default App;
