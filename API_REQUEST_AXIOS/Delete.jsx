import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyDeleteComponent = () => {
  const [data, setData] = useState([]); // Armazena os dados dos usuários
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Armazena erros

  // Requisição GET para buscar os dados ao carregar o componente
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setData(response.data); // Armazena os dados no estado
        setLoading(false); // Desativa o estado de carregamento
      })
      .catch((err) => {
        setError(err.message); // Armazena o erro
        setLoading(false); // Desativa o estado de carregamento
      });
  }, []);

  // Função para deletar um usuário
  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setData(data.filter(user => user.id !== id)); // Remove o usuário do estado
      })
      .catch((err) => {
        setError('Erro ao excluir usuário.'); // Armazena o erro
      });
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div>
      <h1>Lista de Usuários:</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <strong>Nome:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email} <br />
            <button onClick={() => handleDelete(user.id)}>Excluir</button> {/* Botão para excluir o usuário */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyDeleteComponent;
