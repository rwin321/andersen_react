import React, { memo } from "react";
import useFetch from "../../hooks/useFetch";
import Preloader from "../Preloader";
import User from "./User";

const Users = memo(({ hasMounted }) => {
  const { loading, data, error, getData } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  {
    hasMounted && console.log("USERS was mounted");
  }

  if (loading) return <Preloader />;
  return (
    <section className="users">
      {data &&
        Array.from(data).map((user) => {
          return <User key={user.id} name={user.name} email={user.email} />;
        })}
    </section>
  );
});

export default Users;
