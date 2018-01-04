export class Hero{
    private _name: string;
    private _age: number;

    constructor(name: string, age: number){
        this._name = name;
        this._age = age;
    }

    getAge(): number{
        return this._age;
    }

    getName(): string{
        return this._name;
    }
}