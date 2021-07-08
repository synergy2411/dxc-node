const { createStore } = require("redux");

// InitialState
const InitialState = {
    counter : 0,
    result : []
}

// Reducer
const rootReducer = (state = InitialState, action) => {
    // Math.random(), Date.now(), REST API
    if(action.type === "INCREMENT"){
        return {
            ...state,
            counter : state.counter + 1
        }
    }
    else if(action.type === "DECREMENT"){
        return { 
            ...state, counter : state.counter - 1
        }
    }
    return state;
}

// Store 
const store = createStore(rootReducer)

console.log("STATE - ",store.getState());

// Subscription
store.subscribe(() => {
    console.log("SUBSCRIBE : ", store.getState());
})

// Dispatch Action
store.dispatch({type : "INCREMENT"})
// console.log("AFTER INCREMENT - ", store.getState());

store.dispatch({type : "DECREMENT"})
// console.log("AFTER DECREMENT - ", store.getState());