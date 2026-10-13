import { useState } from "react";

function App() {
  const [count, setCount] = useState(5);
  const min = 0;
  const max = 10;
  let status = "Counter is running normally.";

  function increase() {
    if (count < max) {
      setCount(count + 1);
    }
  }
  function decrease() {
    if (count > min) {
      setCount(count - 1);
    }
  }
  function resetCounter() {
    setCount(5);
  }

  if (count === min) {
    status = "Minimum value reached!";
  } else if (count === max) {
    status = "Maximum value reached!";
  }
  return (
    <>
      <main className="counter-container">
        <header className="header">
          <div className="icon">✚</div>
          <h1>Counter App</h1>
          <p>Manage your count with ease</p>
        </header>

        <section className="counter-display">
          <span className="label">CURRENT COUNT</span>
          <h2>{count}</h2>
          <span className="status normal">● Normal</span>
        </section>

        <section className="buttons">
          <button
            className="btn increase"
            onClick={increase}
            disabled={count === max}
          >
            ＋ Increase
          </button>
          <button
            className="btn decrease"
            onClick={decrease}
            disabled={count === min}
          >
            － Decrease
          </button>
          <button className="btn reset" onClick={resetCounter}>
            ↻ Reset Counter
          </button>
        </section>

        <section className="status-box">
          <h3>ⓘ Counter Status</h3>
          <p>{status}</p>
          <div className="limits">
            <span>Minimum: {min}</span>
            <span>Maximum: {max}</span>
          </div>
        </section>
      </main>
    </>
  );
}
export default App;
