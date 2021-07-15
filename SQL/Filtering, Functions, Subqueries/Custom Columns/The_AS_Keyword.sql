-- A concatenation results in a new column. The default column name will be the CONCAT function.

-- You can assign a custom name to the resulting column using the AS keyword:

SELECT CONCAT(FirstName, ', ', City) AS new_column
FROM customers;

-- And when you run the query, the column name appears to be changed.

-- the file where the results are found is called "AS"

-- A concatenation results in a new column.
