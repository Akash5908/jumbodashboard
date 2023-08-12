import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import contactsApp from "./contactsApp"
import changeTheTour from './Api';
import AddTourReducer from './AddTour';
const exportReducers = history => {
    return combineReducers({
        router: connectRouter(history),
        contactsApp: contactsApp,
        changeTheTour: changeTheTour,
        addTour: AddTourReducer
    });
};

export default exportReducers;

