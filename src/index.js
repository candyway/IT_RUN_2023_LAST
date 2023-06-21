import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import { store } from './redux/food/store';
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
    <Header/>
    <Routes/>
    </BrowserRouter>
    </Provider>
);
