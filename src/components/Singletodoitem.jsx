import Checkbox from "./Checkbox";
import PrimaryButton from "./PrimaryButton";

const Singletodoitem = ({ todo }) => {
  return (
    <div className="todo" key={todo.id}>
      <div className="todo-item">
        <Checkbox />
        <p>{todo.title}</p>
      </div>
      <div className="flex-container">
        <PrimaryButton>Edit</PrimaryButton>
        <button class="delete-button" onclick="deleteTodo(${index})">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Singletodoitem;
