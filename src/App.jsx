import React from "react";
import PageTitle from "./components/PageTitle";

const App = () => {
  return (
    <main>
      <PageTitle text={"My Todo App"} />
      <form>
        <input
          placeholder="Type new Todo here"
          class="input"
          name="text"
          type="text"
          required
        />

        <button class="button">Add Todo</button>
      </form>
      <div className="todos-container"></div>
    </main>
  );
};

export default App;
