
import './App.css';
import { Counter } from './components/Counter';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Input/>
      <Todo/>
    </div>
  );
}

export default App;
