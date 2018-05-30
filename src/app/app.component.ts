import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  str: string;
  anotherStr = 'This is another string';
  yetAnotherStr;
  blah = null;

  ngOnInit(){
this.str = 'this is a string';
// this.anotherStr = 'This is another string';
// this.anotherStr = 4;
this.yetAnotherStr = 'dfv';
this.yetAnotherStr = 4;

this.test();

this.numberArrayInput([]);
this.numberArrayInput([5]);
this.numberArrayInput([5, 10, 15]);

this.anyArrayInput([]);
this.anyArrayInput([5]);
this.anyArrayInput([5, 10, 15]);
this.anyArrayInput(['string', 5]);
  }

  test(){
    let name: string = 'Test User';
    let age: number = 30;
    let text: string = `My name is ${name} and I am ${age} years old.`;
    console.log(text);
  }
  numberArrayInput(x:number[]){
    console.log(x);
  }

  anyArrayInput(x: Array<any>){
    console.log(x);
  }
}
