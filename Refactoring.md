# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

In my version of the function, I focused on simplifying and consolidating the various if statements to make the code easier to read.

Here are some specifics:

- I removed the `let candidate`; declaration and instead initialized it inline in the next line by using the ternary operator notation. This shortens the code and makes it more concise.
- I reduced nesting whenever possible by using early returns. This helps with readability because it avoids indenting code further to the right.
- I combined the two cases where candidate is assigned a value -- either directly or via hashing -- into a single statement. By doing this, we avoid code duplication and further simplify the logic.
- Instead of checking that candidate exists using `if (candidate)` before checking its type, I simply check its type. This saves us a line of code and doesn't reduce clarity.
- Finally, I rearranged the order of the if statements so that the flow of the code more closely matches how we would think about the logic if reading it out loud.
