import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Events from './components/Events';
import WeekEvents from './components/WeekEvents';
import Feedback from './components/Feedback';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/weekevents/' component={WeekEvents}/>
                <Route path='/events/:id' component={Events}/>
                <Route path='/feedback/:event' component={Feedback}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);

store.dispatch({type: 'UPLOAD_DATA' });
store.dispatch({type: 'UPLOAD_SPEAKERS' });

registerServiceWorker();
