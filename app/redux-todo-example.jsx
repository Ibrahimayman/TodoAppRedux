var redux = require("redux");

console.log("starting redux example");

var stateDefault = {
    searchtext: "",
    showCompleted: true,
    todos: []
};

var reducer = (state = stateDefault, action) => {
    return state;
};

var store = redux.createStore(reducer);

console.log('current State', store.getState());
