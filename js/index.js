"use strict";

import users from "./users.js";

//task 1

const getUserNames = (users) => {
    return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//task 2

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//task 3

const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender).map(item => item.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//task 4

const getInactiveUsers = users => {
    return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//task 5

const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//task 6

const getUsersWithAge = (users, min, max) => {
    return users.filter(user => min < user.age && user.age < max).map(item => item.name);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//task 7

const calculateTotalBalance = users => {
    return users.reduce((acc, user) => acc + user.balance, 0)
};

console.log(calculateTotalBalance(users)); // 20916

//task 8

const getUsersWithFriend = (users, friendName) => {
    return users.filter((user) => user.friends.includes(friendName)).map(user => user.name)
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//task 9

const getNamesSortedByFriendsCount = users => {
    return users.sort((minFriends, maxFriends) => minFriends.friends.length - maxFriends.friends.length);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//task 10

const getSortedUniqueSkills = users => {
    const getSkills = users.reduce((acc, user) => {
        acc.push(...user.skills);
        return acc;
    }, []);

    const result = getSkills.filter((item, index) => {
        return getSkills.indexOf(item) === index;
    }).sort();
    return result;
};

console.log(getSortedUniqueSkills(users));