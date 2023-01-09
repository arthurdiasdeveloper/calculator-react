import  styled from 'styled-components';

//nesse caso aqui, ao invés de styled ser uma div
//já podemos colocar um styled.button
export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #FFFF00;
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    
    align-items:stretch ;
    //quando eu passar o mouse em cima do button,
    //a opacidade sera de 0.6
    &:hover{
        opacity: 0.6;

    }
    
    
  
`;
