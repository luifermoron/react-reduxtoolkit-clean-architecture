import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RouterApp from './routes/router.tsx';
import { setupFakeHTTP } from './lib/drivers/network/fakehttp/index.ts';
import { Provider } from 'react-redux';
import { persistor, store } from './lib/drivers/redux/index.ts';
import { PersistGate } from 'redux-persist/integration/react';

setupFakeHTTP();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <RouterApp/>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
