import React from 'react'
import Logo from '../../assets/image/Logo.png'
import '../menu/menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button/index'
import {Link} from 'react-router-dom'

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
             <img className="Logo" src={Logo} alt="FlixGo logo" />
            </Link>
            <Button as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;