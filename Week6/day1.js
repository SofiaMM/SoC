//p1 and p2 are called parameters - placeholders for your inputs
//parameters during function declaration
// function myFunction(p1, p2) {
//     return p1 * p2;
// }

// //arguments are passed in during
// //function invocation
// console.log(myFunction(3,6))

// function toCelsius (fahrenheit) {
// 	var homeOwner = 'Rox'
// 	console.log(homeOwner)
// 	return (fahrenheit - 32)*(5/9)
// }

// // to use after an id you have to call the script after the div, otherwise the div doesn't exist when the script runs
// document.getElementById('anavirginia').innerHTML = toCelsius(63)


// toCelsius // we are pointing to the function object: we get a print out of your function in strings
// toCelsius() // we invoke the function with no argument


// var myNum = toCelsius
// console.log(myNum)
// console.log('homeOwner', homeOwner)

function showName (firstName, lastName) {
  var nameIntro = 'Your name is '
  function makeFullName() {
	  return nameIntro + firstName + ' ' + lastName + '!'
  }
  return makeFullName()
}

document.getElementById('anavirginia').innerHTML=showName('Ashcan','Consortia')
//console.log(showName('Ashcan','Consortia'))

//anonymous function
//a function within a function where inner function has access to outer function's scope
// $(function () {
// 	var selections = []
// 	$('.myButton').click(function() {    //'.anavirgia' is a selector
// 		selections.push(this.prompt('name'))  // 'this.' refers to the object itself (it's like self in python)
// 	})
// })


//create a button to click above and update #anavirginia to be selections

//like creating an object with getter and setter
function celebrityID () {
  var celebrityID = 999
  return {
  	getID: function () {
  	  return celebrityID	
  	},
  	setID: function (theNewID) {
  	  celebrityID = theNewID
  	}
  }	
}

var mjID = celebrityID ()
console.log(mjID)
console.log(mjID.getID())

mjID.setID(3141)
console.log(mjID.getID())



// Hoisting: the way JS interpreter runs, hoist means to lift up/raise up

x = 5

elem = document.getElementById('kasia')
elem.innerHTML = x

var x

//before the code execution happens, the interpreter goes to the whole program and takes the declarations but not the assignment
//so it's like the 'var x' is in above 'x = 5'

// let and const are not hoisted (specific kinds of declarations)
// initializations are not hoisted either

var x = 5
var y = 7

elem = document.getElementById('kasia')
elem.innerHTML = x + ' ' + y

//var y = 7 it shouldn't be here
// Good Practice: declare your variables at the top of the scope

function celebrityIDCreator (theCelebrities) {
  var i
  var uniqueID = 100
  for (i = 0; i < theCelebrities.length; i++) {
  	theCelebrities[i]['id'] = function () {
  		return uniqueID + i;
  	}
  }
  return theCelebrities
}

var romComCelebs = [{name:'Reese Witherspoon', id:0}, {name:'Julia Roberts', id:0}, {name:'Meg Ryan', id:0}]

var createIdForRomComCelebs = celebrityIDCreator(romComCelebs)

var reeseID = createIdForRomComCelebs[0]
console.log(reeseID.id())
// we intended 100,101,102
// we got 103,103,103

// HW: how do we fix loop bug in closures? 