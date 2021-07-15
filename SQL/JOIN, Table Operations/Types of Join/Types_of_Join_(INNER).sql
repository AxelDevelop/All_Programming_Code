-- The following are the types of JOIN that can be used in MySQL:

-- - INNER JOIN
-- - LEFT JOIN
-- - RIGHT JOIN

-- INNER JOIN is equivalent to JOIN. It returns rows when there is a match between the tables.
-- Syntax:

SELECT column_name(s)
FROM table1 INNER JOIN table2 
ON table1.column_name = table2.column_name;

-- Note the ON keyword for specifying the inner join condition.

-- The image below demonstrates how INNER JOIN works:

-- the result is in an image called "JOIN"

-- Only the records matching the join condition are returned.

