<!-- The foreach loop works only on arrays, and is used to loop through each key/value pair in an array. -->

<!-- The foreach loop works only on arrays, and is used to loop through each key/value pair in an array. -->

There are two syntaxes:
foreach (array as $value) {
  code to be executed;
}
//or
foreach (array as $key => $value) {
   code to be executed;
}
<!-- 
The first form loops over the array. On each iteration, the value of the current element is assigned to $value, and the array pointer is moved by one, until it reaches the last array element.
The second form will additionally assign the current element's key to the $key variable on each iteration.

The following example demonstrates a loop that outputs the values of the $names array. -->

<?php

    $names = array("john", "David", "David");
    foreach ($name as $name){
        echo $name.'<br />';
    }

?>

<!-- Run the code and see how it works!s -->