import  Input  from './components/Input/index';
import Button  from './components/Button/index'

import {Container, Content, Row, Column} from './styles';

const App = () => {
  return (
    //aqui eu estava retornando na tela uma div
    //logo substitui a div pelo container que criei no styles.
    <Container>
      <header className="App-header">
       
          {/* Conteudo da minha calculadora */}
        <Content>
           
            <Input/>
            <Row>
                 <Button label="X"/>
                 <Button label="/"/>
                 <Button label="C"/>
                 <Button label="CC"/>
                
              </Row>

              <Row>
                 <Button label="7"/>
                 <Button label="8"/>
                 <Button label="9"/>
                 <Button label="-"/>
                
              </Row>

            <Row>
                 <Button label="4"/>
                 <Button label="5"/>
                 <Button label="6"/>
                 <Button label="+"/>
                
              </Row>

              <Row>
                 <Button label="1"/>
                 <Button label="2"/>
                 <Button label="3"/>
                 <Button label="="/>
              </Row>
            

             
           
        </Content>

      </header>

    </Container>
  );
}

export default App;
