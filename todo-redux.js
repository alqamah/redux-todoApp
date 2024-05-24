const redux = require('redux');

//ACTIONS
const ADD_TODO = "Add Todo";
const TOGGLE_TODO = "Toggle Todo";

//ACTION CREATOR FUNCTION: converts text to object
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
  switch (action.type){
    case ADD_TODO:
    case TOGGLE_TODO:
    default:
      return state;
  }
}