import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../menu';
import Footer from '../Footer';

const Main = styled.main`
background-color: var(--black);
color: var(--white);
padding-top:50px;
padding-left:5%;
padding-right:5%;
min-height: 100vh;
${({ paddingAll }) => css`
  padding:0;
`}

`;

function PageDefault(props, paddingAll) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        { props.children }
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
