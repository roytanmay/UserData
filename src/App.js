import { useState } from "react";
import classes from "./app.module.css";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const onAddUserHandler = (username, age) => {
    setUserList((prevValue) => {
      return [
        ...prevValue,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className={classes.App}>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
