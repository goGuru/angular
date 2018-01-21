import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { firebaseConfig } from '../environments/firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverData$: Observable<any>;
  url: string = "../assets/data.json";

  items$: Observable<any>;

  constructor(private http:Http, db: AngularFirestore){
    this.items$ = db.collection("first").valueChanges();

    this.items$.subscribe(val => console.log(val[0]));
  }

  ngOnInit(){
    /*this.serverData$ = this.http.get(this.url)
      .map((res: Response) => {
          return res.json();
        }
      );*/
  }

  onClick(){
    console.log(this.items$);
  }
}
