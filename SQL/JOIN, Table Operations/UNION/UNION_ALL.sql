-- UNION ALL selects all rows from each table and combines them into a single table.

-- The following SQL statement uses UNION ALL to select data from the First and Second tables:

SELECT ID, FirstName, LastName, City FROM First
UNION ALL
SELECT ID, FirstName, LastName, City FROM Second;

-- The resulting table:

-- the result is in an image called "UNION_ALL"

-- As you can see, the result set includes the duplicate rows as well.
