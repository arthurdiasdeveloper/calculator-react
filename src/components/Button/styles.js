import  styled from 'styled-components';

//nesse caso aqui, ao invés de styled ser uma div
//já podemos colocar um styled.button
export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    //quando eu passar o mouse em cima do button,
    //a opacidade sera de 0.6
    &:hover{
        opacity: 0.6;

    }
    
    
  
`;
