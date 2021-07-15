-- The IN operator is used when you want to compare a column with more than one value.

-- For example, you might need to select all customers from New York, Los Angeles, and Chicago.
-- With the OR condition, your SQL would look like this:

SELECT * FROM customers
WHERE City = 'New York'
OR City = 'Los Angeles'
OR City = 'Chicago'

-- the file where the results are found is called "IN"

-- The IN operator is used when you want to compare a column with more than one value.

-- You can achieve the same result with a single IN condition, instead of the multiple OR conditions:

SELECT * FROM customers 
WHERE City IN ('New York', 'Los Angeles', 'Chicago');

-- This would also produce the same result:

-- the file where the results are found is called "IN2"

-- Note the use of parentheses in the syntax.