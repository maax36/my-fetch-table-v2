import { useState } from "react";
import { GetUsers } from "../components/GetUsers";
import { TableUsers } from "../components/TableUsers";

export default function Home() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  return (
    <>
      <GetUsers setUsers={setUsers} setError={setError} />

      {error && <div>Ошибка: {error}</div>}
      {!users && <div>Загрузка...</div>}
      {users && <TableUsers dataUsers={users} />}
    </>
  );
}
