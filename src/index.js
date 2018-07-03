import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/main.css';
import './assets/css/font-awesome.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <Route path="/*" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
