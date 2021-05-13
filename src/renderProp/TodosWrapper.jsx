import React from "react";

const TodosWrapper = ({ todos }) => {
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} style={{ marginBottom: ".2rem" }}>
            {`${todo.id})   ${todo.title}`}
          </div>
        ))}
    </div>
  );
};

export default TodosWrapper;
