import React from "react";

function UserList(props) {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <p key={item.id}>
            {item.name}({item.age}years old)
          </p>
        );
      })}
    </div>
  );
}

export default UserList;
