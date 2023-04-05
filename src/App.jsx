import { useState } from "react";
import UserList from "./Components/UserList";

function App() {

  const [selected, setSelected] = useState(null);

  const users = [
    {
      id: 0,
      name: 'João',
    },
    {
      id: 1,
      name: 'Maria',
    },
    {
      id: 2,
      name: 'Thiago',
    }
  ]

const handleOnItemClick = (user) => {
  setSelected(user);
}

  return (
    <div>
      <h1>Usuários</h1>
      { selected && (
        <p>Selecionado: {selected.name}</p>
      )}

      <UserList users={users} onItemClick />
    </div>
  );
}

export default App;
