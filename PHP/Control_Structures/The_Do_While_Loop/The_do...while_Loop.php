<!-- The do...while loop will always execute the block of code once, check the condition, and repeat the loop as long as the specified condition is true. -->

<!-- Syntax: -->

do {
  code to be executed;
} while (condition is true); 

<!-- Regardless of whether the condition is true or false, the code will be executed at least once, which could be needed in some situations. -->

<!-- The example below will write some output, and then increment the variable $i by one. Then the condition is checked, and the loop continues to run, as long as $i is less than or equal to 7. -->

<?php

    $i = 5;

    do{
        echo "The number is " . $i . "<br/>";
        $i++;
    } while($i <= 7);

    // Output
    // The number is 5
    // The number is 6
    // The number is 7

?>

<!-- Note that in a do while loop, the condition is tested AFTER executing the statements within the loop. This means that the do while loop would execute its statements at least once, even if the condition is false the first time. -->