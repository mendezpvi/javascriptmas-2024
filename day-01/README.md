# Day 01 - Grandpa's Gift List 🎅

## *Challenge* 💪
Grandpa has a Christmas wish list to keep track of all the gifts he wants to ask for. But there’s a problem: if he forgets he’s already added something, the list gets clogged up with duplicates. This happened last year, and he ended up with 8 talking picture frames on Christmas Day!

Your task is to complete the `checkDuplicate()` function 👇 to ensure no duplicates are added to the list. But here’s the tricky part: Grandpa sometimes hits the spacebar more than once, making it harder to spot duplicates.

For example, only one of these entries should be added to the list — the others should be flagged as duplicates:

- "talking picture frames"
- "talking  picture frames"
- "talking picture    frames"
- " talking picture frames "

### **Your tasks:**
1. Ensure no duplicates can be added to the list.
2. Account for extra spaces at the beginning/end and between words.
 
### **Stretch Goals:**
1. Case Sensitivity: Handle cases where capitalization differs. For example:
   - `"Cat Hammock"` should be flagged as a duplicate of `"cat hammock"`.
   - Preserve Grandpa’s original capitalization (e.g., if `"Cat Hammock"` is added first, that should be added to the list). Do not simply convert all entries to lower case - Grandpa might well want to capitalize some words. 

2. Additional Features: Add functionality to delete or edit items on the list.

## *Solution* 🤔

![](./JavaScriptmas-Day-01.gif)

```js
function checkDuplicate() {

  // Get and Clean the input text
  const itemText = itemInput.value.trim().replace(/\s+/g, ' ')

  // Check if the text already exists in the list
  // (ignoring case sensitivity)
  const exitInList = listArr.some( item => item.toLowerCase() === itemText.toLowerCase() )

  if (!exitInList) {
    listArr.push(itemText)
  } else {
    alert(`${itemText.toUpperCase()} already exists in the list.`)
  }

  renderList()
}
```

### How it works

1. Clean input:
    + `.trim()`: removes extra spaces from the beginning and end.

    + `.replace(/\s+/g, ' ')`: replaces multiple spaces between words with a single space.

1. Check for duplicates:
    + Use `.some()` to compare the cleaned input (itemText) with existing list items (listArr) in a case-insensitive way.

1. Add or alert:
    + If the item is not in the list, it gets added.

    + If it already exists, an alert notifies Grandpa.

### Regex explanation

+ `\s`: Matches any whitespace character (spaces, tabs, newlines)

+ `+`: Matches one or more of the preceding character (multiple space)

+ `g`: Ensures the pattern is applied globally to anll matches in the text.

***
[🔙 Javascriptmas 2024](../README.md)