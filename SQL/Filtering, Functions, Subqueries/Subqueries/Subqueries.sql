-- A subquery is a query within another query.

-- Let's consider an example. We might need the list of all employees whose salaries are greater than the average.
-- First, calculate the average:

SELECT AVG(Salary) FROM employees;

SELECT FirstName, Salary FROM employees
WHERE Salary > 3100 
ORDER BY Salary DESC;

-- Result:

-- the result is in an image called "subqueries"

-- The DESC keyword sorts results in descending order.
-- Similarly, ASC sorts the results in ascending order.

-- A single subquery will return the same result more easily.

SELECT FirstName, Salary FROM employees
WHERE Salary > (SELECT AVG(Salary) FROM employees)
ORDER BY Salary DESC;

-- The same result will be produced.

-- the result is in an image called "subqueries"

-- Enclose the subquery in parentheses.
-- Also, note that there is no semicolon at the end of the subquery, as it is part of our single query.
