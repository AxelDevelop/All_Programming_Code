-- In SQL, a VIEW is a virtual table that is based on the result-set of an SQL statement.

-- A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.

-- Views allow us to:
-- - Structure data in a way that users or classes of users find natural or intuitive.
-- - Restrict access to the data in such a way that a user can see and (sometimes) modify exactly what they need and no more.
-- - Summarize data from various tables and use it to generate reports.

-- To create a view:

CREATE VIEW view_name AS
SELECT column_name(s)
FROM table_name
WHERE condition;

-- The SELECT query can be as complex as you need it to be. It can contain multiple JOINS and other commands.