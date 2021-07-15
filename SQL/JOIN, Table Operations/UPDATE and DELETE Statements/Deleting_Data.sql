-- The DELETE statement is used to remove data from your table. DELETE queries work much like UPDATE queries.

DELETE FROM table_name
WHERE condition; 

-- For example, you can delete a specific employee from the table:

DELETE FROM Employees
WHERE ID = 1;

-- Result:

-- the results are in the image called "DELETING"

-- If you omit the WHERE clause, all records in the table will be deleted!
-- The DELETE statement removes the data from the table permanently.

