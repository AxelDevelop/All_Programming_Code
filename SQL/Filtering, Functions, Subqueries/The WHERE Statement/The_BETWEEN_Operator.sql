-- The BETWEEN operator selects values within a range. The first value must be lower bound and the second value, the upper bound.

-- The syntax for the BETWEEN clause is as follows:

SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;

-- The following SQL statement selects all records with IDs that fall between 3 and 7:

SELECT * FROM customer
WHERE ID BETWEEN 3 AND 7;


-- the file where the results are found is called "sqlOperators2"

-- As you can see, the lower bound and upper bound are both included in the range.
