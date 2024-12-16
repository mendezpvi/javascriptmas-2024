// Function that simulates giving the correct change
function correctChangeFromSanta(bills) {
    // Initiaize variables to count 5 and 10 dollar bills
    let fives = 0
    let tens = 0

    // Loop through each bill in the 'bills' arr
    for (let bill of bills) {
        if (bill === 5) {
            fives++
        } else if (bill === 10) {
            if (fives > 0) {
                fives--
                tens++
            } else {
                // If we don't have a $5 bill, we can't give change, so return false
                return false
            }
        } else if (bill === 20) {
            // Prefer using a $10 bill and a $5 bill
            if (tens > 0 && fives > 0) {
                tens--
                fives--
            } 
            // If we can't use a $10 bill, try using three $5 bills
            else if (fives >= 3) {
                fives -= 3
            } else {
                // If we can't give change, return false
                return false
            }
        }
    }

    // If we've gone through all the bills and never had a problem, return true
    return true
}


function testCorrectChangeFromSanta(bills) {
    if (correctChangeFromSanta(bills)) {
        console.log("Nice job Santa, everyone got their correct change!")
    } else {
        console.log("Looks like you have some work to do Santa, and bring some money next time!")
    }
}

testCorrectChangeFromSanta([5, 5, 10, 10, 20]) /* false */
testCorrectChangeFromSanta([5, 5, 5, 10, 20]) /* true */
testCorrectChangeFromSanta([20, 10, 5, 5, 5, 10, 20]) /* false */