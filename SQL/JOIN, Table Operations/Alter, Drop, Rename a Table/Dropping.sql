-- The following SQL code demonstrates how to delete the column named DateOfBirth in the People table.

ALTER TABLE People
DROP COLUMN DateOfBirth;

-- The People table will now look like this:

-- the result is in an image called "Dropping"

-- To delete the entire table, use the DROP TABLE command:

DROP TABLE ​People;

-- Be careful when dropping a table. Deleting a table will result in the complete loss of the information stored in the table!