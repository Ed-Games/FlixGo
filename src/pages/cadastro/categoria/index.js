import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    desc: '',
    cor: '',
  };

  const { initialValues, handleRegister, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    console.log('hello world');
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://flix-go.herokuapp.com/categorias';
    fetch(URL_TOP).then(async (response) => {
      const resp = await response.json();
      setCategorias([
        ...resp,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria :
        {initialValues.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoevento) {
        infosDoevento.preventDefault();
        setCategorias([
          ...categorias,
          initialValues.nome,
        ]);

        clearForm();
      }}
      >

        <FormField label="Categoria" type="text" name="nome" value={initialValues.nome} onChange={handleRegister} />
        <FormField label="Descrição" type="textarea" name="desc" value={initialValues.desc} onChange={handleRegister} />
        <FormField label="Cor" type="color" name="cor" value={initialValues.cor} onChange={handleRegister} />
        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
      <div>Loading</div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.id}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
