-- The LEFT JOIN returns all rows from the left table, even if there are no matches in the right table.

-- This means that if there are no matches for the ON clause in the table on the right, the join will still return the rows from the first table in the result.

-- The basic syntax of LEFT JOIN is as follows:

SELECT table1.column1, table2.column2...
FROM table1 LEFT OUTER JOIN table2
ON table1.column_name = table2.column_name;

-- The OUTER keyword is optional, and can be omitted.

-- The image below demonstrates how LEFT JOIN works:

-- the result is in an image called "LEFT_JOIN"

-- Consider the following tables.

-- customers:

-- the result is in an image called "LEFT_JOIN_(c)"

-- items:

-- the result is in an image called "LEFT_JOIN_(i)"

-- The following SQL statement will return all customers, and the items they might have:

SELECT customers.Name, items.Name
FROM customers LEFT OUTER JOIN items
ON customers.ID = items.Seller_ID;

-- Result:

-- the result is in an image called "LEFT_JOIN_(RESULT)"

-- The result set contains all the rows from the left table and matching data from the right table.

-- If no match is found for a particular row, NULL is returned.