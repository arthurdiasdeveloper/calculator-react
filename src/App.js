import  Input  from './components/Input/index';
import  Button  from './components/Button/index';

import {Container, Content} from './styles';

const App = () => {
  return (
    //aqui eu estava retornando na tela uma div
    //logo substitui a div pelo container que criei no styles.
    <Container>
      <header className="App-header">
       
          {/* Conteudo da minha calculadora */}
        <Content>

            <Input/>
            
        </Content>

      </header>

    </Container>
  );
}

export default App;
