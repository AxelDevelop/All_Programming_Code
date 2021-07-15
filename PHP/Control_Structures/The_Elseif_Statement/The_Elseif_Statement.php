<!-- Use the if...elseif...else statement to specify a new condition to test, if the first condition is false. -->

<!-- Syntax: -->

if (condition) {
  code to be executed if condition is true;
} elseif (condition) {
  code to be executed if condition is true;
} else {
   code to be executed if condition is false;
}

<!-- You can add as many elseif statements as you want. Just note, that the elseif statement must begin with an if statement. -->

<!-- For example: -->

<?php

    $age = 21;

    if($age <= 13){
        echo "child.";
    }elseif($age > 13 && $age < 19){
        echo "teenager";
    }else {
        echo "Adult";
    }

    // Outputs "Adult"

?>

<!-- We used the logical AND (&&) operator to combine the two conditions and check to determine whether $age is between 13 and 19.
The curly braces can be omitted if there only one statement after the ifelseifelse. -->

For example:
if($age<=13)
echo "Child";
else
echo "Adult";