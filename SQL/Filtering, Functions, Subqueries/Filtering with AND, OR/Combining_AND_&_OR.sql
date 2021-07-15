-- The SQL AND and OR conditions may be combined to test multiple conditions in a query.
-- These two operators are called conjunctive operators.

-- When combining these conditions, it is important to use parentheses, so that the order to evaluate each condition is known.

-- Consider the following table:

-- the file where the results are found is called "OR_AND"

-- The statement below selects all customers from the city "New York" AND with the age equal to "30" OR “35":

SELECT * FROM customers
WHERE City = 'New Year'
AND (Age = 30 OR Age = 35);

-- the file where the results are found is called "OR_AND2"

-- You can nest as many conditions as you need.