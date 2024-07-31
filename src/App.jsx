import React from "react";
import PageTitle from "./components/PageTitle";
import AddToDoForm from "./components/AddToDoForm";

const App = () => {
  return (
    <main>
      <PageTitle text={"My Todo App"} />
      <AddToDoForm />
      <div className="todos-container"></div>
    </main>
  );
};

export default App;
