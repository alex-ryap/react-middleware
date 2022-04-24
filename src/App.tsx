import { Provider } from 'react-redux';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
