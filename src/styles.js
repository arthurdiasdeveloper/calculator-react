import styled from 'styled-components';

//agora criarei um container que ira envolver toda minha aplicação.
//styled.div porque é um componente que eu quero colocar em tela.
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;

`

//aqui vamos adicionar o conteudo da nossa calculadora
export const Content = styled.div`
    background-color: #FFFFFF;
    min-width: 600px ;
    width: 80%;
    min-height: 350px;


`