-- The RIGHT JOIN returns all rows from the right table, even if there are no matches in the left table.

-- the result is in an image called "RIGHT_JOIN"

-- The basic syntax of RIGHT JOIN is as follows:

SELECT table1.column1, table2.column2...
FROM table1 RIGHT OUTER JOIN table2
ON table1.column_name = table2.column_name;

-- Again, the OUTER keyword is optional, and can be omitted.

-- Consider the same example from our previous lesson, but this time with a RIGHT JOIN:

SELECT customers.Name, items.Name
FROM customers RIGHT OUTER JOIN items
ON customers.ID = items.Seller_ID;

-- the result is in an image called "RIGHT_JOIN2"

-- The RIGHT JOIN returns all the rows from the right table (items), even if there are no matches in the left table (customers).

-- There are other types of joins in the SQL language, but they are not supported by MySQL.

