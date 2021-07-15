-- The SQRT function returns the square root of given value in the argument.

-- Let's calculate the square root of each Salary:

SELECT Salary, SQRT(Salary)
FROM employees;

-- Result:

-- the result is in an image called "SQRT"

-- Similarly, the AVG function returns the average value of a numeric column:

SELECT AVG(Salary) FROM employees;

-- Result:

-- the result is in an image called "AVG"

-- Another way to do the SQRT is to use POWER with the 1/2 exponent. However, SQRT seems to work faster than POWER in this case.