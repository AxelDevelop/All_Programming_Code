-- The UPPER function converts all letters in the specified string to uppercase.
-- The LOWER function converts the string to lowercase.

-- The following SQL query selects all LastNames as uppercase:

SELECT FirsName, UPPER(LastName) AS lastName 
FROM employees;

-- the result is in an image called "UPPER"

-- If there are characters in the string that are not letters, this function will have no effect on them.

