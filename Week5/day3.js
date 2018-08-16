name = 'Mara Caralina Aguilera Canon'
name.toUpperCase()
name.slice(10,-5)
a = 3
name.slice(0,a)

// these functions don't change the variable 'name'

String(2)
//'2'
parseInt('2.5')  //doesn't round it, just cuts it
//2
Math.round('2.5')
//3
parseFloat('15')
//15

// **CAUTION**
parseInt('5 is my favorite number.')
//5
parseInt('Who asked you about 5 or whatever?')
//NaN


String('stringy')
//'stringy'
parseInt(3)
//3

//The console.log always converts what it's printing into a string
console.log(3)
//3
console.log(String(3))
//3


//Math.random() just generates a random number between 0 and 1 (not including 1)
//you need to create by hand a way to generate more numbers
a = parseInt((Math.random () *10) + 1) //random numbers between 0 and 10
