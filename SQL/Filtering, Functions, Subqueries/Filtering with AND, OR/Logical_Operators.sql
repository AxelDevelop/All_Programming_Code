-- Logical operators can be used to combine two Boolean values and return a result of true, false, or null.

-- The following operators can be used:

-- the file where the results are found is called "logicalOP"

-- When retrieving data using a SELECT statement, use logical operators in the WHERE clause to combine multiple conditions.

-- If you want to select rows that satisfy all of the given conditions, use the logical operator, AND.

-- the file where the results are found is called "logicalOP2"

-- To find the names of the customers between 30 to 40 years of age, set up the query as seen here:

SELECT ID, firstName, LastName, Age FROM customers WHERE Age >= 30 AND <= 40;

-- This results in the following output:

-- the file where the results are found is called "logicalOP3"

-- You can combine as many conditions as needed to return the desired results.