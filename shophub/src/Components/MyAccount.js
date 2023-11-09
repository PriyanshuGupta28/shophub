import React from "react";

const MyAccount = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  return <div>Hello , {storedUser?.username}</div>;
};

export default MyAccount;
