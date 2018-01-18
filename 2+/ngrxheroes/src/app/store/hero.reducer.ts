import { Action } from '@ngrx/store';
import * as fromActions from './hero.action';
import { Hero } from '../models/hero.model';

const initialState: Hero = {
    name: "Arnold",
    age: 5
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function heroReducer(state: Hero = initialState, action: fromActions.AddHero){
    switch(action.type){
        case fromActions.ADD_HERO:{
            return newState(state, action.payload)
        }
        default:
            return state;
    }
}