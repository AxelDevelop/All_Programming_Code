-- Custom names can be used for tables as well. You can shorten the join statements by giving the tables "nicknames":

SELECT ct.ID, ct.Name, ord.Name, ord.Amount
FROM customers AS ct, orders AS ord
WHERE ct.ID = ord.Customer_ID
ORDER BY ct.ID;

-- As you can see, we shortened the table names as we used them in our query.