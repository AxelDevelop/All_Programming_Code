-- Consider the Employees table, which contains the following records:

-- the result is in an image called "Creating_Views"

-- Let's create a view that displays each employee's FirstName and Salary.

CREATE VIEW A
AS SELECT FirstName, Salary
FROM  Employees

-- Now, you can query the List view as you would query an actual table.

SELECT * FROM List;

-- This would produce the following result:

-- the result is in an image called "Creating_Views2"

-- A view always shows up-to-date data! The database engine uses the view's SQL statement to recreate the data each time a user queries a view.
