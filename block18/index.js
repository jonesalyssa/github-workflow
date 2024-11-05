// Block 18 Tests

// Read the prompt.
// Identify the expectations.
// Write specifications in pseudocode/plain English for all the tests that would be useful for that prompt.
// Try to take any "edge cases," or unexpected circumstances, into account, and write test specs for them.
// Try not to write extraneous tests!

// Unit Tests:
// Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:

// EXPECT [ACTION] TO EQUAL [RESULT]
// EXPECTED: concat0dds([5, 9, 1, 7 -3], [21, 3, 9, 13])
// RESULT: [-3, 1, 3, 5, 6, 9, 13, 21]

// QUESTION:
// What should happen with unexpected inputs?

// ANSWER:
// Unexpected inputs should show up as null or as an error. The user should be given instructions or an example in the form of an alert to guide them in choosing an expected input.

// QUESTION:
// What kinds of unexpected inputs should we worry about?

// ANSWER:
// We should worry about the user inputting numbers in an improper format such as “1 8 -10 33 4 6” instead of something like “([1, 4, 9], [7, 2, 1])...”.
// We should worry about non-numerical characters being imputed such as letters or special characters.
// We should worry about commas not being included between brackets or brackets/ parenthesis being incomplete

// QUESTION:
// What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)

// ANSWER:
// Multiples of the same odd number should be condensed and only accounted for once.
// A single array should be the return, but a single ray alone won’t guarantee that multiples of the same odd number will only be accounted for once.

// A function called "multiplication" that returns the product of the two input numbers.

// A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
// Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]
// ...should result in [-1, 1, 3, 9, 15]
// Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:
// What should happen with unexpected inputs?
// The answer should appear as an error

// QUESTION:
// What kinds of unexpected inputs should we worry about?

// ANSWER:
//We should worry about the user inputting numbers in an improper format such as “1 8 -10 33 4 6” instead of something like “([1, 4, 9], [7, 2, 1])...”.
// We should worry about non-numerical characters being imputed such as letters or special characters.
// We should worry about commas not being included between brackets or brackets/ parenthesis being incomplete
// What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)
// Multiples of the same odd number should be condensed and only accounted for once.
// A single array should be the return, but a single ray alone won’t guarantee that multiples of the same odd number will only be accounted for once.

// Functional Tests:
// A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

// Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:

// QUESTION:
// What should happen if the cart is empty?

// ANSWER:
// There should be a “your cart is empty” message with a cute icon
// Links to in-stock should be suggested
// Staples or new items that most people would want, need, or replace regularly
// Maybe overstock items the store is trying to sell quickly
// If this customer has an account and has ordered before, suggest items that other customers who have bought the same items as them have also purchased
// Show coupons, deals, and sales to incentivize the user to shop and stay on the website, likely with the longevity of the deal to instill a sense of urgency to check out

// QUESTION:
// What needs to be shown to the user at each step of check out?

// ANSWER:
// Items in their cart
// Number of items in their cart
// Total price
// More suggested items
// The button to continue the checkout process
// The time it would take to receive the order
// A progress bar to see how far they are from finalizing their order with links to go to previous pages if they need to edit information

// QUESTION:
// What behaviors of this feature does the prompt miss or gloss over?

// ANSWER:
// If this user does not have an account, there needs to be a feature that ensures they’re checking out at the right store location (if picking up in-person) and that their address, contact information, and payment methods can be input and verified.
// There should be an option to subscribe to emails or texts to ensure you continue to target previous customers
