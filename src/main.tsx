import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import { createGlobalStyle } from 'styled-components'
import store from './store/index.ts'
import { Provider } from 'react-redux/es/exports'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    /* primeiro tamanho: */
    /* width: 400px;
    height: 550px; */
    width: 550px;
    background-color: rgba(41,44,49,255);
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
)
