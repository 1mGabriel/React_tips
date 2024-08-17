// IMPORTAÇÃO DO USESTATE
import React, { useState } from "react";

export default function Hello(props) {
  // CONTROLE DO ESTADO :
  let [name, setName] = useState("Julie");
  // FUNÇÃO QUE ALTERA O ESTADO DO STATE
  function updateName() {
    let newName = prompt("What is your name?");
    setName(newName);
  }

  return (
    <div>
      <h1>{name}</h1>
      {/* ADICIONANDO O EVENTO QUE ALTERA O STATE PELO CLIQUE */}
      <button onClick={updateName}>Update name</button>
    </div>
  );
}
