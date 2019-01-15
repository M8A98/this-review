#Intermediate Javascript

* Past Notes

 - Intermediate Javascript

Video 1:
Introduction to ’this’
Four rules:
Global -> console.log(this) -> window When ‘this’ is not inside of an object, it refers to the object itself. In this case, window.

“use strict” -> This will prevent you from being able to declare global variables within a function like this: this.person = “colt”; Because of strict, ‘this’ would be undefined.
Object/implicit (inside of a declared object) ‘this’ will be the closest parent object.
Explicit
New


								********************* New Notes *********************



														* THIS *

Its value depends on how its called. this is called "execution context".

It can be determined by four rules:

* Global
*Object/implicit
*Explicit
*New

														* Global *
When the word this is used outside of an object, its value is window. 

var person = "Colt";

this.person === window.person

this === window inside of an object but its a really bad practice. In order to avoid that,
you can write "use strict" above of the code so the value of this within can object can´t be window.

function dogs(){
	return this;
}

dogs(); //With "use strict" -> undefined without "use strict" --> window, which is a global object and everything attached to
//it will become global.

Window is an object. Its exactly the same.
														* Object/implicit *

When this is declared within an object, its value will be its closest parent object.


var person = {
	firstName = "Colt",
	sayHi:function(){
		return "Hi " + this.username;
	},
	determineContext: function (){
		return this === person;
	},
	dog:{
		sayHello:function(){
			return "Hello " + this.firstName 
		},
		determineContext: function(){
			return this === person;
		}
	}
}

person.sayHi(); //Hi Colt
person.determineContext(); //true

person.dog.sayHello(); //Hello undefined
person.dog.determineContext(); //false


What if I want to force the value of this so that its person and not dog?

Using this methods:

Call 

Infinite number of parameters and it is invoked inmmediatly.
--
 Apply				{  They (the three of them)can only be used by functions, not strings,arrays or anything else. They are methods from the global object window !

 Just two parameters and invoked inmmediatly 
 	(thisArg,[dsa,sdas,as,das])

  -- 
  bind 
  Infinite parameters but its not invoked inmmediatly.

														* Call Method *

var person = {
	firstName = "Colt",
	sayHi:function(){
		return "Hi " + this.username;
	},
	determineContext: function (){
		return this === person;
	},
	dog:{
		sayHello:function(){
			return "Hello " + this.firstName 
		},
		determineContext: function(){
			return this === person;
		}
	}
}

person.dog.sayHello.call(person); // Hello Colt;

														* Apply Method *

var colt = {
	firstName:"Colt",
	addNumbers:function(a,b,c,d){
		return this.firstName + " just calculated " + (a+b+c+d);
	}
}

var elie = {
	firstName:"Elie"
}

colt.addNumbers(1,2,3,4); //Colt just calculated 10
colt.addNumbers.call(elie,1,2,3,4); //Elie just calculated 10
colt.addNumbers.apply(elie,[1,2,3,4]);//Elie just calculated 10


******* NOOOTEEE --> Asynchronous code is when you are running code while some other code is running as well.


														* bind Method *



var colt = {
	firstName:"Colt",
	addNumbers:function(a,b,c,d){
		return this.firstName + " just calculated " + (a+b+c+d);
	}
}

var elie = {
	firstName:"Elie"
}

colt.addNumbers(1,2,3,4); //Colt just calculated 10
colt.addNumbers.call(elie,1,2,3,4); //Elie just calculated 10
colt.addNumbers.apply(elie,[1,2,3,4]);//Elie just calculated 10

vae elieCalc = colt.addNumbers.bind(elie,1,2,3,4);
elieCalc(); //Elie just calculated 10

var elieCalc2 = colt.addNumbers.bind(elie,1,2);//It stores it in order to use it later. function (){}
//Its useful when you do not know all the arguments since the beginning,
elieCalc2(3,4); //Elie just calculated 10

//Another example

var colt = {
	firstName:"Colt",
	sayHi:function(){
		setTimeout(function(){
			console.log("Hi " + this.firstName);
		},1000)
	}
}

colt.sayHi()//Hi undefined 1000 (miliseconds later).

var colt = {
	firstName:"Colt",
	sayHi:function(){
		setTimeout(function(){
			console.log("Hi " + this.firstName);
		}.bind(this),1000)
	}
}

colt.sayHi() //Hi colt (1000 miliseconds later).


														* The 'new' keyword *

When you see the word new , this is referring to the new object.

function Person(firstName,lastName){
	this.firstName = firstName;
	this.lastName = lastName
}

var elie = new Person ("Elie","Potter");






