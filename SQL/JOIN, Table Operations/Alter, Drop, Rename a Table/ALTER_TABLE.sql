-- The ALTER TABLE command is used to add, delete, or modify columns in an existing table.
-- You would also use the ALTER TABLE command to add and drop various constraints on an existing table.

-- Consider the following table called People:

-- the result is in an image called "ALTER_TABLE"

-- The following SQL code adds a new column named DateOfBirth

ALTER TABLE People
ADD DateOfBirth DATE;

-- Result:

-- the result is in an image called "ALTER_TABLE2"

-- All rows will have the default value in the newly added column, which, in this case, is NULL.


