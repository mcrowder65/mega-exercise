const utilities = require("./utilities")
function fetchExpenses() {
  return utilities
    .fetchExpenses()
    .then(result => result.json())
    .then(results => results)
    .catch(fetchExpenses)
}

function fetchCategories() {
  return utilities
    .fetchCategories()
    .then(result => result.json())
    .then(results => results)
    .catch(fetchCategories)
}

function fetchExpensesWithCategories(expenses, categories) {
  return utilities
    .fetchExpensesWithCategories(expenses, categories)
    .then(result => result.json())
    .then(results => results)
    .catch(() => fetchExpensesWithCategories(expenses, categories))
}
fetchExpenses()
  .then(expenses => {
    return fetchCategories().then(categories => {
      return fetchExpensesWithCategories(expenses, categories)
    })
  })
  .then(console.log)
