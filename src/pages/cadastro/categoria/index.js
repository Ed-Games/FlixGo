import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    desc: '',
    cor: '',
  };

  const [initialValues, setInitialValues] = useState(valoresIniciais);

  function setInitialValue(key, value) {
    setInitialValues({
      ...initialValues,
      [key]: value,
    });
  }

  function handleRegister(infosDoevento) {
    setInitialValue(infosDoevento.target.getAttribute('name'), infosDoevento.target.value);
  }

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

        setInitialValues(valoresIniciais);
      }}
      >

        <FormField label="Categoria" type="text" name="nome" value={initialValues.nome} onChange={handleRegister} />
        <FormField label="Descrição" type="textarea" name="desc" value={initialValues.desc} onChange={handleRegister} />
        <FormField label="Cor" type="color" name="cor" value={initialValues.cor} onChange={handleRegister} />
        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {/* eslint-disable-next-line arrow-body-style */}
        {categorias.map((categoria) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${categoria.nome}`}>
              {categoria}
            </li>
          );
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
