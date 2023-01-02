import  styled from 'styled-components';

export const InputContainer = styled.div`
   
    width: 100%;
    height: 75px;
    background-color: #AAFFAA;

    display: flex;
    align-items: center;
    justify-content: flex-end ;

    font-size: 24px;
    font-family: 'Roboto';
    

    //o legal do styled component é que estamos fazendo 
    //encadeamento. podemos estilizar o input que ira dentro de uma div
    //sem a necessidade de criar um container para isso.
    input{
        width: 100%;
        height: 75px;
        background-color: #AAFFAA;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        // padding permite o espaço do texto da caculadora com a borda
        padding: 0 10px;
        float: right;
        clear: both;


        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;


    }
  
`
