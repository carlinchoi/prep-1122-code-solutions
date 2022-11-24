function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('AddTwoNumbers Exercise: ' + addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log(convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var getGreetingResult = getGreeting('World');
console.log(getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Results = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5Results);

function multipleAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multipleAndDivideBy5Results = multipleAndDivideBy5(35, 10);
console.log(multipleAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResults = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResults = getCircleCircumference(5);
console.log(getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var getFullNameResults = getFullName('Juan ', 'Ramirez');
console.log(getFullNameResults);

function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log(cubeResult);
