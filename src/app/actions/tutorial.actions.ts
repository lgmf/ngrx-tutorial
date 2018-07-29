// Section 1
import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { Tutorial } from '../models';

// Section 2
export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

// Section 3
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Tutorial) { }
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) { }
}

// Section 4
export type Actions = AddTutorial | RemoveTutorial;

// Seciton 1
// Here, we're simply importing our Tutorial model and Action from ngrx/store. This makes sense, being that we're working with actions.

// Section 2
// We're defining the type of action, which is in the form of a string constant.

// Section 3
// We're creating a class for each action with a constructor that allows us to pass in the payload.
// This isn't a required step, but it does provide you with strong typing.

// Section 4
// We're exporting all of our action classes for use within our upcoming reducer.
