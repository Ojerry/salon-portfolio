import Pages from './pages';
import { Provider } from 'react-redux'
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}

export default App;
