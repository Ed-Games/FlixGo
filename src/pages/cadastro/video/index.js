import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroDeVideo() {
  const history = useHistory();
  const { handleRegister, initialValues } = useForm({
    titulo: 'Vídeo Padrão',
    url: 'https://www.youtube.com/watch?v=XcU9GEUZTQA',
    categoria: 'Front End',
  });
  return (
    <div>
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          alert('video cadastrado com sucesso');

          videosRepository.create({
            titulo: initialValues.titulo,
            url: initialValues.url,
            categoriaId: 1,
          }).then(() => {
            history.push('/');
          });
        }}
        >
          <FormField
            label="Título do Vídeo"
            type="text"
            name="titulo"
            value={initialValues.titulo}
            onChange={handleRegister}
          />
          <FormField
            label="URL"
            type="text"
            name="url"
            value={initialValues.url}
            onChange={handleRegister}
          />
          <FormField
            label="Categoria"
            type="text"
            name="categoria"
            value={initialValues.categoria}
            onChange={handleRegister}
          />
          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <Link to="/cadastro/categoria">
          Cadastrar categoria
        </Link>
      </PageDefault>
    </div>
  );
}

export default CadastroDeVideo;
