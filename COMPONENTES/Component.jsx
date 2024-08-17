// IMPORTAÇÃO DA BIBLIOTECA REACT
import React from 'react'

// UM COMPONENTE É BASICAMENTE UM FUNÇÃO QUE RETORNA UM HTML
const Component = () => {
  return (
    <div>
      <h1>Component</h1>
    </div>
  )
}

export default Component

// COMPONENTES COM PROPIEDADES:
import React from "react";

 function Hello(props) {
  function fullName() {
    return `${props.firstName} ${props.lastName}`;
  }
  return <p>{fullName()}</p>;
}

// NA IMPORTAÇÃO DO COMPONENTE PASSE AS PROPS DEFINIDAS NO ARGUMENTO DA FUNÇÃO PARA TER ACESSO Á ELA DURANTE A IMPORTAÇÃO
<Hello firstName="Matt" lastName="Delac" />;

