-- The UPDATE statement allows us to alter data in the table.

-- The basic syntax of an UPDATE query with a WHERE clause is as follows:

UPDATE actor
SET column1 = value1, column2 = value2, ...
WHERE condition;

-- You specify the column and its new value in a comma-separated list after the SET keyword.

-- If you omit the WHERE clause, all records in the table will be updated!

-- Consider the following table called "Employees":

-- the results are in the image called "UPDATE"

-- To update John's salary, we can use the following query:

UPDATE Employees
SET Salary = 5000
WHERE ID = 1;

-- Result:

-- the results are in the image called "UPDATE2"

