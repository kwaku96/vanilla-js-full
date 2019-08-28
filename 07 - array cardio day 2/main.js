// ## Array Cardio Day 2
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const now  = new Date();

const every = people.every((person)=>{
    return now.getFullYear() - person.year >= 19 ? true : false;
});

const some = people.some((person)=>{
    return now.getFullYear() - person.year >= 19 ? true: false;
});



console.log('some',some)
console.log('every',every)

console.log('before deleting',comments)

const comment = comments.find((val)=>{
    return val.id === 823423;
});



const index = comments.findIndex((comment)=>{
    return comment.id === 823423;
});

comments.splice(index,1);
console.log('after deleting',comments)