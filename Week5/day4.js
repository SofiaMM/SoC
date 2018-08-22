/*
var a = 'Bituin Callanta'.length;
var b = 'Jessi_RS'.length;
a == b;
a === b;
a != b;
a < b;
a > b;
(a > 10 && b < 10);  	// and
(a == 15 || b == 300);  // or
!(a == b);   			// not

// if 
var longName = (a > 10) ? 'You have a long name' : 'You have a short name';
longName; // "You have a long name"

age = 32;
var canVote = (age < 18) ? 'Too young' : 'OK to vote';
canVote; // "OK to vote"

*/

var a = 'Sara Gottschalk'.length;
var b = 'Bituin Callanta'.length;

if (a > b) {
	console.log('They are equal in length.');
} else if (a == 20) {
	console.log('Length is twenty.');
} else if (a == 21) {
	console.log('Length is twenty-one.');
} else {
	console.log('a isn\'t bigger than b.', a, b);
}


// *** WHILE loop ***

/*
var input = ''
while (input != 'bye'){
	input = prompt()
}

alert('Come again soon')

// this is least prefered
var input = '';
while (true) {
	input = prompt();
	if (input == 'bye') {
		break;
	}
}
alert ('Come again soon!')


// while loop that counts the number of women in #1millionwomentotech
var i = 0;
while(i <= 1000000) {
	n = prompt('Your name:');
	i += 1;
	alert(n + ' is the woman number '+ i +' in 1mwtt!');

}

*/

// i = i + 1 is the same as i += 1 and i++
// however i++ returns the previous number but it actually increments, in comparison with ++i that increments and returns the incremented number

//*ARRAYS*

var students = ['Sofia Maria','Mara','Rocio','Bituin Callanta', 'Jessi_RS', 'Jessica Sanchez','Rox Arten','Angela', 'Ana Sustic', 'Sara Gottschalk', 'Anusha Lihala'];
//or
//var students2 = new Array('Sofia Maria','Mara','Bituin Callanta', 'Jessi_RS', 'Jessica Sanchez','Rox Arten','Angela', 'Ana Sustic', 'Sara Gottschalk', 'Anusha Lihala');

var student1 = students[0]; //array is indexed from 0 as python
var student2 = students[1];

console.log(student1,student2);

//.pop() return last names, but eliminates it from the array
//.push() puts a new name in the array and returns the new length

//students += ['Angie'] //turns the array as a string, so this doesn't work

students[11]; // undefined
students[10]; // "Anusha Lihala"
//In JS we can do this:
students[11] = 'Angie';
students;
//["Sofia Maria", "Mara", "Rocio", "Bituin Callanta", "Jessi_RS", "Jessica Sanchez", "Rox Arten", "Angela", "Ana Sustic", "Sara Gottschalk", "Anusha Lihala", "Angie"]

// *** FOR loops *** 

for (i = 0; i < 1000001; i++) {  //the last parameter happens after the loop is done
	console.log(i);
}