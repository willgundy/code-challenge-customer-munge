/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/

export function greetUsers(customers) {
     // just map over them to make a greeting
    return customers.map(customer => `Hello ${customer.first_name} ${customer.last_name}!`);
}

/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
    return customers.filter(customer => customer.age >= 60).map(customer => `Hello ${customer.first_name} ${customer.last_name}!`);;
        // first, filter over the user to get the ones over 60
        // then map over them to make a greeting
        // I did greater than or equal to sixty
}


/* 
Output: 
4532
*/

export function addAllAges(customers) {
    // reduce through the customers to make a sum
    return customers.reduce((arr, customer) => arr + customer.age, 0);
}

/* 
Output: 
4.5
*/

export function getAverageCoolFactor(customers) {
    // map through to make an array of cool factors
    // then reduce through that array to get a sum
    // then divide by the total number of customers
    return customers.reduce((arr, customer) => arr + customer.cool_factor, 0) / customers.length;
}

/* 
Output: 
{
    female: 42,
    male: 39,
    nonbinary: 8,
    etc . . .
}
*/

export function getTotalOfEachGender(customers) {
    return customers.reduce((acc, customer) => { 
        acc[customer.gender] ? acc[customer.gender]++ : acc[customer.gender] = 1; 
        return acc; 
    }, {});
}

/* 
Output: 
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/

export function getGenderBreakdownOfFordOwners(customers) {
    return customers.filter(customer => customer.car_make === 'Ford').reduce((acc, customer) => { 
        acc[customer.gender] ? acc[customer.gender]++ : acc[customer.gender] = 1; 
        return acc; 
    }, {});
}

/* 
Output: 
{
    ford: {
        female: 3,
        male: 6,
        nonbinary: 0,
    },
    mercedes:  {
        female: 5,
        male: 4,
        nonbinary: 1,
    },
    etc . . .
}
*/

export function getGenderBreakdownOfEachCar(customers) {
    return customers.reduce((acc, customer) => { 
        if(!acc[customer.car_make]) {
            acc[customer.car_make] = customers
                .filter((interiorCustomer) => interiorCustomer.car_make === customer.car_make)
                .reduce((acc, interiorCustomer) => { 
                    acc[interiorCustomer.gender] ? acc[interiorCustomer.gender]++ : acc[interiorCustomer.gender] = 1; 
                    return acc; 
                }, {});
        }
        return acc; 
    }, {});
}

/* 
Output: 
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/


export function getAllCoolFactorsOfEachCar(customers) {
    return customers.reduce((acc, customer) => { 
        acc[customer.car_make] ? acc[customer.car_make].push(customer.cool_factor) : acc[customer.car_make] = [customer.cool_factor]; 
        return acc; 
    }, {});
}

/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////


/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

export function getAverageCoolFactorOfEachCar(customers) {
    return customers.reduce((acc, customer) => { 
        if(!acc[customer.car_make]) {
            const count = customers.filter((interiorCustomer) => interiorCustomer.car_make === customer.car_make).length;
            acc[customer.car_make] = customers
                .filter((interiorCustomer) => interiorCustomer.car_make === customer.car_make)
                .reduce((arr, interiorCustomer) => arr + interiorCustomer.cool_factor, 0) / count;
        }
        return acc; 
    }, {});
}


/* 
Output: 
// break the customers into age demographic blocks. 
// For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20: 38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {
    return customers.reduce((acc, customer) => { 
        const ageIndex = Math.floor(customer.age / 10) * 10;
        acc[ageIndex] ? acc[ageIndex]++ : acc[ageIndex] = 1; 
        return acc; 
    }, {});
}

/* 
Output: 
// break the customers into age blocks. 
// For example, this lists out every cool factor for users aged between 1 and 10, then every cool factor for users aged between 21 and 30, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/

export function getCoolFactorsByAgeBracket(customers) {
    return customers.reduce((acc, customer) => { 
        const ageIndex = Math.floor(customer.age / 10) * 10;
        acc[ageIndex] ? acc[ageIndex].push(customer.cool_factor) : acc[ageIndex] = [customer.cool_factor]; 
        return acc; 
    }, {});
}


/* 
Output: 
// break the customers into age demographic blocks, and give the average cool factor for every age block. 
// For example, below, the average cool factor for users aged between 31-40 is 9.5.

{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/

export function getAverageCoolFactorByAgeBracket(customers) {
    return customers.reduce((acc, customer) => { 
        const ageIndex = Math.floor(customer.age / 10) * 10;
        if(!acc[ageIndex]) {
            const count = customers.filter((interiorCustomer) => interiorCustomer.age >= ageIndex && interiorCustomer.age < ageIndex + 10).length;
            acc[ageIndex] = customers
                .filter((interiorCustomer) => interiorCustomer.age >= ageIndex && interiorCustomer.age < ageIndex + 10)
                .reduce((acc, interiorCustomer) => acc + interiorCustomer.cool_factor, 0) / count;
        }
        return acc;
    }, {});
}

