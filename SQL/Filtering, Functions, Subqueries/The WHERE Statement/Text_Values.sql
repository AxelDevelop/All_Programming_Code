-- When working with text columns, surround any text that appears in the statement with single quotation marks (').

-- The following SQL statement selects all records in which the City is equal to 'New York'.

SELECT ID, firstName, Lastname, City
FROM customers
WHERE City = 'New York';

-- the file where the results are found is called "whereExample3"

-- If your text contains an apostrophe (single quote), you should use two single quote characters to escape the apostrophe. For example: 'Can''t'.

