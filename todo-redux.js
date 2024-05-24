const redux = require('redux');

//ACTIONS
const ADD_TODO = "Add Todo";
const TOGGLE_TODO = "Toggle Todo";

//ACTION CREATOR FUNCTION: 
//converts text to object, Action creators in Redux are functions that generate and return action objects.
const addTodo = (text) => (
  {
    text:text,
    type:ADD_TODO
  }
)
const toggleTodo = (index) => (
  {
    index: index,
    type: TOGGLE_TODO
  }
)

//INITIAL STATE
const initialState = {
  todo : []
}

//REDUCERS
function todoReducer(state=initialState, action){ //setting default value of state to initialState 
  //Reducers are pure functions that take the current state and an action object as arguments and retum a new state.
  switch (action.type){
    case ADD_TODO:
    case TOGGLE_TODO:
    default:
      return state;
  }
}