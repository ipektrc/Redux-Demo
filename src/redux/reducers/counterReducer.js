import * as actionTypes from '../actions/actionTypes';

const counterReducer = (state = 0, action) => {
    console.log("counterReducer action",action)
    console.log("counterReducer state",state)
    console.log("actionTypes",actionTypes)
    let newState;
    switch (action.type){
        case actionTypes.INCREASE_COUNTER:
            return (newState = state + action.payload);
        case actionTypes.DECREASE_COUNTER:
            return (newState = state - action.payload);
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload)
        default:
            console.log("default state",state)
            return state;
    }
};

export default counterReducer;