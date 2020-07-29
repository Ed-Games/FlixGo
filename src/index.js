import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

function CadastroDeVideo(){
  return (
    <div>
      Cadastro de Vídeo
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    < Route  path="/cadastro/video" component={CadastroDeVideo} />
    < Route  path="/" component={App} exact />
    < Route  component={()=>(<div> Erro 404!<br/> Página não encontrada</div>)} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


/*<React.StrictMode>
    <App />
  </React.StrictMode>,*/