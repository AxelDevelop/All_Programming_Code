-- The basic syntax for the CREATE TABLE statement is as follows:

CREATE TABLE ​table_name(

column_name1 data_type(size),

column_name2 data_type(size),

column_name3 data_type(size),

....

columnN data_type(size)

)

-- - The column_names specify the names of the columns we want to create.
-- - The data_type parameter specifies what type of data the column can hold. For example, use int for whole numbers.
-- - The size parameter specifies the maximum length of the table's column.
-- Note the parentheses in the syntax.

-- Assume that you want to create a table called "Users" that consists of four columns: UserID, LastName, FirstName, and City.
-- Use the following CREATE TABLE statement:

CREATE TABLE Users
(
   UserID int,
   FirstName varchar(100), 
   LastName varchar(100),
   City varchar(100)
); 

-- varchar is the datatype that stores characters. You specify the number of characters in the parentheses after the type. So in the example above, our fields can hold max 100 characters long text.

