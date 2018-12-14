const {createStore, combineReducers} = require('redux');

const generalReducer = require('../reducers/generalReducer');
const resultReducer = require('../reducers/resultReducer');

module.exports = createStore(combineReducers({
    general: generalReducer,
    result: resultReducer
}));