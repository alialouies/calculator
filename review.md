# Review calculator

Reviewer: **Marc-Antoine**  | Date : **5/02/2020**

:o You did a very good calculator! There are some bugs with floating numbers (NaN = Not a Number issue) but it is a really good job. Congrats!

(have a look to the main.js)

### Assignment:
* Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers. **Done**

* Create a basic HTML calculator with buttons for each digit, each of the above functions and an "Equals" key. **Done**

* Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step. **done**

* Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the "=" key. **Good ! It should be nice to see the choosen operator (three lines: previous number / operator / actual number)**

* EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display) **Ok it doesn't work. I have "NaN" (Not a Number) displayed on the calculator :'(**

* EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons**You tried something! Congrats**

* EXTRA CREDIT: Add a "backspace" button, so the user can undo if they click the wrong number**Done**

* EXTRA CREDIT: Add keyboard support!**nope**

### A few remarks
> **Disclaimer** : I am not web developer. I am creating a few functionnal websites mostly for fun. I don't know all the best practices of web programming. I am learning a lot from your works. Thank you!
>
> I try to adapt my remarks to what you learned. I can make mistakes and ask you to do something that you don't know… Please let me know in this case.

* The footer is nice (and beautiful!)
* You did some design tests, it can be improved but it is a good start!
* No empty lines at the end of javascript functions and no `;`
  * Correct
```javascript
function clearOne() {
    const newDisplayValue = result.textContent = result.textContent.slice(0, -1);
    return newDisplayValue;
}
```
  * wrong
```javascript
function clearOne() {
    const newDisplayValue = result.textContent = result.textContent.slice(0, -1);
    return newDisplayValue;
 <EMPTY LINE>              
};
```
* No `;` at the end of any `{}` block (functions, if, etc.)
  * Correct
```javascript
if (result.textContent.charAt(0) === '0') {
    result.textContent = '';
}
```
  * Wrong
```javascript
if (result.textContent.charAt(0) === '0') {
    result.textContent = '';
};
```
* Why two functions `equalsTo` and `operate` that do the same?
* `operate` can be written like this (more concise):
```javascript
function operate(a, operator, b) {
    switch (operator) {
        result.textContent = '';
        total = 0;
        case '+':
            total += add(a, b);
            break;
        case '-':
            total += subtract(a, b);
            break;
        case 'x':
            total += multiply(a, b);
            break;
        case '/':
            total += divide(a, b);
            break;
        case '%':
            total += remainder(a, b);
            break;
        case default:
            console.error(`unknown ${operator} operator`);
            return;
    }
    result.textContent = Math.round(total * 100) / 100;
    displayNumbers.textContent = '';
    displayNumbers.textContent = result.textContent;
    result.textContent = '';
}
```
* Instead of using `parseFloat` in each function, you could assume that arguments in your operators (add, divide, remainder, etc.) are float and change your `operate` function like this :
```javascript
function operate(a, operator, b) {
    const floatA = parseFloat(a);
    const floatB = parseFloat(b);
    switch
}
```

* In your html, don't add useless `id` args.
