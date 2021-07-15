-- The UNION operator is used to combine the result-sets of two or more SELECT statements.

-- All SELECT statements within the UNION must have the same number of columns. The columns must also have the same data types. Also, the columns in each SELECT statement must be in the same order.

-- The syntax of UNION is as follows:

SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;

-- Here is the First of two tables:

-- the result is in an image called "UNION"

-- And here is the Second:

-- the result is in an image called "UNION2"

SELECT ID, FirstName, LastName, City FROM First
UNION
SELECT ID, FirstName, LastName, City FROM Second

-- The resulting table will look like this one:

-- the result is in an image called "UNION3"

-- As you can see, the duplicates have been removed.

-- TIP:
-- If your columns don't match exactly across all queries, you can use a NULL (or any other) value such as:

SELECT FirstName, LastName, Company FROM businessContacts
UNION
SELECT FirstName, LastName, NULL FROM otherContacts;

-- The UNION operator is used to combine the result-sets of two or more SELECT statements.

