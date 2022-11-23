const person = {
  firstName: 'Carlin',
  lastName: 'Choi',
  hobby: 'Video games'
};
console.group(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Student';
console.log("The person's current job is:", person.job);

person.previousJob = 'School Psych Intern';
console.log("The person's previous job is:", person.previousJob);

console.log(person);
