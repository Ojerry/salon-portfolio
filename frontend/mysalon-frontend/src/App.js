import Pages from './pages';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import axios from 'axios'
import UserAuthProvider from './context/UserAuthContext'

axios.defaults.baseURL = "http://localhost:8080/"
axios.defaults.headers.common['Accept'] = '*/*'
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;
//axios.defaults.headers.common['Acces-Control-Allow-Origin'] = "*";
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}

export default App;
