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
                 <Button/>
                 <Button/>
                 <Button/>
                 <Button/>
              </Row>
            
              <Row>
                 <Button/>
                 <Button/>
                 <Button/>
                 <Button/>
              </Row>

              <Row>
                 <Button/>
                 <Button/>
                 <Button/>
                 <Button/>
              </Row>
           
        </Content>

      </header>

    </Container>
  );
}

export default App;
