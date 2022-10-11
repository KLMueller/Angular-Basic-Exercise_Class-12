import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Exercise 4: Use ngModel to dynamically change the value of a instance property
  title: string = '';
  // Exercise 1: Use property binding to adjust the height and width of an image.
  width: number = 350;
  height: number = 300;
  // Exercise 2: Click on a button to log to the console.log a message
  message: string = "It's a pitbull!";
onClick(){
  console.log(this.message)
}
// Exercise 3: Dynamically disable and enable the input field using event binding and property binding.
box = ""
// Exercise 5: Use event binding for whenever you click the button, you set isDisabled to the opposite of its current value. Example: If isDisabled is true when I click on the button, isDisabled is set to false.
isDisabled:boolean = false;
// Exercise 6: Use ngIf and a instance property to show the element; if the instance property is false, it should not show the element
isShow: boolean = true;
// Exercise 7: Use ngIf and else to dynamically add certain elements to the webpage
isShowContent: boolean = true;
// Exercise 8: Use ngStyle to change the background color of an element
myColor: string = "green";
// Exercise 10: Use ngFor to output each element of an Array
dogFoods = ["carrots, Kibble, ice cream"];


// Ex.3 continued..
onOpenBox() {
  this.box = `${this.box} is a great name! Thank you for your suggestion!`
}

}
