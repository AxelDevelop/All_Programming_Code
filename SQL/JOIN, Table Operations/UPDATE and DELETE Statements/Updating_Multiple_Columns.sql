-- It is also possible to UPDATE multiple columns at the same time by comma-separating them:

UPDATE Employees
SET Salary = 5000, FirstName
WHERE ID = 1;

-- Result:

-- the results are in the image called "UPDATE3"

-- You can specify the column order any way you like in the SET clause.