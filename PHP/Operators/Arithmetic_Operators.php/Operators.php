<!-- Operators carry out operations on variables and values. -->

<!-- the results are in an image called "operators" -->

<!-- Arithmetic Operators -->

<!-- Arithmetic operators work with numeric values to perform common arithmetical operations. -->

<!-- the results are in an image called "operators2" -->

<!-- Example: -->

<?php

    $num1 = 8;
    $num2 = 6;

    // Addition
    echo $num1 + $num2; //4

    // Substraccion
    echo $num1 - $num2; //2

    //Multiplication
    echo $num1 * $num2; //48
?>

<!-- Run the code and see how it works! -->

<!-- Modulus -->

<!-- The modulus operator, represented by the % sign, returns the remainder of the division of the first operand by the second operand: -->


<?php

    $x = 8;
    $y = 6;
    echo $x % $y; // 2

?>

<!-- If you use floating point numbers with the modulus operator, they will be converted to integers before the operation. -->


<!-- Increment & Decrement

The increment operators are used to increment a variable's value.
The decrement operators are used to decrement a variable's value. -->

$x++; // equivalent to $x = $x+1;
$x--; // equivalent to $x = $x-1; 

<!-- Increment and decrement operators either precede or follow a variable. -->
$x++; // post-increment 
$x--; // post-decrement 
++$x; // pre-increment 
--$x; // pre-decrement

<!-- The difference is that the post-increment returns the original value before it changes the variable, while the pre-increment changes the variable first and then returns the value. -->

<!-- Example: -->
$a  = 2; $b = $a++; // $a=3,  $b=2
$a  = 2; $b = ++$a; // $a=3,  $b=3

<!-- The increment operators are used to increment a variable's value. -->