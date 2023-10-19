import './App.css';
import Card from './components/Card';
import Hello from './components/Hello';

function App() {
  return (
    <>
      <Hello nome="Fulano"></Hello>
      <Hello nome="Sicrano"></Hello>
      <Hello></Hello>
      <Card titulo="Produto 1">
        <h3>Descricao</h3>
        <p>Detalhe do produto</p>
      </Card>
      <Card titulo="Produto 2">
        <h3>Descricao</h3>
        <p>Detalhe do produto</p>
      </Card>
    </>
  );
}

export default App;
