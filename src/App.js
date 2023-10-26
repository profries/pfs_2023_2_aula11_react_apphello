import './App.css';
import Card from './components/Card';
import ChangeColor from './components/ChangeColor';
import Counter from './components/Counter';
import Hello from './components/Hello';
import ListCards from './components/ListCards';
import produtos from './data/Produtos'

function App() {
  return (
    <>
      <Hello nome="Fulano"></Hello>
      <Hello nome="Sicrano"></Hello>
      <Hello></Hello>
      <Counter></Counter>
      <ChangeColor></ChangeColor>
      <Card titulo="Produto 1">
        <h3>Descricao</h3>
        <p>Detalhe do produto</p>
      </Card>
      <Card titulo="Produto 2">
        <h3>Descricao</h3>
        <p>Detalhe do produto</p>
      </Card>

      <ListCards lista={produtos}></ListCards>
    </>
  );
}

export default App;
