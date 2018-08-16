console.log('Good morning to Jess Sanchez!')
console.log('Hello.')
console.log('JavaScript rocks.')
console.log('Nobody deserves a mime, Buffy.')
console.log('Snoopy says #*.^?&+@! when he stubs his toe.')
console.log('     ')
console.log('') // in the empty string we can't highlight, compared to the string with spaces

// console.log in JS == print() in python
// Comments, these don't get executed by the computer
//String Arithmatic = in plain English this means doing things to strings

console.log('Jess Sanchez + Team\nSecond line\n Third line')
console.log('Jess Sanchez' + 'Team')
console.log('Jess Sanchez' +' '+'Team')
console.log('Jess Sanchez', 'Team')
console.log('blink'*4) // in python we can run this but not in JS
//NaN (not a number)
console.log('Valentina'/3) 
//NaN
console.log('Valentina'+3) //this doesn't work in python but it works in JS because transforms number 3 to a string '3'
// Valentina3
console.log('Valentina'-3)
//NaN

//new vocabulary: **type conversion**; the STRING type '333' got CONVERTED to NUMBER type
console.log('333'-3) // (type conversion) the string is transformed in a number
//330

////****BE CAREFUL****
console.log(12+12)
//24
console.log('12'+'12') 
//1212
////BUT:
console.log('12'+12)//1212
console.log(12+'12')//1212
console.log('12'-12)//0
// you have to be careful with this type conversion, it may have a result you're not expecting
// the plus operator and the minus operator have different implicit type conversions
//if we do {}+[] (object plus array) it gives 0
//but if we do []+{} (array plus object) it gives '[object Object]'


// '\' the escape character

//6 primitive types, 7 total types.7 in total, 6 primitive. Strings, numbers, booleans,null, undefined, symbols and objects
// The object is the one who isn't primitive



console.log('...you can say that again...')
console.log('...you can say that again...')
// DON'T DO THIS! Be agressively and proactively lazy!!!

name1 = 'Mara'
name2 = 'Sara'
console.log(name1)
console.log('name1')
console.log(name1,name2)
console.log(name1+name2)
console.log(name1*name2)
console.log(name1, name2, name1+name2, name1*name2)

age = 32
console.log(age)
ageInms=32*365*24*60*60*1000
console.log(ageInms)


// '=' to assign variables
// '==' will check if the value is the same 
// '===' will check if the value AND the type are the same