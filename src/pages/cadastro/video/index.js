import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'


function CadastroDeVideo(){
    return (
      <div>
        <PageDefault>
          <h1>Cadastro de Vídeo</h1>
          <Link to="/cadastro/categoria">
            Cadastrar categoria
          </Link>
        </PageDefault>
      </div>
    )
  }

  export default CadastroDeVideo