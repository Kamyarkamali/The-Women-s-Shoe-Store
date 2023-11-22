import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Layout from './components/layout/Layout.tsx'

import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Layout>
    <App />
    </Layout>
      </BrowserRouter>
)
