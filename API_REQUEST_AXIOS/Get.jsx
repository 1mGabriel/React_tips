// IMPORTAÇÃO DAS BIBLIOTECAS
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
// CRIAÇÃO DO ESTADO PARA ARMAZENAR OS DADOS DA REUISIÇÃO
  const [users, setUsers] = useState([]);

//   METODO GET
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") //RESGATA A API DA URL
      .then((response) => {
        setUsers(response.data); //COLOCA AS INFORMAÇÕES DOS DADOS NO ARRAY "USERS"
      })
      .catch((error) => { //CASO DÊ ERRRO
        console.error("Error fetching users:", error);
      });
  }, []);//RETORNA UMA LISTA DE DEPENDENCIAS

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> //IMPRIMO CADA DADO DA LISTA DE ARRRAY
        ))}
      </ul>
    </div>
  );
}

export default UserList;
