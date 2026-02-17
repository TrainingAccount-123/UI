document.addEventListener("DOMContentLoaded",function () {
    const inputEl = document.getElementById("inputBlock")
    const button = document.getElementById("askBtn")
    const outputEl = document.getElementById("outputBlock")

    function numberToWords(num) {
        const ones = [
            "Zero", "One", "Two", "Three", "Four", "Five",
            "Six", "Seven", "Eight", "Nine"
        ];

        const teens = [
            "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
            "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
        ];

        const tens = [
            "", "", "Twenty", "Thirty", "Forty",
            "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
        ];

        if (num < 0 || num > 999 || !Number.isInteger(num)) {
            throw new Error("Invalid Input: Only Integers Between 0 and 999 supported");
        }

        function convertBelowHundred(n) {
            return n < 10
            ? ones[n]
            : n < 20
                ? teens[n - 10]
                : n % 10 === 0
                    ? tens[Math.floor(n / 10)]
                    : `${tens[Math.floor(n / 10)]}-${ones[n % 10]}`;
        }

        const hundredPart = Math.floor(num / 100);
        const remainder = num % 100;

        return hundredPart === 0
            ? convertBelowHundred(remainder)
            : remainder === 0
            ? `${ones[hundredPart]} Hundred`
            : `${ones[hundredPart]} Hundred ${convertBelowHundred(remainder)}`;
    }

    function fourIsCosmic(num){
        let temp = num;
        let message = ``;
        try {
            while (true) {
                let number = numberToWords(temp);
                if(number.length !== 4){
                    message += ` ${number} is ${numberToWords(number.length)}.`;
                }
                else if (number.length === 4) {
                    message += ` ${number} is ${numberToWords(number.length)}.`;
                    break
                }
                temp = number.length;
            }
            message += ` Four is Cosmic`;
            return message
        } catch (error) { 
            throw new Error(error.message)
        }
    }



    button.addEventListener("click", function () {
        try {
            const value = inputEl.value.trim();
            if (value === "") {
                throw new Error("Invalid Input: Empty Input Given")
            }
            numeric_value = Number(value)
            let result = fourIsCosmic(numeric_value);
            result += `.  ${numeric_value}`

            outputEl.innerHTML = result;
        } catch (error) {
            outputEl.innerHTML = error.message;
        }
    });


});