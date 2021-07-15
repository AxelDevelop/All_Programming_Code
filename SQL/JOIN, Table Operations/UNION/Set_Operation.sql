-- Occasionally, you might need to combine data from multiple tables into one comprehensive dataset. This may be for tables with similar data within the same database or maybe there is a need to combine similar data across databases or even across servers.

-- To accomplish this, use the UNION and UNION ALL operators.

-- UNION combines multiple datasets into a single dataset, and removes any existing duplicates.

-- UNION ALL combines multiple datasets into one dataset, but does not remove duplicate rows.

-- UNION ALL is faster than UNION, as it does not perform the duplicate removal operation over the data set.

