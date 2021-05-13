import React from "react";
import useFetch from "../hooks/useFetch";

const TodosData = ({ url, renderContent }) => {
  const { data } = useFetch(url);

  return <>{renderContent(data)}</>;
};

export default TodosData;
