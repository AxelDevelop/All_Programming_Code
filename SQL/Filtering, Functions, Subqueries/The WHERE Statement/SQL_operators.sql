-- Comparison Operators and Logical Operators are used in the WHERE clause to filter the data to be selected.

-- The following comparison operators can be used in the WHERE clause:

-- the file where the results are found is called "sqlOperators"

-- For example, we can display all customers names listed in our table, with the exception of the one with ID 5:

SELECT * FROM customers
WHERE ID != 5;

-- the file where the results are found is called "resultsOperators"

-- As you can see, the record with ID=5 is excluded from the list.
