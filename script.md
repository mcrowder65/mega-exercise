Alright friends! Welcome back!

Let's wrap up this section strong with a good exercise.

Before I send you on your way, I want to explain the app to you.

Utilities is a file that contains three methods.

fetchExpenses, fetchCategories, and fetchExpensesWithCategories.

All three of these functions return promises that are objects, and inside of those objects there is a function called json,
which also returns a promise, and that resolves to an array.

Something that is unfortunate about each of these three functions is that they all reject intermittently.

So knowing that, your assignment is to
// Call utilities.fetchExpenses and utilities.fetchCategories
// to retrieve the expenses and categories respectively
// Then use those results to call utilities.fetchExpensesWithCategories
// Then output the categorized expense list.
// You should be able to consistently run the app five times in a row without
// unhandled promise rejection warnings popping up.

I am going to help you first by writing out how I would call `utilities.fetchExpenses`

If you're feeling adventurous, feel free to skip the help and go to the codesandbox in the notes below, otherwise,
let's implement that function that calls `utilities.fetchExpenses`

```js
function fetchExpenses() {
  return utilities.fetchExpenses()
}

fetchExpenses().then(console.log)
```

Since the function throws occassionally, we'll need to trigger refreshes.
refresh until it resolves correctly
You can do this by typing rs in the terminal, make sure you have started a new session by clicking the plus on the top right
and typing `yarn start`

Then type `rs`, then enter until you get a happy value
We can see here when we call `utilities.fetchExpenses`, it returns an object that has that `json` function inside of it.

Now let's resolve that json function.

```js
function fetchExpenses() {
  return utilities.fetchExpenses().then(result => result.json())
}
```

Now you can see that it is failing in the terminal, but that's alright,
let's add a new line and trigger a rerun.

Cool, we eventually see the output.

So you need to finish the `fetchExpenses` function by handling the promise rejection and ensuring that the expenses are ultimately
returned.

The link to the codesandbox is in the notes below, please don't look at the utilities file, since it won't help you at all.

Good luck!
