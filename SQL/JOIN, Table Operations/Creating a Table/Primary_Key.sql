-- The UserID is the best choice for our Users table's primary key.

-- Define it as a primary key during table creation, using the PRIMARY KEY keyword.

CREATE TABLE Users
(
   UserID int,
   FirstName varchar(100),
   LastName varchar(100),
   City varchar(100),
   PRIMARY KEY(UserID)
); 

-- Specify the column name in the parentheses of the PRIMARY KEY keyword.

-- Example of a union of foreign key and primary key:

CREATE INDEX nicknames_id ON humans (nicknames_id)

ALTER TABLE humans ADD FOREIGN KEY (nicknames_id) REFERENCES nicknames (ID)

-- The ALTER TABLE command uses the ADD FOREIGN KEY clause followed by the field that will serve as the foreign key. Then the reserved word REFERENCES is added, followed by the table that will be referenced and the name of the field that will be related.

-- In other words, the branch_id field of the employees table will have values that are "primary keys" within the branches table in its id field.