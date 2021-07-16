import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import ArticleContainer from './components/ArticleContainer';
import  Title  from './components/Title';
import  Paragraph  from './components/Paragraph';
import EnNegrita from './components/EnNegrita';
import DeColorRojo from './components/DeColorRojo';



export default function App() {
  return (
  
 
    <ArticleContainer>
      <Title>
        Hola <i>Mundo</i>!
      </Title>
      <Paragraph>
        Párrafo de mi artículo
        <EnNegrita>
          <DeColorRojo> importante</DeColorRojo>
        </EnNegrita>!
      </Paragraph>
    </ArticleContainer>
  );
}

