// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(arr, name) {
    const matches = arr.filter(function (element) {
        return element.toLowerCase() === name.toLowerCase();
    })
    return matches;
}


// console.log(findMatching(drivers, 'Bobby'))


function fuzzyMatch(arr, firstLetter) {
    const matches = arr.filter(function (element) {
        return element.slice(0, firstLetter.length).toLowerCase() === firstLetter.toLowerCase()
    })
    return matches;
}

// console.log(fuzzyMatch(drivers, 'Sa'))

const driver = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
]

function matchName(arr, name) {
    const matches = arr.filter(function (element) {
        return (element.name).toLowerCase() === name.toLowerCase();
    })
    return matches;
}

// console.log(matchName(driver, "Bobby"))