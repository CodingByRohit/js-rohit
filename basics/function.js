function sayMyName()
{
    console.log("R")
    console.log("O")
    console.log("H")
    console.log("I")
    console.log("T")
}

// sayMyName()

// function addTwoNumber(number1, number2)
// {
//     console.log(number1 + number2)
// }

function addTwoNumber(number1, number2)
{
    // let result = number1 + number2
    // console.log("ROHIT")
    // return result

    return number1 + number2
    
}

const result =  addTwoNumber(3, 4)
// console.log("Results :", result)

function loginUserMessage(username = "sam")
{
    // if(username === undefined)
    if(!username)
    {
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Rohit"));

console.log(loginUserMessage("Rohit Rai"));