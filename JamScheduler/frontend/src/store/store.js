import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import session from './session';
import usersReducer from './users';
import eventsReducer from './events';
import songsReducer from './songs';
import attendeesReducer from './attendees';


const rootReducer = combineReducers({ 
    session,
    users: usersReducer,
    events: eventsReducer,
    songs: songsReducer,
    attendees: attendeesReducer
});
let enhancer;

    if (process.env.NODE_ENV === 'production') {
        enhancer = applyMiddleware(thunk);
    } else {
        const logger = require('redux-logger').default;
        const composeEnhancers =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        enhancer = composeEnhancers(applyMiddleware(thunk, logger));
    }

    export default function configureStore(preloadedState) {
        return createStore(rootReducer, preloadedState, enhancer);
    };