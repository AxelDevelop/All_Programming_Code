-- The example below demonstrates how to create a table using constraints.

CREATE TABLE Users (
id int NOT NULL AUTO_INCREMENT,
username varchar(40) NOT NULL, 
password varchar(10) NOT NULL,
PRIMARY KEY(id)
);

-- The following SQL enforces that the "id", "username", and "password" columns do not accept NULL values. We also define the "id" column to be an auto-increment primary key field.

-- Here is the result:

-- the result is in an image called "U_CONSTRAINT"

-- When inserting a new record into the Users table, it's not necessary to specify a value for the id column; a unique new value will be added automatically.