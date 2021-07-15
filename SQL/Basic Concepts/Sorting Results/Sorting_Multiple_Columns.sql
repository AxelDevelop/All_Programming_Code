-- ORDER BY can sort retrieved data by multiple columns. When using ORDER BY with more than one column, separate the list of columns to follow ORDER BY with commas.

-- Here is the customers table, showing the following records:

-- Results (the results are in the image called "sorting")

-- To order by LastName and Age:

SELECT * FROM customers
ORDER BY LastName, Age;

-- This ORDER BY statement returns the following result:

-- Results (the results are in the image called "ORDER_BY2")

-- As we have two Smiths, they will be ordered by the Age column in ascending order.

-- The ORDER BY command starts ordering in the same sequence as the columns. It will order by the first column listed, then by the second, and so on.
