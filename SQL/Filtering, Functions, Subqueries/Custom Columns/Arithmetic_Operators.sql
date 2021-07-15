-- Arithmetic operators perform arithmetical operations on numeric operands. The Arithmetic operators include addition (+), subtraction (-), multiplication (*) and division (/).

-- The following employees table shows employee names and salaries:

-- the file where the results are found is called "Employees"

-- The example below adds 500 to each employee's salary and selects the result:

SELECT ID, FirstName, LastName, salary+500 AS salary
FROM employees;

-- Result:

-- the file where the results are found is called "Employees2"

-- Parentheses can be used to force an operation to take priority over any other operators. They are also used to improve code readability.