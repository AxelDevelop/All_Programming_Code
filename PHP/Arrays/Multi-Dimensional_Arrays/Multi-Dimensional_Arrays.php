<!-- A multi-dimensional array contains one or more arrays.

The dimension of an array indicates the number of indices you would need to select an element.
- For a two-dimensional array, you need two indices to select an element
- For a three-dimensional array, you need three indices to select an element

Arrays more than three levels deep are difficult to manage. -->

<!-- Let's create a two-dimensional array that contains 3 arrays: -->

$people = array(
   'online'=>array('David', 'Amy'),
   'offline'=>array('John', 'Rob', 'Jack'),
   'away'=>array('Arthur', 'Daniel')
);

<!-- Now the two-dimensional $people array contains 3 arrays, and it has two indices: row and column.
To access the elements of the $people array, we must point to the two indices. -->

echo $people['online'][0]; // Outputs "David";

echo $people['away'][1]; // Outputs "Daniel";

<!-- The arrays in the multi-dimensional array can be both numeric and associative. -->
