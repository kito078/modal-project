import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [user, setUser] = useState([]);
  console.log(user);
  const onUserHandler = (newName, newAge) => {
    setUser((prevUser) => {
      return [
        { name: newName, age: newAge, id: Math.random().toString },
        ...prevUser,
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onSaveUser={onUserHandler} />
      <UserList items={user} />
    </div>
  );
}

export default App;
