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
   // min-width: 300px ;
    width: 10%;
    min-height: 350px;


`

//tenho que importar a Row dentro de App.js
export const Row = styled.div`
    display: flex;
    flex-direction: Row;
    justify-content: space-between;
    align-items: center;


`
//tenho que importar a column dentro de App.js
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`