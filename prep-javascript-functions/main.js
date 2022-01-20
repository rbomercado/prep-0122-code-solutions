function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(4, 4);
console.log('sum', sum);


function convertHoursToMinutes(h){return (h*60)}
let hours=convertHoursToMinutes(3);
console.log("hours to min",hours);


function getGreeting(name) { return `Hello,` + ` ` + name + ` ` + 'is my name' }
let name = 'Bo';
console.log(`Name + Greeting`, getGreeting(name))


function addAndMultiplyBy5(num1,num2){ return (num1+num2)*5}
let multiplyPemdas=addAndMultiplyBy5(3,4);
console.log(`add and multiply by 5`,multiplyPemdas)


function multiplyAndDivideBy5(num1,num2){return (num1*num2)/5}
let dividePemdas=multiplyAndDivideBy5(5,3);
console.log('multiply and divide by 5',dividePemdas)


function subtractTwoNumbers(num1,num2){return num1-num2}
let subPemdas=subtractTwoNumbers(10,4)
console.log('subtract two numbers',subPemdas)


function getCircleCircumference(radius){return (radius*2)*3.14}
let circumferencePemdas=getCircleCircumference(10)
console.log('circumference',circumferencePemdas)


function getFullName(firstName, lastName) { return firstName + ' ' + lastName }
let firstName = 'Bo'
let lastName = 'Mercado'
console.log('Full Name', getFullName(firstName, lastName))

function cube(number) { return (number) ** 3 }
let exponentPemdas = cube(3)
console.log('cubed', exponentPemdas)
