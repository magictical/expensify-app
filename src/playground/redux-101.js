import { createStore } from 'redux';

const store = createStore((state = {count:0 }, action) => {
    switch(action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + 1
            };
        case 'DECREMENT' :
            return {
                count: state.count -1
            }
        case 'RESET' :
            return {
                count: state.count = 0
            }
        
        default : 
            return state;
    }
});

console.log(store.getState());


//important keyword : action

// action for increment
store.dispatch({
    type: 'INCREMENT'
});

// action for decrement
store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT'
});


// action for reset
store.dispatch({
    type: 'RESET'
});



store.dispatch({
    type: 'DECREMENT'
});
console.log(store.getState());