-- By default, all results that satisfy the conditions specified in the SQL statement are returned. However, sometimes we need to retrieve just a subset of records. In MySQL, this is accomplished by using the LIMIT keyword.

-- The syntax for LIMIT is as follows:

SELECT column list
FROM table_name
LIMIT [number of records];

-- For example, we can retrieve the first five records from the customers table.

SELECT ID, FirstName, LastName, City FROM customers LIMIT 5;

-- This would produce the following result:

-- Results (the results are in the image called "Results_Limit")

-- By default, all results that satisfy the conditions specified in the SQL statement are returned.

---------------------------OFFSET----------------------------

-- You can also pick up a set of records from a particular offset.

-- In the following example, we pick up four records, starting from the third position:

SELECT ID, FirstName, LastName, City FROM customers OFFSET 3 LIMIT 4;

-- Results (the results are in the image called "OFFSET")

-- The reason that it produces results starting from ID number four, and not three, is that MySQL starts counting from zero, meaning that the offset of the first row is 0, not 1.

