import  Input  from './components/Input/index';
import Button  from './components/Button/index'

import {Container, Content, Row} from './styles';
import { useState } from 'react';

const App = () => {
  //vou armazenar o stado da minha aplicação
  const [currentNumber, setCurrentNumber] = useState('0');

  //Segundo useSate - o usestate abaixo serà utilizado para a soma dos nùmeros
  //da calculadora.
  const [firstNumber, setFirstNumber] = useState('0');

  //terceiro useState
  const [operation, setOperation] = useState('');

//--------------------FUNCTIONS-----------------------------------------
  const handleOnClear = () =>{
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleOffClear = () =>{
    handleOnClear()
    setCurrentNumber('Pressione C para ligar a calculadora!')
   
  };


  //function(adicionar numero)
  const handleAddNumber = (num) => {
    // O prev representa o valor que eu ja possuo nesse estado
    //nesse caso eu já concateno com o number.
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };

  //Utilização do segudno useState (function somar)
  const handleSumNumber = () =>{

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('+')
      setOperation('+')

    }else {

      console.log( Number(firstNumber), Number(currentNumber))
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
      
    }
    
  };



   //Utilização do segudno useState (function subtração)
   const handleSubtractNumber = () =>{

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')

    }else {

      console.log( Number(firstNumber), Number(currentNumber))
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub))
      setOperation('')
      
    }
    
  };

  //function para o button dividiro.
  const hadleDivision = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')

    } else {
      const dvision = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(dvision))
      setOperation('')
    }
  }

  const multiplication = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      console.log(Number(firstNumber), Number(currentNumber))
      const multiplication = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multiplication))
      setOperation('')

    }
  }


    //Utilização do terceiro useState (funciton igual)
    const handleEquals = () =>{

      if(firstNumber !== '0' && operation !== '' && currentNumber !== ('0')){ 
        switch(operation){
          case '+':
            handleSumNumber();
            break;
          case '-':
            handleSubtractNumber();
            break;
          case '/':
            hadleDivision();
            break;
          case '*':
            multiplication();
            break;
        default: break;
        }
        
      }

      
    };
  
//-----------------------------------------------------------------------
  return (
    //aqui eu estava retornando na tela uma div
    //logo substitui a div pelo container que criei no styles.
    <Container>
     
       
          {/* Conteudo da minha calculadora */}
        <Content>
           
            <Input value={currentNumber}/>
            <Row>
                 <Button label="*" onClick={multiplication}/>
                 <Button label="/" onClick={hadleDivision }/>
                 <Button label="C" onClick={ handleOnClear}/>
                 <Button label="CC" onClick={ handleOffClear}/>
                
              </Row>

              <Row>
                 <Button label="7" onClick={ () => handleAddNumber ('7')}/>
                 <Button label="8" onClick={ () => handleAddNumber ('8')}/>
                 <Button label="9" onClick={ () => handleAddNumber ('9')}/>
                 <Button label="-" onClick={handleSubtractNumber}/>
                
              </Row>

            <Row>
                 <Button label="4" onClick={ () => handleAddNumber ('4')}/>
                 <Button label="5" onClick={ () => handleAddNumber ('5')}/>
                 <Button label="6" onClick={ () => handleAddNumber ('6')}/>
                 <Button label="+" onClick={handleSumNumber}/>
                
              </Row>

              <Row>
                 <Button label="1" onClick={ () => handleAddNumber ('1')}/>
                 <Button label="2" onClick={ () => handleAddNumber ('2')}/>
                 <Button label="3" onClick={ () => handleAddNumber ('3')}/>
                 <Button label="=" onClick={handleEquals}/>
              </Row>
            

             
           
        </Content>


    </Container>
  );
}

export default App;
