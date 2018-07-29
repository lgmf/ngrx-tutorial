import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Tutorial } from '../models';
import { AppState } from '../app.state';
import * as TutorialActions from '../actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // Section 1
  tutorials: Observable<Tutorial[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
  }

  delTutorial(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

}

// Section 1
// We're defining an observable named tutorials which we will later display in the template.

// Section 2
// We're accessing the store from ngrx within the constructor,
// and then selecting tutorial which is defined as a the property from app.module.ts in StoreModule.forRoot({}).
// This calls the tutorial reducer and returns the tutorial state.
