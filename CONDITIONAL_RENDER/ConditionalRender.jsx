// // 2. Renderização Condicional com Operador Ternário
// O operador ternário é uma maneira mais concisa de escrever uma condicional. É muito útil quando você tem uma lógica simples

function MyComponent({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Bem-vindo de volta!</h1>
      ) : (
        <h1>Por favor, faça login.</h1>
      )}
    </div>
  );
}

//   3. Renderização Condicional com && (Operador Lógico "E")
// Esse padrão é comumente usado para renderizar algo apenas se uma condição for verdadeira.
function MyComponent({ hasPermission }) {
  return <div>{hasPermission && <button>Acessar Configurações</button>}</div>;
}
