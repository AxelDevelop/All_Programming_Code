-- If you want to select rows that satisfy at least one of the given conditions, you can use the logical OR operator.

-- The following table describes how the logical OR operator functions:

-- the file where the results are found is called "OR"

-- For example, if you want to find the customers who live either in New York or Chicago, the query would look like this:

SELECT * FROM customers 
WHERE City = 'New York' OR City = 'Chicago';

-- the file where the results are found is called "OR2"

-- You can OR two or more conditions.