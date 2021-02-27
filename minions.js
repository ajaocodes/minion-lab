// minions arrays

const minions = ["bob", "kevin", "stuart", "dave", "jerry", "mark", "tim", "phil", "carl"]

//use forEach to check if every name in the array is present 
const present = (hoo) => {
        console.log(hoo + " - here")
    }

minions.forEach(present)


//Use map to capitalise every each minion's name except kevin

const capFirstLetter = (a) => {
    if (a === "kevin") {
        return "kevin"
    }
    else if (a !== "kevin") {
        return a[0].toUpperCase() + a.slice(1).toLowerCase() 
    }
}

const capitalizedMinions = (minions.map(capFirstLetter));
console.log(capitalizedMinions)

// filter - Use filter to filter out minions that are not capitalized and save the correctly capitalized minions to an array called actuallyCapitalizedMinions
const actuallyCapitalizedMinions = capitalizedMinions.filter ((item,index) => {
    return item[0] === item[0].toUpperCase() 
})

//Console.logging the result of filter
console.log(actuallyCapitalizedMinions);

// Use everyagain, but this time on your new actuallyCapitalizedMinionsarray, to check if they're all capitalized now
const ever = actuallyCapitalizedMinions.every((item, index) => {
    return item[0] === item[0].toUpperCase() 
})

console.log("Result is  " + ever)


