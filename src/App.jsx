import React from "react";
import PageTitle from "./components/PageTitle";
import AddToDoForm from "./components/AddToDoForm";
import TodoContainers from "./components/TodoContainers";
import Form from "./components/tailwind-demo/Form";

const App = () => {
  return (
    <main>
      <button className="min-w-[120px] cursor-pointer rounded-lg border-0 bg-[var(--primary-color)] bg-red-400 px-4 py-3 text-[var(--secondary-color)] shadow-inner transition-all duration-1000 hover:bg-[var(--secondary-color)]">
        Yoh!
      </button>
      <PageTitle text={"My Todo App"} />
      <AddToDoForm />
      <TodoContainers />
      <Form />
    </main>
  );
};

export default App;
