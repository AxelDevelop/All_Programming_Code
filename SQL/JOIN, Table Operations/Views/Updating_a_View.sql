-- You can update a view by using the following syntax:

CREATE OR REPLACE VIEW ​view_name A
SELECT column_name(s)
FROM table_name
WHERE condition

-- The example below updates our List view to select also the LastName:

CREATE OR REPLACE VIEW List AS 
SELECT FirstName, LastName, Salary
FROM Employees;

-- Result:

-- the result is in an image called "Updating_View"

-- You can delete a view with the DROP VIEW command.

DROP VIEW ​List

-- It is sometimes easier to drop a table and recreate it instead of using the ALTER TABLE statement to change the table’s definition.