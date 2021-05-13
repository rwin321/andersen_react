import React from "react";
import TodosData from "./TodosData";
import TodosWrapper from "./TodosWrapper";

const RenderPropTodos = () => {
  const URL = "https://jsonplaceholder.typicode.com/todos";

  return (
    <div className="movies">
      <TodosData
        url={URL}
        renderContent={(todos) => <TodosWrapper todos={todos} />}
      />
    </div>
  );
};

export default RenderPropTodos;
