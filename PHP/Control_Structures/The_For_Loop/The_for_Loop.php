<!-- The for loop is used when you know in advance how many times the script should run. -->

for (init; test; increment) {
   code to be executed;
}
<!-- 
Parameters:
init: Initialize the loop counter value

test: Evaluates each time the loop is iterated, continuing if evaluates to true, and ending if it evaluates to false

increment: Increases the loop counter value

Each of the parameter expressions can be empty or contain multiple expressions that are separated with commas.
In the for statement, the parameters are separated with semicolons. -->

<!-- The example below displays the numbers from 0 to 5: -->

<?php

    // for ($a = 0; $a < 6; $a++){
    //     echo "Value of a : ". $a . "<br />";
    // }

?>

<!-- Result: -->

<!-- the result is in an image called "For" -->

<!-- The for loop in the example above first sets the variable $a to 0, then checks for the condition ($a < 6). If the condition is true, it runs the code. After that, it increments $a ($a++). -->
