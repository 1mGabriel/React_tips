// DECLARAÇÃO DOS DADOS
let elements = [
    {
      name: "one",
      value: 1,
    },
    {
      name: "two",
      value: 2,
    },
    {
      name: "three",
      value: 3,
    },
  ];

  return (
    <ul>
        {/* PERCORRE O ARRAY DE DADOS EXECUTANDO UMA FUNÇÃO PARA CADA DADO NA LISTA DE ARRAY */}
      {elements.map(function (element, index) {
        return (
          <li key={index}>
            The value for {element.name} is {element.value}
          </li>
        );
      })}
    </ul>
  );
  