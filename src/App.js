import  Input  from './components/Input/index';
import Button  from './components/Button/index'

import {Container, Content, Row} from './styles';
import { useState } from 'react';

const App = () => {
  //vou armazenar o stado da minha aplicação
  const [currentNumber, setCurrentNumber] = useState('0');

  const handleOnClear = () =>{
    setCurrentNumber('0')

  };

  const handleAddNumber = (num) => {
    // O prev representa o valor que eu ja possuo nesse estado
    //nesse caso eu já concateno com o number.
    setCurrentNumber(prev => `${num} ${prev === '0' ? '' : prev}`)
  };



  return (
    //aqui eu estava retornando na tela uma div
    //logo substitui a div pelo container que criei no styles.
    <Container>
     
       
          {/* Conteudo da minha calculadora */}
        <Content>
           
            <Input value={currentNumber}/>
            <Row>
                 <Button label="X" onClick={ () => handleAddNumber ('')}/>
                 <Button label="/" onClick={ () => handleAddNumber ('')}/>
                 <Button label="C" onClick={ (handleOnClear) => handleAddNumber ('')}/>
                 <Button label="CC" onClick={ () => handleAddNumber ('')}/>
                
              </Row>

              <Row>
                 <Button label="7" onClick={ () => handleAddNumber ('7')}/>
                 <Button label="8" onClick={ () => handleAddNumber ('8')}/>
                 <Button label="9" onClick={ () => handleAddNumber ('9')}/>
                 <Button label="-" onClick={ () => handleAddNumber ('')}/>
                
              </Row>

            <Row>
                 <Button label="4" onClick={ () => handleAddNumber ('4')}/>
                 <Button label="5" onClick={ () => handleAddNumber ('5')}/>
                 <Button label="6" onClick={ () => handleAddNumber ('6')}/>
                 <Button label="+" onClick={ () => handleAddNumber ('')}/>
                
              </Row>

              <Row>
                 <Button label="1" onClick={ () => handleAddNumber ('1')}/>
                 <Button label="2" onClick={ () => handleAddNumber ('2')}/>
                 <Button label="3" onClick={ () => handleAddNumber ('3')}/>
                 <Button label="=" onClick={ () => handleAddNumber ('')}/>
              </Row>
            

             
           
        </Content>


    </Container>
  );
}

export default App;
