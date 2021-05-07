import React from "react";

const Todos = ({ todos }) => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {console.log("todos are rendered")}
        {todos.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>;
        })}
      </div>
    </>
  );
};

export default Todos;
