import React from "react";

const User = ({ name, email }) => {
  return (
    <div className="user">
      <span className="user__name">{name}</span>
      <span className="user__email">{email}</span>
    </div>
  );
};

export default User;
