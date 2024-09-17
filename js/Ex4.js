let num1 = 3
let num2 = 5
let num3 = 6
if (num1 + num2 > num3) {
    if (num2 + num3 > num1) {
        if (num3 + num1 > num2) {
            console.log("Triangle is possible");
        } else {
            console.log("Triangle is impossible")
        }
    }
}