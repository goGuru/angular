import { Action } from '@ngrx/store';
import { Hero } from '../models/hero.model';

export const ADD_HERO = '[Hero] Add Hero';

export class AddHero implements Action{
    readonly type = ADD_HERO;

    constructor(public payload: Hero){}
}