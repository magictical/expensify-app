import { createStore } from 'redux';

// Array fuction 연습 파라메터로 array와 object를 같이 사용할 수 있다.
const add = ({ a, b }, c) => {
    return a + b + c;
}
console.log(add({a:1, b:12}, 20));




// Action generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

// chanllenge create RESET, SET action gererators

const resetCount = () => ({
    type:'RESET'
})

const setCount = ( {setCountBy }) => ({
    type: 'SET',
    setCountBy
})

const store = createStore((state = {count:0 }, action) => {
    switch(action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            }
        case 'SET' :
            return {
                count: action.setCountBy
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
store.dispatch(incrementCount( {incrementBy: 5 }));

store.dispatch(incrementCount());

// // to ubsubscribe use .subscribe() again
// unsubscribe();

// action for reset
store.dispatch(resetCount());

// action for decrement
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ setCountBy: 101 }));