import {combineReducers}  from 'redux';
import dashboardReducer from './reducers/dashboard-reducer';
import loginReducer from './reducers/login-reducer';

export default combineReducers({
    dashboard: dashboardReducer,
});