import { createStore, applyMiddleware, combineReducers } from 'redux';
import dataClickReducer from './reducers/data-click-reducer';
import calendarReducer from './reducers/calendar-reducer';
import speakersReducer from './reducers/speakers-reducer';
import eventsLoadingMiddleware from './middleware/events-loading-middleware';
import speakersLoadingMiddleware from './middleware/speakers-loading-middleware';
import logger from './middleware/logger-middleware';


const appReducer = combineReducers({
    events: calendarReducer,
    selectedDate: dataClickReducer,
    speakers: speakersReducer
})

const store = createStore(appReducer, applyMiddleware(logger, eventsLoadingMiddleware, speakersLoadingMiddleware));
window.store = store;
Object.defineProperty(window, 'state', {
  get() {
    return store.getState();
  }
});

store.subscribe(() => {
  console.log('Current store state -> ', window.state);
})

export default store;
