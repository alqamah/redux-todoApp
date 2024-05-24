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
  todos : []
}

//REDUCERS
function todoReducer(state=initialState, action){ //setting default value of state to initialState 
  //Reducers are pure functions that take the current state and an action object as arguments and retum a new state.
  switch (action.type){
    case ADD_TODO:
      return {
        ...state, //spread the prev states
        todos:[
          ...state.todos, //spread the prev todos[]
          {
            text: action.text, //add new todo, text is coming from action-creator passed to parameter of this fn.
            completed: false
          }
        ]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: todos.map((t,i)=>{ //multiline function requiring a return statement
          if(i == action.index) //returns updated todo, which is added to spreaded prev state
            t.completed = !t.completed
          return t;
        })
      }
    default:
      return state;
  }
}

//CREATING THE STORE
redux.createStore(todoReducer);
