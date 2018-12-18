import { createStore } from 'redux';

const store = createStore((state = {count:0 }, action) => {
    switch(action.type) {
        case 'INCREMENT' :
            //action.increment가 숫자면 그걸 incrementBy로 쓰고 아닐경우 ':' default로 1을 씀
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT' :
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
            return {
                count: state.count - decrementBy
            }
        case 'SET' :
            return {
                count: action.counter
            }
        case 'RESET' :
            return {
                count: state.count = 0
            }
        
        default : 
            return state;
    }
});



//important keyword : action

// check store's state
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// action for increment
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5

});

// // to ubsubscribe use .subscribe() again
// unsubscribe();

store.dispatch({
    type: 'INCREMENT'
});

// action for reset
store.dispatch({
    type: 'RESET'
});

// action for decrement
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'DECREMENT',
});

store.dispatch({
    type: 'SET',
    counter: 101
})