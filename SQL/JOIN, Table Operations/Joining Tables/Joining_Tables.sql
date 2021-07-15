-- All of the queries shown up until now have selected from just one table at a time.

-- One of the most beneficial features of SQL is the ability to combine data from two or more tables.

-- In the two tables that follow, the table named customers stores information about customers:

-- the result is in an image called "JOINING1"

-- The orders table stores information about individual orders with their corresponding amount:

-- the result is in an image called "JOINING2"

-- In SQL, "joining tables" means combining data from two or more tables. A table join creates a temporary table showing the data from the joined tables.

-- Rather than storing the customer name in both tables, the orders table contains a reference to the customer ID that appears in the customers table. This approach is more efficient, as opposed to storing the same text values in both tables.
-- In order to be able to select the corresponding data from both tables, we will need to join them on that condition.

-- To join the two tables, specify them as a comma-separated list in the FROM clause:

SELECT customers.ID, customers.Name, orders.Name, Orders.Amount FROM customers, Orders 
WHERE customers.ID = orders.customer_ID ORDER BY customer.ID;

-- Each table contains "ID" and "Name" columns, so in order to select the correct ID and Name, fully qualified names are used.

-- Note that the WHERE clause "joins" the tables on the condition that the ID from the customers table should be equal to the customer_ID of the orders table.

-- Result:

-- the result is in an image called "JOINING3"

-- The returned data shows customer orders and their corresponding amount.

-- Specify multiple table names in the FROM by comma-separating them.

