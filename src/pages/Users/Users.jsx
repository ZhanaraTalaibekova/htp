import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/actions/usersActions";

export const Users = () => {
  const dispath = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispath(getUsers());
  }, []);

  if (!users) { 
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div>
          <p>{user.fullName}</p>
        </div>
      ))}
    </div>
  );
};
