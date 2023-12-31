
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store/store';
import App from './App.jsx';
import { LangProvider } from './context/langContext';

import './fonts.css'
import '@tremor/react/dist'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> {/* Agrega PersistGate */}
      <BrowserRouter>
      <LangProvider>
        <App />
      </LangProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
