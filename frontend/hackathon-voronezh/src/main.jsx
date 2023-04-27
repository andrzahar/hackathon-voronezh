import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/COLORS.css'
import './index.css'
import './styles/BTN.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {store} from "./store/index.js";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
