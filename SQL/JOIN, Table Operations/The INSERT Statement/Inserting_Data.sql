-- SQL tables store data in rows, one row after another. The INSERT INTO statement is used to add new rows of data to a table in the database.

-- The SQL INSERT INTO syntax is as follows:

INSERT INTO table_name
VALUES (value1, value2, value3,...);

-- Make sure the order of the values is in the same order as the columns in the table.

-- Consider the following Employees table:

-- the result is in an image called "INSERT"

-- Use the following SQL statement to insert a new row:

INSERT INTO Employees
VALUES (8, 'Anthony', 'Young', 35);

-- The values are comma-separated and their order corresponds to the columns in the table.

-- Result:

-- the result is in an image called "INSERT2"

-- When inserting records into a table using the SQL INSERT statement, you must provide a value for every column that does not have a default value, or does not support NULL.

-- Alternatively, you can specify the table's column names in the INSERT INTO statement:

INSERT INTO table_name (column1, column2, column3, ...,columnN)  
VALUES (value1, value2, value3,...valueN);

-- column1, column2, ..., columnN are the names of the columns that you want to insert data into.

INSERT INTO Employees (ID, FisrtName, LastName, Age)
VALUES (8, 'Anthony', 'Young', 35);

-- This will insert the data into the corresponding columns:

-- the result is in an image called "INSERT3"

-- You can specify your own column order, as long as the values are specified in the same order as the columns.

-- It is also possible to insert data into specific columns only.

INSERT INTO Employees (ID, FisrtName, LastName)
VALUES (8, 'Samuel', 'Clarck');

-- Result:

-- the result is in an image called "INSERT4"
