const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

const has3 = users
.filter(user => user.languages.length>2);
//     .map(user => user.name);
    // .filter(name =>  name.languages)

//     const emai = users
// .map(email=>email.email);
//
//     const reduction = users
//         .map(user => users.id)
//     .reduce((reduction, userId)=>{
//         return reduction.push(userId)
//
//     },{});

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);

// const result ={
//     "1": {
//
//         id: 5,
//         name: 'justin',
//         email: 'justin@codeup.com',
//         languages: ['html', 'css', 'javascript', 'php'],
//     },
//     }
// }

const result =
users.reduce((accumulator,user)=>{
    return accumulator[users.id] = user;
},{});
//     1 Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//     2 Use .map to create an array of strings where each element is a user's email address
//     3 Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user