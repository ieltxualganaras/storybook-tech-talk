import {Button} from './stories/Button';
import {Select} from './components/select/Select';
import './App.css';

function App() {
  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ]
  return (
    <div className="App">
      <Button label="Test"></Button>
      <Select primary options={options}></Select>
    </div>
  );
}

export default App;
