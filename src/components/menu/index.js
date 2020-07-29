import React from 'react'
import Logo from '../../assets/image/Logo.png'
import '../menu/menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button/index'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
             <img className="Logo" src={Logo} alt="FlixGo logo" />
            </a>
            <Button as="a" className='ButtonLink' href='/'>
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;