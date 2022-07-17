import Card from "../UI/Card";
import classes from "./userList.module.css";

const UserList = (props) => {
  return (
    <Card class={classes.userList}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} className={classes.user}>
            {user.name} is {user.age} years old.
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
