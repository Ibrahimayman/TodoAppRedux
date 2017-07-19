var redux = require("redux");

console.log("starting redux example");

var reducer = (state = {name: "anonymous"}, action) => {
    // state = state || {name: "anonymous"};
    return state;
};

var store = redux.createStore(reducer);
var currentState = store.getState();

console.log('currentState', currentState);
