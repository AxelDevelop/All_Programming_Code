-- Auto-increment allows a unique number to be generated when a new record is inserted into a table.

-- Often, we would like the value of the primary key field to be created automatically every time a new record is inserted.

-- By default, the starting value for AUTO_INCREMENT is 1, and it will increment by 1 for each new record.
-- Let's set the UserID field to be a primary key that automatically generates a new value:

UserID int NOT NULL AUTO_INCREMENT,
PRIMARY KEY (UserID)

-- Auto-increment allows a unique number to be generated when a new record is inserted into a table.

