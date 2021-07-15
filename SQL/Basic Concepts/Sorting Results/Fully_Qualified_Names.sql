-- In SQL, you can provide the table name prior to the column name, by separating them with a dot.

SELECT City FROM customers;

SELECT customers.City FROM customers;

-- The term for the above-mentioned syntax is called the "fully qualified name" of that column.

-- This form of writing is especially useful when working with multiple tables that may share the same column names.

