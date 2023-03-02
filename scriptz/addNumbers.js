const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
 function addNumbers(sum, numsLeft, completionCallback) {
    for (let i = 0; i < numsLeft; i++) {
        rl.question("Input a number, please.", function(userInput) {
            let userNumber = parseInt(userInput);
            sum = userNumber + sum;
            console.log(sum);
            // numsLeft--;
            // if (numsLeft === 0) {
            //     rl.close();
            // }
        })
    }
}
*/

let recursiveAddNumbers = function(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        completionCallback(sum);
        return rl.close();
    }
    rl.question("Input a number, please.\n", function(userInput) {
        
        let userNumber = parseInt(userInput);
        sum = userNumber + sum;
        if (numsLeft > 1) {
            console.log(`Partial sum: ${sum}`);
        }
        --numsLeft;
        recursiveAddNumbers(sum, numsLeft, completionCallback);
    })
    // completionCallback(sum);
    // console.log(`this is the sum wheeeeee: ${sum}`);
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
recursiveAddNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
