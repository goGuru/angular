import { Action } from '@ngrx/store';
import * as fromActions from './hero.action';
import { Hero } from '../models/hero.model';
import { Heroes } from '../models/heroes.model';

const initialState: Heroes = {
    heroes: [{
        name: "Arnold",
        age: 5
    }]
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function heroReducer(state: Heroes = initialState, action: fromActions.AddHero){
    switch(action.type){
        case fromActions.ADD_HERO: {
            let newState = state;
            newState.heroes.push(action.payload);

            return newState
        }
        default:
            return state;
    }
}