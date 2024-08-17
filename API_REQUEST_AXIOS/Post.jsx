import React, { useState } from 'react';
import axios from 'axios';

const MyPostComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [postSuccess, setPostSuccess] = useState(null); // Para indicar sucesso ou erro
  const [error, setError] = useState(null); // Para capturar erros

  // Função para lidar com as mudanças nos campos do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Fazer a requisição POST usando axios
    axios.post('https://jsonplaceholder.typicode.com/users', formData)
      .then((response) => {
        setPostSuccess('Usuário adicionado com sucesso!'); // Exibir feedback de sucesso
        setFormData({ name: '', email: '' }); // Limpar o formulário
      })
      .catch((err) => {
        setError('Erro ao adicionar usuário.'); // Armazenar o erro
      });
  };

  return (
    <div>
      <h2>Adicionar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Adicionar</button>
      </form>
      {postSuccess && <p>{postSuccess}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MyPostComponent;
