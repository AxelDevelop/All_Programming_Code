-- The LIKE keyword is useful when specifying a search condition within your WHERE clause.

SELECT column_name(s)
FROM table_name
WHERE column_name LIKE pattern;

-- SQL pattern matching enables you to use "_" to match any single character and "%" to match an arbitrary number of characters (including zero characters).

-- For example, to select employees whose FirstNames begin with the letter A, you would use the following query:

SELECT * FROM employees
WHERE FirstName, LIKE 'A%';

-- Result:

-- the result is in an image called "LIKE"

-- As another example, the following SQL query selects all employees with a LastName ending with the letter "s":

SELECT * FROM employees
WHERE FirstName, LIKE '%s';

-- Result:

-- the result is in an image called "LIKE2"

-- The % wildcard can be used multiple times within the same pattern.

