# Class 12 Angular Basics

Exercise 1: Use property binding to adjust the height and width of an image.
Reference: https://www.w3schools.com/tags/att_height.asp

Exercise 2: Click on a button to log to the console.log a message

Exercise 3: Dynamically disable and enable the input field using event binding and property binding.

Exercise 4: Use ngModel to dynamically change the value of a instance property


Exercise 5: Dynamically change the value of a instance property without using ngModel
Reference: https://www.w3schools.com/tags/att_input_value.asp -> learn what value does to an input element You can incorporate event binding to any event listener onClick,onMouseenter, OnInput(https://www.w3schools.com/jsref/dom_obj_event.asp)
The specific event listener we want to use is input; every time the user types, input will trigger an event. Be sure to use the $event to get its value. log to the console the value. You will see that event.target.value will get you whatever the user type.

Exercise 6: Use ngIf and a instance property to show the element; if the instance property is false, it should not show the element


Exercise 7: Use ngIf and else to dynamically add certain elements to the webpage
Create a button element with content "Click me to reverse the value of isShowContent!" Use event binding to reverse the value of isShowContent.

Exercise 8: Use ngStyle to change the background color of an element. The paragraph element should have the background color of green.

Exercise 9: Use ngStyle and event binding to dynamically change an element's content and style.
Create a paragraph element. Use string interpolation to output the value of changeColor between the tags of the paragraph element.
Use ngStyle and changeColor to change the color of the content that the paragraph element holds.

Exercise 10: Use ngFor to output each element of an Array
<hr>
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
