<!-- An array is a special variable, which can hold more than one value at a time.

If you have a list of items (a list of names, for example), storing them in single variables would look like this: -->

$name1 = "David"; 
$name2 = "Amy"; 
$name3 = "John"; 

<!-- But what if you have 100 names on your list? The solution: Create an array!  -->

<!-- _____________________Numeric Arrays_________________________ -->

<!-- Numeric or indexed arrays associate a numeric index with their values.

The index can be assigned automatically (index always starts at 0), like this:
$names = array("David", "Amy", "John"); -->

<!-- As an alternative, you can assign your index manually. -->
$names[0] = "David";
$names[1] = "Amy";
$names[2] = "John";

<!-- We defined an array called $names that stores three values.

You can access the array elements through their indices. -->

<!-- echo $names[1]; //Outputs amy -->

<!-- Remember that the first element in an array has the index of 0, not 1. -->