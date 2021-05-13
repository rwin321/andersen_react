import React, { memo } from "react";
import useFetch from "../../hooks/useFetch";
import Preloader from "../Preloader";
import User from "./User";

const Users = ({ hasMounted }) => {
  const { loading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  {
    hasMounted && console.log("USERS was mounted");
  }
  // conditional rendering
  return loading ? (
    <Preloader />
  ) : (
    <section className="users" style={{ maxHeight: "100vh" }}>
      {data &&
        Array.from(data).map((user) => {
          return <User key={user.id} name={user.name} email={user.email} />;
        })}
    </section>
  );
};

export default memo(Users);
