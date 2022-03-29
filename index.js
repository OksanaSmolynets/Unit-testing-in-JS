// Task 86(в)
// Дано натуральне число n. Вивести першу його цифру
let firstNumber = n => {
    if (typeof n === 'number') {
        let absNumber = Math.abs(n);
        let firstNumber = Number((Array.from(absNumber.toString())[0]));
        console.log(firstNumber);
        return firstNumber;
    } else {
        console.log('Parameter is not number!');
    }
}

// Task 563 (б)
// Знайти всі менші 100 числа-паліндроми, які при піднесенні до квадрату є також паліндромами

// A function that takes a number and returns it if the number is a palindrome
let isPalindromNumber = (num) => {
    let absNumber = Math.abs(num),
        arrOfNumber = Array.from(absNumber.toString()),
        arrOfNumberReverce = Array.from(absNumber.toString()).reverse(),
        isPalindrom = (JSON.stringify(arrOfNumber) === JSON.stringify(arrOfNumberReverce)) ? true : false;

    if (isPalindrom) {
        return num
    } else return 0
}

// A function, which looking for palindromes from squares of palindromes
let palindromOfNumSquare = () => {
    // create an array from 1 to 100
    let arr = [];
    for (let i = 0; i < 99; i++) {
        arr[i] = i + 1;
    }

    // choose from an array of numbers palindromes and raise them to the square
    let palindromToPower = arr.filter(item => isPalindromNumber(item))
        .map(item => Math.pow(isPalindromNumber(item), 2));

    // choose from the squares of palindromes palindromes
    let palindronNum = palindromToPower.filter(item => isPalindromNumber(item))
                              .map(item => Math.sqrt(item))
    console.log(palindronNum);    
    return palindronNum;
}

palindromOfNumSquare();

module.exports = { firstNumber, isPalindromNumber, palindromOfNumSquare }