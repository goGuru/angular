import { Component } from "@angular/core";
import { Hero } from "./hero";

@Component({
    selector: "heroes",
    templateUrl: "./heroes.component.html"
})

export class HeroesComponent{
    heroes: Array<Hero> = [
        new Hero("Bosse",76),
        new Hero("Lennart",66)
    ];

    title = "the home of heroes";
}