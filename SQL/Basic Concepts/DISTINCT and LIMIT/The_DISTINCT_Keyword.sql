-- In situations in which you have multiple duplicate records in a table, it might make more sense to return only unique records, instead of fetching the duplicates.

-- The SQL DISTINCT keyword is used in conjunction with SELECT to eliminate all duplicate records and return only unique ones.

-- The basic syntax of DISTINCT is as follows:

SELECT DISTINCT column_name1, column_name2
FROM table_name;

-- See the customers table below:

-- customers (the results are in the image called ("customers")

-- Note that there are duplicate City names. The following SQL statement selects only distinct values from the City column:

SELECT DISTINCT City FROM customers;

-- This would produce the following result. Duplicate entries have been removed.

-- entries (the results are in the image called "entries")

-- The DISTINCT keyword only fetches the unique values.