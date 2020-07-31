import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import CadastroDeVideo from './pages/cadastro/video/index'
import CadastroCategoria from './pages/cadastro/categoria/index'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    < Route  path="/cadastro/video" component={CadastroDeVideo} />
    < Route  path="/cadastro/categoria" component={CadastroCategoria} />
    < Route  path="/" component={Home} exact />
    < Route  component={()=>(<div> Erro 404!<br/> Página não encontrada</div>)} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your Home to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


/*<React.StrictMode>
    <App />
  </React.StrictMode>,*/