import React from 'react'
import Menu from '../menu'
import Footer from '../Footer'
import styled from 'styled-components'

const Main = styled.main`
background-color: var(--black);
color: var(--white);
padding-top:50px;
padding-left:5%;
padding-right:5%;
min-height: 100vh;

`;

function PageDefault(props){
    return(
        <>
            <Menu />
                <Main>
                 {props.children}
                </Main>
            <Footer />
        </>
    )
}

export default PageDefault
