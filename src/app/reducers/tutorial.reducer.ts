import { Action } from '@ngrx/store';

import { Tutorial } from '../models';
import * as TutorialActions from '../actions';

// Section 1
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

// Section 2
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

  // Section 3
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    // Add this case:
    case TutorialActions.REMOVE_TUTORIAL:
      const index = action.payload;
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}

// Section 1
// Here, we're defining an initial or default state. This isn't required if you don't want to define a state right out of the box.

// Section 2
// This is our actual reducer. It takes in a state, which we're defining as a Tutorial type and we've optionally bound it to initialState.
// It also takes in the action from our /actions/tutorial.actions file.

// Section 3
// First, we use a switch to determine the type of action.
// In the case of adding a tutorial,we return the new state with the help of our newState() function.
// We're simply passing in the previous state in the first parameter, and then our action in the second.

// In the event that the action.type does not match any cases, it will simply return the state,
// as provided in the first parameter of our reducer.
