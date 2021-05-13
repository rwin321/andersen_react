import React from "react";
import RenderPropTodos from "../renderProp/RenderPropTodos";

const Todos = () => {
  console.log("Todos was rendered");

  const styles = {
    display: "flex",
    flexDirection: "column",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  return (
    <div style={styles}>
      {/* <h2>Todos fake page</h2>
      <p>made up just for routing tab</p> */}

      <RenderPropTodos />
    </div>
  );
};

export default Todos;
