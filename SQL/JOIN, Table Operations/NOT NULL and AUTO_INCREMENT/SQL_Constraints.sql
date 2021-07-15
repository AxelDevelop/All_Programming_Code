-- SQL constraints are used to specify rules for table data.

-- The following are commonly used SQL constraints:
-- NOT NULL - Indicates that a column cannot contain any NULL value.
-- UNIQUE - Does not allow to insert a duplicate value in a column. The UNIQUE constraint maintains the uniqueness of a column in a table. More than one UNIQUE column can be used in a table.
-- PRIMARY KEY - Enforces the table to accept unique data for a specific column and this constraint create a unique index for accessing the table faster.
-- CHECK - Determines whether the value is valid or not from a logical expression.
-- DEFAULT - While inserting data into a table, if no value is supplied to a column, then the column gets the value set as DEFAULT.

-- For example, the following means that the name column disallows NULL values.

name varchar(100) NOT NULL

-- During table creation, specify column level constraint(s) after the data type of that column.